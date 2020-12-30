package com.github.gmsdeveloper04.boundaries.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class DatabaseException extends RuntimeException{

	private static final long serialVersionUID = -7717582614355967616L;
	
	public DatabaseException(String message) {
		super(message);
	}
	
}
