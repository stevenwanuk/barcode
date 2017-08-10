package com.sven.barcode.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sven.barcode.api.exception.ProductNotFound;
import com.sven.barcode.api.model.Product;
import com.sven.barcode.api.service.ProductService;

@RestController
@PreAuthorize("#oauth2.hasScope('read')")
public class ProductController
{

    @Autowired
    private ProductService productService;

    @RequestMapping(value= "/products/{id}", method = RequestMethod.GET)
    public Product getItem(@PathVariable final String id)
    {

        return this.productService.getProductById(id).orElseThrow(ProductNotFound::new);
    }

    @RequestMapping(value= "products", method = RequestMethod.GET)
    public List<Product> getAll()
    {
        return productService.getAll();
    }
    
    @RequestMapping(value= "/products/{id}", method = RequestMethod.DELETE)
    public Product delete(@PathVariable final String id)
    {
        return productService.delete(id).orElseThrow(ProductNotFound::new);
    }

}
