package com.example.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inquiry_id")
    @JsonBackReference // 순환 참조 방지
    private Inquiry inquiry;

    private String text;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public Comment(Inquiry inquiry, String text) {
        this.inquiry = inquiry;
        this.text = text;
    }
}
