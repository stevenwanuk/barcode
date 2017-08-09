package com.sven.barcode.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductNotFound extends RuntimeException
{

    /**
     * 
     */
    private static final long serialVersionUID = 2374077017886104933L;

}
