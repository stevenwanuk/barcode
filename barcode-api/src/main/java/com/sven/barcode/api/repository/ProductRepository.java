package com.sven.barcode.api.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.sven.barcode.api.model.Product;

@Repository
public class ProductRepository
{

    private List<Product> mockProducts = new ArrayList<>();

    @PostConstruct
    public void init()
    {

        mockProducts.add(new Product("1", "dota2", "dota2 description"));
        mockProducts.add(new Product("2", "overwatch", "overwatch description"));
        mockProducts.add(new Product("3", "hearthstone", "hearthstone description"));
    }

    public List<Product> getAll()
    {
        return mockProducts;
    }

    public Optional<Product> getProductById(final String id)
    {
        return mockProducts.stream().filter(s -> s.getId().equalsIgnoreCase(id)).findAny();
    }
}
