package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Inquiry;
import com.example.service.InquiryService;

@RestController
@RequestMapping("/api/inquiry")
public class InquiryController {

	@Autowired
	private InquiryService inquiryService;
	
	@GetMapping
	public List<Inquiry> getAllInquiries() {
		return inquiryService.findAll();
	}
	
	@PostMapping
	public Inquiry createInquiry(@RequestBody Inquiry inquiry) {
		return inquiryService.save(inquiry);
	}
	
	@PutMapping("/{id}")
	public Inquiry updateInquiry(@PathVariable Long id, 
			@RequestBody Inquiry updatedInquiry, @RequestParam String password) {
		
		return inquiryService.update(id, updatedInquiry, password);
	}
	
	@DeleteMapping("/{id}")
	public void deleteInquiry(@PathVariable Long id, @RequestParam String password) {
		inquiryService.deleteById(id, password);
	}
	
}




























