package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.Inquiry;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {

}
