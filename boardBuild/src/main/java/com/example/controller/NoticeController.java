package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Notice;
import com.example.service.NoticeService;

@RestController
@RequestMapping("/api/notice")
public class NoticeController {

	@Autowired
	private NoticeService noticeService;
	
	@GetMapping
	public List<Notice> getAllInquiries() {
		return noticeService.findAll();
	}
	
	@PostMapping
	public Notice createNotice(@RequestBody Notice notice) {
		return noticeService.save(notice);
	}
	
	@PutMapping("/{id}")
	public Notice updateNotice(@PathVariable Long id, 
			@RequestBody Notice updatedNotice, @RequestParam String password) {
		
		return noticeService.update(id, updatedNotice, password);
	}
	
	@DeleteMapping("/{id}")
	public void deleteNotice(@PathVariable Long id, @RequestParam String password) {
		noticeService.deleteById(id, password);
	}
	
}






















