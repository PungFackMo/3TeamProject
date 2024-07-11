package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.UserDto;


public interface UserRepository extends JpaRepository<UserDto, Integer> {

	UserDto findByUserId(String userId);
	boolean existsByUserId(String userId);
	boolean existsByPhone(String phone);
	boolean existsByUserEmail(String userEmail);

}
