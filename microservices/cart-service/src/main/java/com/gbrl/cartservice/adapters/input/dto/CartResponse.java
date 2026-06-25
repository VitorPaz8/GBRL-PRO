package com.gbrl.cartservice.adapters.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartResponse {
    private final String text;
    private final int remainingUses;
}