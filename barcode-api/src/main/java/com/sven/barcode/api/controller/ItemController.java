package com.sven.barcode.api.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("#oauth2.hasScope('read')")
public class ItemController
{

    @RequestMapping("/items/{id}")
    public String getItem(@PathVariable final String id)
    {
        return "test-item[" + id + "]";
    }
}
