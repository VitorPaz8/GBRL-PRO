package com.gbrl.cartservice.application.domain.exceptions;

public class InvalidProductTypeException extends RuntimeException {
    public InvalidProductTypeException(String message) { super(message); }
}
