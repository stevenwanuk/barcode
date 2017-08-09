package com.sven.barcode.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sven.barcode.api.model.Product;
import com.sven.barcode.api.repository.ProductRepository;

@Service
public class ProductService
{
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll()
    {
        return this.productRepository.getAll();
    }

    public Optional<Product> getProductById(final String id)
    {
        return this.productRepository.getProductById(id);
    }

}
