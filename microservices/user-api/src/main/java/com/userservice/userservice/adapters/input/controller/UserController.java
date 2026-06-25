package com.userservice.userservice.adapters.input.controller;

import com.userservice.userservice.adapters.input.dto.UserRequest;
import com.userservice.userservice.adapters.input.dto.UserResponse;
import com.userservice.userservice.application.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/v1/product")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping()
    public ResponseEntity<UserResponse> addNewProduct(
            @RequestHeader("Authorization") String token, @RequestBody @Valid UserRequest body){

        log.info("payload recived: {}", body.toString());
        var response = service.postNewProduct(body);
        log.info("payload returned: {}", response.toString());
        return ResponseEntity.ok().body(response);
    }

    @PutMapping()
    public ResponseEntity<UserResponse> updateProduct(@RequestBody @Valid UserRequest body){
        var response = service.updateProduct(body);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("{id}")
    public ResponseEntity<UserResponse> getProduct(@RequestBody String id){
        var response = service.getProduct(id);
        return ResponseEntity.ok().body(response);
    }
}