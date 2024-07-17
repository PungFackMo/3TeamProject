package com._tpback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com._tpback.model.Comment;
import com._tpback.model.Inquiry;
import com._tpback.model.Notice;
import com._tpback.service.NoticeService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/notice")
public class NoticeController {

	private static final Logger logger = LoggerFactory.getLogger(InquiryController.class);

    @Autowired
    private NoticeService noticeService;

    @GetMapping
    public List<Notice> getAllNotices() {
        return noticeService.findAll();
    }
    
    @GetMapping("/recent")
    public List<Notice> getRecentNotices() {
        return noticeService.findRecentNotices();
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
    public void deleteNotice(@PathVariable Long id) {
        noticeService.deleteById(id);
    }

    @PutMapping("/increment-view/{id}")
    public void incrementViewCount(@PathVariable Long id) {
        noticeService.incrementViewCount(id);
    }
    
    @GetMapping("/{id}/comments")
    public List<Comment> getCommentsByInquiryId(@PathVariable Long id) {
        Notice notice = noticeService.findById(id);
        return notice.getComments();
    }

    @PostMapping("/{id}/comments")
    public Comment addComment(@PathVariable Long id, @RequestBody Comment comment) {
        logger.info("Add comment: " + comment.getText() + " to notice ID: " + id);
        return noticeService.addComment(id, comment);
    }
}


