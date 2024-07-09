package com.example.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Inquiry;
import com.example.entity.Notice;
import com.example.repository.NoticeRepository;

@Service
public class NoticeService {

    @Autowired
    private NoticeRepository noticeRepository;

    public List<Notice> findAll() {
        return noticeRepository.findAll();
    }

    public Notice findById(Long id) {
        return noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
    }

    public Notice save(Notice notice) {
        return noticeRepository.save(notice);
    }
    
    public Notice update(Long id, Notice updatedNotice) {
        Notice existingNotice = noticeRepository.findById(id).orElse(null);
        if (existingNotice != null) {
            existingNotice.setTitle(updatedNotice.getTitle());
            existingNotice.setContent(updatedNotice.getContent());
            existingNotice.setAuthor(updatedNotice.getAuthor());
            return noticeRepository.save(existingNotice);
        }
        return null;
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
}






























