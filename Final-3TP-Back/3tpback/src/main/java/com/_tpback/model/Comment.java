package com._tpback.model;

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
    
    @ManyToOne 
    @JoinColumn(name = "notice_id") 
    @JsonBackReference // 순환 참조 방지
    private Notice notice; // 공지사항에 연결됨

    private String text;
    private String author;  // 작성자 필드 추가

    @CreationTimestamp
    private LocalDateTime createdAt;

    public Comment(Inquiry inquiry, String text, String author) {
        this.inquiry = inquiry;
        this.text = text;
        this.author = author;  // 생성자 수정
    }
    
    public Comment(Notice notice, String text, String author) {
        this.notice = notice;
        this.text = text;
        this.author = author;
    }
}
