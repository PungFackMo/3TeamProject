package com._tpback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com._tpback.model.Inquiry;

import java.util.List;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findTop5ByOrderByCreatedAtDesc();
}
