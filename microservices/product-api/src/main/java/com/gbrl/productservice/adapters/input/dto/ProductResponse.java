package com.gbrl.productservice.adapters.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductResponse {
    private final String text;
    private final int remainingUses;
}