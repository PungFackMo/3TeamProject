package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Inquiry;
import com.example.entity.Notice;
import com.example.service.NoticeService;

@RestController
@RequestMapping("/api/notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @GetMapping
    public List<Notice> getAllNotices() {
        return noticeService.findAll();
    }

    @GetMapping("/{id}")
    public Notice getNotice(@PathVariable Long id) {
        return noticeService.findById(id);
    }

    @PostMapping
    public Notice createNotice(@RequestBody Notice notice) {
        return noticeService.save(notice);
    }

   
    @PutMapping("/{id}")
    public Notice updateNotice(@PathVariable Long id, @RequestBody Notice updatedNotice) {
        return noticeService.update(id, updatedNotice);
    }

    @DeleteMapping("/{id}")
    public void deleteInquiry(@PathVariable Long id) {
        noticeService.deleteById(id);
    }

    @PutMapping("/increment-view/{id}")
    public void incrementViewCount(@PathVariable Long id) {
        noticeService.incrementViewCount(id);
    }
}


