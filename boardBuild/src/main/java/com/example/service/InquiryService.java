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

	public Inquiry save(Inquiry inquiry) {
		inquiry.setCreateAt(LocalDateTime.now());
		return inquiryRepository.save(inquiry);	
	}
	
	public Inquiry update(Long id, Inquiry updateInquiry, String password) {
		Optional<Inquiry> inquiryOptional = inquiryRepository.findById(id);
		if (inquiryOptional.isPresent()) {
			
			// 비밀번호 확인
			Inquiry inquiry = inquiryOptional.get();
			if (inquiry.getPassword().equals(password)) {
				inquiry.setTitle(updateInquiry.getTitle());
				inquiry.setContent(updateInquiry.getContent());
				return inquiryRepository.save(inquiry);
			}
			else {
				throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
			}
		}
		else {
			throw new IllegalArgumentException("게시글을 찾을 수 없습니다.");
		}	
		
	}
	
	public void deleteById(Long id, String password) {
		Optional<Inquiry> inquiryOptional = inquiryRepository.findById(id);
		if (inquiryOptional.isPresent()) {
			
			// 비밀번호 확인
			Inquiry inquiry = inquiryOptional.get();
			if (inquiry.getPassword().equals(password)) {
				inquiryRepository.deleteById(id);
			}
			else {
				throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
			}
		}
		else {
			throw new IllegalArgumentException("게시글을 찾을 수 없습니다.");
		}	
		
	}
		
	
}