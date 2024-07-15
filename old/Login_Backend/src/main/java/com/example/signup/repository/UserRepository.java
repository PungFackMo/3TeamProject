package com.example.signup.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.signup.model.UserDto;


public interface UserRepository extends JpaRepository<UserDto, Integer> {

	UserDto findByUserId(String userId);
	boolean existsByUserId(String userId);
	boolean existsByPhone(String phone);
	boolean existsByUserEmail(String userEmail);

}
