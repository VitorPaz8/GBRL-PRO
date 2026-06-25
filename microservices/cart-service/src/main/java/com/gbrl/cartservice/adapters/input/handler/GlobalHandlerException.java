package com.gbrl.cartservice.adapters.input.handler;

import com.gbrl.cartservice.application.domain.exceptions.CartNotFoundException;
import com.gbrl.cartservice.application.domain.exceptions.InvalidCredentialsException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.OffsetDateTime;

@RestControllerAdvice()
public class GlobalHandlerException {

	@ExceptionHandler(CartNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleUserNotFound(CartNotFoundException ex, HttpServletRequest req) {
		return buildResponse(ex.getMessage(), HttpStatus.NOT_FOUND, req.getRequestURI());
	}

	@ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<ErrorResponse> handleInvalidCredentials(InvalidCredentialsException ex, HttpServletRequest req) {
		return buildResponse(ex.getMessage(), HttpStatus.UNAUTHORIZED, req.getRequestURI());
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex, HttpServletRequest req) {
		String message = ex.getBindingResult().getFieldErrors().stream()
				.map(fe -> fe.getField() + ": " + fe.getDefaultMessage())
				.reduce((a, b) -> a + "; " + b)
				.orElse(ex.getMessage());
		return buildResponse(message, HttpStatus.BAD_REQUEST, req.getRequestURI());
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<ErrorResponse> handleUnreadable(HttpMessageNotReadableException ex, HttpServletRequest req) {
        ex.getMostSpecificCause();
        String msg = ex.getMostSpecificCause().getMessage();
		return buildResponse("Malformed request: " + msg, HttpStatus.BAD_REQUEST, req.getRequestURI());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleGeneric(Exception ex, HttpServletRequest req) {
		return buildResponse("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR, req.getRequestURI());
	}

	private ResponseEntity<ErrorResponse> buildResponse(String message, HttpStatus status, String path) {
		ErrorResponse body = new ErrorResponse(OffsetDateTime.now(), status.value(), status.getReasonPhrase(), message, path);
		return ResponseEntity.status(status).body(body);
	}

}
