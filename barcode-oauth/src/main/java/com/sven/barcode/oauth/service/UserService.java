package com.sven.barcode.oauth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sven.barcode.oauth.model.User;
import com.sven.barcode.oauth.model.UserPrincipal;
import com.sven.barcode.oauth.repository.UserRepository;

@Service
public class UserService implements UserDetailsService
{

    @Autowired
    private UserRepository repository;

    public User getUserByEmailAndPassword(final String email, final String pwd)
    {

        return repository.getUserByEmailAndPassword(email, pwd);
    }

    public List<User> getAll()
    {
        return repository.getAll();
    }

    @Override
    public UserDetails loadUserByUsername(final String email)
            throws UsernameNotFoundException
    {
        User user = repository.getByEmail(email);
        if (user != null)
            return new UserPrincipal(user);
        else
            throw new UsernameNotFoundException("no user found");
    }
}
