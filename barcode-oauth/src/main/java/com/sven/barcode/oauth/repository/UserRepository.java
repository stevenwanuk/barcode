package com.sven.barcode.oauth.repository;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.sven.barcode.oauth.model.User;

@Repository
public class UserRepository {

	private List<User> users = new ArrayList<>();

	@Autowired
	private PasswordEncoder passwordEncoder;
	@PostConstruct
	public void init() {

	    String pwd = passwordEncoder.encode("123");
		users.add(new User("stevenwanuk@gmail.com", pwd, "bestcompany"));
		users.add(new User("stevenwanuk1@gmail.com", pwd, "bestcompany"));
		users.add(new User("stevenwanuk2@gmail.com", pwd, "bestcompany"));
		
	}

	public User getByEmail(final String email) {
		return this.users.stream().filter(s -> s.getEmail().equalsIgnoreCase(email)).findAny().orElse(null);
	}

	public List<User> getAll() {
		return users;
	}

	public User getUserByEmailAndPassword(final String email, final String pwd) {
		return this.users.stream().filter(s -> s.getEmail().equalsIgnoreCase(email) && s.getPwd().equalsIgnoreCase(pwd))
				.findAny().orElse(null);
	}
}
