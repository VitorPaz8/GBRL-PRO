package com.gbrl.productservice.application.domain.exceptions;

public class InvalidProductTypeException extends RuntimeException {
    public InvalidProductTypeException(String message) { super(message); }
}
