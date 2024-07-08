package com.example.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Inquiry {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	private String password;
//	위 패스워드는 게시판 글 수정할 때 입력하는 용도 (게시글 작성 시 미리 입력 - 4자 정도)
	private String title;
    private String content;
    private String author;
    private LocalDateTime createAt;
//    private int viewCount;
    

}