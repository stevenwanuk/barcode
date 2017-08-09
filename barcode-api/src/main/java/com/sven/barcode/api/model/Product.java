package com.sven.barcode.api.model;

public class Product
{

    private String id;
    private String name;
    private String description;

    public Product(final String id, final String name, final String description)
    {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public String getId()
    {
        return id;
    }

    public void setId(final String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(final String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(final String description)
    {
        this.description = description;
    }

}
