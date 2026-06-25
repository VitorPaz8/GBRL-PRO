package com.gbrl.cartservice.adapters.input.handler;

import java.time.OffsetDateTime;

public record ErrorResponse(OffsetDateTime timestamp, int status, String error, String message, String path) {
}
