package com.sven.barcode.oauth.model;

public class User
{

    private String email;
    private String pwd;
    private String org;

    public User(final String email, final String pwd, final String org)
    {
        super();
        this.email = email;
        this.pwd = pwd;
        this.org = org;
    }

    public String getOrg()
    {
        return org;
    }

    public void setOrg(final String org)
    {
        this.org = org;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(final String email)
    {
        this.email = email;
    }

    public String getPwd()
    {
        return pwd;
    }

    public void setPwd(final String pwd)
    {
        this.pwd = pwd;
    }

}
