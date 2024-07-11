package com._tpback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com._tpback.model.UserDto;


public interface UserRepository extends JpaRepository<UserDto, Integer> {

	UserDto findByUserId(String userId);
	boolean existsByUserId(String userId);
	boolean existsByPhone(String phone);
	boolean existsByUserEmail(String userEmail);

}
