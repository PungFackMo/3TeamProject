package com._tpback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com._tpback.model.Notice;

import java.util.List;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findTop5ByOrderByCreatedAtDesc();
}
