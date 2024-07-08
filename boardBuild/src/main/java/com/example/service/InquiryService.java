package com.example.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Inquiry;
import com.example.repository.InquiryRepository;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public List<Inquiry> findAll() {
        return inquiryRepository.findAll();
    }

    public Inquiry findById(Long id) {
        return inquiryRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
    }

    public Inquiry save(Inquiry inquiry) {
        inquiry.setCreateAt(LocalDateTime.now());
        return inquiryRepository.save(inquiry);
    }

    public Inquiry update(Long id, Inquiry updateInquiry, String password) {
        Inquiry inquiry = inquiryRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

        if (inquiry.getPassword().equals(password)) {
            inquiry.setTitle(updateInquiry.getTitle());
            inquiry.setContent(updateInquiry.getContent());
            return inquiryRepository.save(inquiry);
        } else {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }
    }

    public void deleteById(Long id, String password) {
        Inquiry inquiry = inquiryRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

        if (inquiry.getPassword().equals(password)) {
            inquiryRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
        }
    }

    public void incrementViewCount(Long id) {
        Inquiry inquiry = inquiryRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));
        inquiry.setViewCount(inquiry.getViewCount() + 1);
        inquiryRepository.save(inquiry);
    }
}
