package com.userservice.userservice.application.services;

import com.userservice.userservice.adapters.input.dto.UserRequest;
import com.userservice.userservice.adapters.input.dto.UserResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    public UserResponse postNewProduct(UserRequest content){
        return new UserResponse("",1);
    }

    public UserResponse updateProduct(UserRequest content){
        return new UserResponse("",1);
    }
    public UserResponse getProduct(String userId){
        return new UserResponse("",1);
    }
}
