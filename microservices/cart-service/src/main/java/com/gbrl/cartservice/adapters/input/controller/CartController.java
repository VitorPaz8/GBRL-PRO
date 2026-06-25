package com.gbrl.cartservice.adapters.input.controller;

import com.gbrl.cartservice.adapters.input.dto.CartResponse;
import com.gbrl.cartservice.adapters.input.dto.CardRequest;
import com.gbrl.cartservice.application.services.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/v1/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService service;

    @PostMapping("/{userId}/add-cart")
    public ResponseEntity<CartResponse> addNewCart(
            @RequestHeader("Authorization") String token, @RequestBody @Valid CardRequest body){

        log.info("payload recived: {}", body.toString());
        var response = service.postNewProduct(body);
        log.info("payload returned: {}", response.toString());
        return ResponseEntity.ok().body(response);
    }

    @PutMapping()
    public ResponseEntity<CartResponse> updateProduct(@RequestBody @Valid CardRequest body){
        var response = service.updateProduct(body);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/{cartId}")
    public ResponseEntity<CartResponse> getProduct(@RequestBody String id){
        var response = service.getProduct(id);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/list")
    public ResponseEntity<CartResponse> getPagebleProducts(@RequestBody String id){
        var response = service.getProduct(id);
        return ResponseEntity.ok().body(response);
    }
}