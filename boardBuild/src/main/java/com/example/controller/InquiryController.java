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
}

