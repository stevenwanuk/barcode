package com.sven.barcode.oauth.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3848336542789202484L;
	private User user;

	public UserPrincipal(final User user) {
		this.user = user;
	}

	public User getUser()
    {
        return user;
    }

    public void setUser(final User user)
    {
        this.user = user;
    }

    @Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

	    List<GrantedAuthority> list = new ArrayList<>();
	    list.add(new SimpleGrantedAuthority("ROLE_USER"));
		return list;
	}

	@Override
	public String getPassword() {

		return this.user.getPwd();
	}

	@Override
	public String getUsername() {

		return this.user.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
