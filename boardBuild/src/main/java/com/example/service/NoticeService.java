package com.example.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        notice.setCreateAt(LocalDateTime.now());
        return noticeRepository.save(notice);
    }

    public Notice update(Long id, Notice updatedNotice, String password) {
        Notice notice = noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

        if (notice.getPassword().equals(password)) {
        	notice.setTitle(updatedNotice.getTitle());
        	notice.setContent(updatedNotice.getContent());
            return noticeRepository.save(notice);
        } else {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }
    }

    public void deleteById(Long id, String password) {
        Notice notice = noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

        if (notice.getPassword().equals(password)) {
            noticeRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }
    }

    public void incrementViewCount(Long id) {
        Notice notice = noticeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
        notice.setViewCount(notice.getViewCount() + 1);
        noticeRepository.save(notice);
    }
}






























