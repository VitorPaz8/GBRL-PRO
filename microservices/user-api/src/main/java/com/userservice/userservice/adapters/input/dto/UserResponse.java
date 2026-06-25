package com.userservice.userservice.adapters.input.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {
    private final String text;
    private final int remainingUses;
}