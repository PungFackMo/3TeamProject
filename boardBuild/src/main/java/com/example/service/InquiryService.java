package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Inquiry;
import com.example.entity.Notice;
import com.example.repository.InquiryRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public List<Inquiry> findAll() {
        return inquiryRepository.findAll();
    }
    
    public List<Inquiry> findTop5Inquiries() {
        return inquiryRepository.findTop5ByOrderByCreatedAtDesc();
    }

    public Inquiry findById(Long id) {
        return inquiryRepository.findById(id).orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
    }

    public Inquiry save(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }

    public Inquiry update(Long id, Inquiry updatedInquiry) {
        Inquiry existingInquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));

        existingInquiry.setTitle(updatedInquiry.getTitle());
        existingInquiry.setContent(updatedInquiry.getContent());
        existingInquiry.setAuthor(updatedInquiry.getAuthor());
        existingInquiry.setUpdatedAt(LocalDateTime.now());

        return inquiryRepository.save(existingInquiry);
    }

    public void deleteById(Long id) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
        
        inquiryRepository.delete(inquiry);
    }

    public void incrementViewCount(Long id) {
        Inquiry inquiry = inquiryRepository.findById(id).orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
        inquiry.setViewCount(inquiry.getViewCount() + 1);
        inquiryRepository.save(inquiry);
    }
}


//package com.example.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.entity.Inquiry;
//import com.example.repository.InquiryRepository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class InquiryService {
//
//    @Autowired
//    private InquiryRepository inquiryRepository;
//
//    public List<Inquiry> findAll() {
//        return inquiryRepository.findAll();
//    }
//    
//    public List<Inquiry> findTop5Inquiries() {
//        return inquiryRepository.findTop5ByOrderByCreatedAtDesc();
//    }
//
//
//    public Inquiry findById(Long id) {
//        return inquiryRepository.findById(id).orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
//    }
//
//    public Inquiry save(Inquiry inquiry) {
//        return inquiryRepository.save(inquiry);
//    }
//
//    public Inquiry update(Long id, Inquiry updatedInquiry) {
//        Inquiry existingInquiry = inquiryRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
//
//        existingInquiry.setTitle(updatedInquiry.getTitle());
//        existingInquiry.setContent(updatedInquiry.getContent());
//        existingInquiry.setAuthor(updatedInquiry.getAuthor());
//        existingInquiry.setUpdatedAt(LocalDateTime.now());
//
//        return inquiryRepository.save(existingInquiry);
//    }
//
//    public void deleteById(Long id) {
//        Inquiry inquiry = inquiryRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
//        
//        inquiryRepository.delete(inquiry);
//    }
//
//    public void incrementViewCount(Long id) {
//        Inquiry inquiry = inquiryRepository.findById(id).orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
//        inquiry.setViewCount(inquiry.getViewCount() + 1);
//        inquiryRepository.save(inquiry);
//    }
//}
//
//
//
