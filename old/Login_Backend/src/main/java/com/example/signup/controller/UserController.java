package com.example.signup.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.signup.model.UserDto;
import com.example.signup.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;

    @PostMapping("/join")
    public ResponseEntity<Void> join(@Valid @RequestBody UserDto user) {
        System.out.println("회원가입 컨트롤러 실행: " + user);
        userService.joinUser(user);
        System.out.println("비밀번호 인코딩 성공");
        return ResponseEntity.ok().build();
    }
    
    // 유효성 검사 실패 예외 처리
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errors.put(error.getField(), error.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

    @GetMapping("/loginOk")
    public ResponseEntity<Map<String, String>> loginOk() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();

        System.out.println("로그인한 유저 아이디: " + userId);

        Map<String, String> userInfo = createUserInfo(userId);

        return ResponseEntity.ok(userInfo);
    }

    @GetMapping("/logoutOk")
    public ResponseEntity<Void> logoutOk() {
        System.out.println("로그아웃 성공");
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user")
    public ResponseEntity<UserDto> getUserPage() {
        System.out.println("일반 인증 성공");

        // 시큐리티에서 읽어서, 해당 정보 유저 반환
        String userId = SecurityContextHolder.getContext().getAuthentication().getName();
        UserDto user = userService.getUserInfo(userId);

        return ResponseEntity.ok(user);
    }

    private Map<String, String> createUserInfo(String userId) {
        Map<String, String> userInfo = new HashMap<>();
        userInfo.put("userId", userId); 
//        userInfo.put("authorities", authorities);
        return userInfo;
    }
    
    // 회원 정보 수정 엔드포인트
    @PostMapping("/user-update")
    public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto updatedUser) {
        System.out.println("회원 정보 수정 요청: " + updatedUser);
        UserDto user = userService.updateUser(updatedUser);
        userService.joinUser(user);
        return ResponseEntity.ok().build();
    }
    
    // 회원가입 유효성 검사 - 아이디 중복
    @GetMapping("/check-userid")
    public ResponseEntity<Boolean> checkUserId(@RequestParam String userId) {
        boolean exists = userService.checkUserIdExists(userId);
        return ResponseEntity.ok(exists);
    }
    // 회원가입 유효성 검사 - 휴대폰 번호 중복
    @GetMapping("/check-phone")
    public ResponseEntity<Boolean> checkPhone(@RequestParam String phone) {
        boolean exists = userService.checkPhoneExists(phone);
    	return ResponseEntity.ok(exists);
    }
    // 회원가입 유효성 검사 - 이메일 중복
    @GetMapping("/check-useremail")
    public ResponseEntity<Boolean> checkUserEmail(@RequestParam String userEmail) {
        boolean exists = userService.checkUserEmailExists(userEmail);
    	return ResponseEntity.ok(exists);
    }
    // 회원가입 유효성 검사 - 비밀번호 8자리 이상
    @GetMapping("/check-password")
    public ResponseEntity<Boolean> checkPassword(@RequestParam String password){
        boolean isValid = password.length() >= 8;
    	return ResponseEntity.ok(isValid);
    }
    
    // 회원 탈퇴
    @PostMapping("/delete-user")
    public ResponseEntity<String> deleteUser(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        System.out.println("아이디를 찾아옵니다 "+ userId);
        if (userId == null || userId.isEmpty()) {
            return ResponseEntity.badRequest().body("User ID is required.");
        }

        try {
        	System.out.println("삭제를 진행합니다.");
            UserDto uDto = userService.getUserInfo(userId);
            if (uDto != null) {
                userService.deleteUser(uDto);
                System.out.println("삭제가 완료되었습니다.");
                return ResponseEntity.ok("User deleted successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());
        }
    }
}
