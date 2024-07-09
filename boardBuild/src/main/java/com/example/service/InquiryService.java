package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Inquiry;
import com.example.repository.InquiryRepository;

import java.util.List;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public List<Inquiry> findAll() {
        return inquiryRepository.findAll();
    }

    public Inquiry findById(Long id) {
        return inquiryRepository.findById(id).orElse(null);
    }

    public Inquiry save(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }

    public Inquiry update(Long id, Inquiry updatedInquiry) {
        Inquiry existingInquiry = inquiryRepository.findById(id).orElse(null);
        if (existingInquiry != null) {
            updatedInquiry.setId(id);
            updatedInquiry.setViewCount(existingInquiry.getViewCount());
            return inquiryRepository.save(updatedInquiry);
        }
        return null;
    }

    public void deleteById(Long id) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
        
        inquiryRepository.delete(inquiry);
    }


    public void incrementViewCount(Long id) {
        Inquiry inquiry = inquiryRepository.findById(id).orElse(null);
        if (inquiry != null) {
            inquiry.setViewCount(inquiry.getViewCount() + 1);
            inquiryRepository.save(inquiry);
        }
    }
}




