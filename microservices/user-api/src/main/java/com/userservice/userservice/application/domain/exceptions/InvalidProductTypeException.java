package com.userservice.userservice.application.domain.exceptions;

public class InvalidProductTypeException extends RuntimeException {
    public InvalidProductTypeException(String message) { super(message); }
}
