package com.example.demo.services;

import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;

public interface UserService {
	UserRespDTO signIn(AuthRequest dto);
	ApiResponse addUser(UserDTO user);

}
