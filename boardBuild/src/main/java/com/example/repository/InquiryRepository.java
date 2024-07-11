package com.example.repository;

import com.example.entity.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findTop5ByOrderByCreatedAtDesc();
}
