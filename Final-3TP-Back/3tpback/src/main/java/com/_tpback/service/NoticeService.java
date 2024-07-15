package com._tpback.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com._tpback.model.Comment;
import com._tpback.model.Notice;
import com._tpback.repository.NoticeRepository;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    public List<Notice> findAll() {
        return noticeRepository.findAll();
    }
    
    public List<Notice> findRecentNotices() {
        return noticeRepository.findTop5ByOrderByCreatedAtDesc();
    }

    public Notice findById(Long id) {
        return noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
    }

    public Notice save(Notice notice) {
        return noticeRepository.save(notice);
    }
    
    public Notice update(Long id, Notice updatedNotice) {
        Notice existingNotice = noticeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("공지사항을 찾을 수 없습니다."));

        existingNotice.setTitle(updatedNotice.getTitle());
        existingNotice.setContent(updatedNotice.getContent());
        existingNotice.setAuthor(updatedNotice.getAuthor());
        existingNotice.setUpdatedAt(LocalDateTime.now());

        return noticeRepository.save(existingNotice);
    }


    public void deleteById(Long id) {
        Notice notice = noticeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("공지를 찾을 수 없습니다."));
        
        noticeRepository.delete(notice);
    }

    public void incrementViewCount(Long id) {
        Notice notice = noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
        notice.setViewCount(notice.getViewCount() + 1);
        noticeRepository.save(notice);
    }
    
    public Comment addComment(Long noticeId, Comment comment) {
        Notice notice = findById(noticeId);
        comment.setNotice(notice);
        notice.getComments().add(comment);
        noticeRepository.save(notice);
        return comment;
    }
}
