package com._tpback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com._tpback.model.Comment;
import com._tpback.model.Inquiry;
import com._tpback.service.InquiryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/inquiry")
public class InquiryController {

    private static final Logger logger = LoggerFactory.getLogger(InquiryController.class);

    @Autowired
    private InquiryService inquiryService;

    @GetMapping
    public List<Inquiry> getAllInquiries() {
        return inquiryService.findAll();
    }

    @GetMapping("/recent")
    public List<Inquiry> getTop5Inquiries() {
        return inquiryService.findTop5Inquiries();
    }

    @GetMapping("/{id}")
    public Inquiry getInquiry(@PathVariable Long id) {
        return inquiryService.findById(id);
    }

    @PostMapping
    public Inquiry createInquiry(@RequestBody Inquiry inquiry) {
        return inquiryService.save(inquiry);
    }

    @PutMapping("/{id}")
    public Inquiry updateInquiry(@PathVariable Long id, @RequestBody Inquiry updatedInquiry) {
        return inquiryService.update(id, updatedInquiry);
    }

    @DeleteMapping("/{id}")
    public void deleteInquiry(@PathVariable Long id) {
        inquiryService.deleteById(id);
    }

    @PutMapping("/increment-view/{id}")
    public void incrementViewCount(@PathVariable Long id) {
        inquiryService.incrementViewCount(id);
    }

    @GetMapping("/{id}/comments")
    public List<Comment> getCommentsByInquiryId(@PathVariable Long id) {
        Inquiry inquiry = inquiryService.findById(id);
        return inquiry.getComments();
    }

    @PostMapping("/{id}/comments")
    public Comment addComment(@PathVariable Long id, @RequestBody Comment comment) {
        logger.info("Add comment: " + comment.getText() + " to inquiry ID: " + id);
        return inquiryService.addComment(id, comment);
    }
}
