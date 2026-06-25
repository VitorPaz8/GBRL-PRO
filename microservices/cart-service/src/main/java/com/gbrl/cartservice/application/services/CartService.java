package com.gbrl.cartservice.application.services;

import com.gbrl.cartservice.adapters.input.dto.CardRequest;
import com.gbrl.cartservice.adapters.input.dto.CartResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CartService {
    public CartResponse postNewProduct(CardRequest content){
        return new CartResponse("",1);
    }

    public CartResponse updateProduct(CardRequest content){
        return new CartResponse("",1);
    }
    public CartResponse getProduct(String userId){
        return new CartResponse("",1);
    }
    public CartResponse getPageCard(CardRequest content){
        return new CartResponse("",1);
    }
}
