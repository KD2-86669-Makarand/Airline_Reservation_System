package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;
import com.example.demo.entity.UserEntity;

public interface UserService {
	UserRespDTO signIn(AuthRequest dto);
	ApiResponse addUser(UserDTO user);
	ApiResponse updateUser(Long userId,UserDTO userDto);//update user
	public ApiResponse softDeleteUser(Long userId); //softdelete of user
	public List<UserRespDTO> getAllUser();
}
