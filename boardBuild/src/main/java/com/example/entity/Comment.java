package com.example.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

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
    private Inquiry inquiry;

    private String text;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public Comment(Inquiry inquiry, String text) {
        this.inquiry = inquiry;
        this.text = text;
    }
}
