package com.gbrl.productservice.application.services;


import com.gbrl.productservice.adapters.input.dto.ProductRequest;
import com.gbrl.productservice.adapters.input.dto.ProductResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductService {
    private final JwtService jwtService;
    private final JwtService jwtService;

    public ProductResponse postNewProduct(ProductRequest content){
        var response = new ProductResponse("",1);
        return response;
    }

    public ProductResponse updateProduct(ProductRequest content){
        return contentGenerationService.generate(content, userId);
    }
    public ProductResponse getProduct(String userId){
        return contentGenerationService.generate(userId);
    }
    public ProductResponse getPageProduct(ProductRequest content){
        return contentGenerationService.generate(content, userId);
    }
}
