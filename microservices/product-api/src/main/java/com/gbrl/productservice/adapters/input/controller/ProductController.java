package com.gbrl.productservice.adapters.input.controller;

import com.gbrl.productservice.adapters.input.dto.ProductRequest;
import com.gbrl.productservice.adapters.input.dto.ProductResponse;
import com.gbrl.productservice.application.services.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/v1/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @PostMapping()
    public ResponseEntity<ProductResponse> addNewProduct(
            @RequestHeader("Authorization") String token, @RequestBody @Valid ProductRequest body){

        log.info("payload recived: {}", body.toString());
        var response = service.postNewProduct(body);
        log.info("payload returned: {}", response.toString());
        return ResponseEntity.ok().body(response);
    }

    @PutMapping()
    public ResponseEntity<ProductResponse> updateProduct(@RequestBody @Valid ProductRequest body){
        var response = service.updateProduct(body);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("{id}")
    public ResponseEntity<ProductResponse> getProduct(@RequestBody String id){
        var response = service.getProduct(id);
        return ResponseEntity.ok().body(response);
    }
    @GetMapping("/list")
    public ResponseEntity<ProductResponse> getPagebleProducts(@RequestBody String id){
        var response = service.getProduct(id);
        return ResponseEntity.ok().body(response);
    }
}