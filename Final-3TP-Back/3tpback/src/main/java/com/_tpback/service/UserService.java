package com._tpback.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com._tpback.model.UserDto;
import com._tpback.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void joinUser(UserDto user) {
        String rawPassword = user.getPassword();
        String rawConfirmPassword = user.getConfirmPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        String encConfirmPassword = bCryptPasswordEncoder.encode(rawConfirmPassword);
        System.out.println("비밀번호 인코딩:" + encPassword);
        user.setPassword(encPassword);
        user.setConfirmPassword(encConfirmPassword);
//        user.setRole("ROLE_USER");
        userRepository.save(user);
    }

    public UserDto getUserInfo(String userId) {
    	UserDto user = userRepository.findByUserId(userId);
        return user;
    }
    
    // 회원 정보 수정 메서드
    public UserDto updateUser(UserDto updatedUser) {
        UserDto existingUser = userRepository.findById(updatedUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        existingUser.setUserId(updatedUser.getUserId());
        existingUser.setConfirmPassword(updatedUser.getConfirmPassword());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setName(updatedUser.getName());
        existingUser.setUserEmail(updatedUser.getUserEmail());
        existingUser.setPhone(updatedUser.getPhone());

        return userRepository.save(existingUser);
    }
    
    // 회원가입 유효성 검사 - 저장소에유저아이디 가져오기
    public boolean checkUserIdExists(String userId) {
        return userRepository.existsByUserId(userId);
    }
    // 회원가입 유효성 검사 - 저장소에유저아이디 가져오기
    public boolean checkPhoneExists(String phone) {
    	return userRepository.existsByPhone(phone);
    }
    // 회원가입 유효성 검사 - 저장소에유저아이디 가져오기
    public boolean checkUserEmailExists(String userEmail) {
    	return userRepository.existsByUserEmail(userEmail);
    }
    
    // 회원 정보 삭제
    public void deleteUser(UserDto uDto) {
    	userRepository.delete(uDto);
    }

}
