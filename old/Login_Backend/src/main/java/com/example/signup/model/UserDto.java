package com.example.signup.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    @NotBlank
    @Pattern(regexp = "^\\S+$", message = "아이디에는 공백이 포함될 수 없습니다.")
    private String userId;
    @NotBlank
    @Pattern(regexp = "^\\S+$", message = "이름에는 공백이 포함될 수 없습니다.")
    private String name;
    @NotBlank
    @Size(min = 8, message = "비밀번호는 최소 8자 이상이어야 합니다.")
    @Pattern(regexp = "^\\S+$", message = "비밀번호에는 공백이 포함될 수 없습니다.")
    private String password;
    private String confirmPassword;
    
    @NotBlank
    @Pattern(regexp = "^\\S+$", message = "전화번호에는 공백이 포함될 수 없습니다.")
    @Column(unique = true)
    private String phone;
    @NotBlank
    @Pattern(regexp = "^\\S+$", message = "이메일에는 공백이 포함될 수 없습니다.")
    @Column(unique = true)
    private String userEmail;

//    private String role; // ROLE_USER, ROLE_ADMIN

    @CreationTimestamp
    private Timestamp createDate;
}
