package com.example.entity;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String author;
//    private LocalDateTime createAt;
    private int viewCount = 0;
    
//    public String getCreateAtISOFormat() {
//        return createAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
//    }
}
