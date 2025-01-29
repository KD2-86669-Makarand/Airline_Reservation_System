package com.example.demo.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.custom_exception.ApiException;
import com.example.demo.dao.UserDao;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;
import com.example.demo.entity.UserEntity;
import com.example.demo.entity.UserRole;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class UserServiceImpl  implements UserService{
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserRespDTO signIn(AuthRequest dto) {
		UserEntity userEntity = userDao.
				findByEmailAndPassword(dto.getEmail(), dto.getPasswrd())
				.orElseThrow(() -> 
				new ApiException("Invalid Email or password !!!!!"));
		//user entity : persistent -> dto
		return modelMapper.map(userEntity, UserRespDTO.class);
	}

	@Override
	public ApiResponse addUser(UserDTO user) {
		UserEntity userEntity=modelMapper.map(user,UserEntity.class);
		userEntity.setRole(UserRole.ROLE_USER);
		UserEntity persistentUser=userDao.save(userEntity);
		return new ApiResponse("Added new user with ID="
				+ persistentUser.getId());
	}

	
	
	
}
