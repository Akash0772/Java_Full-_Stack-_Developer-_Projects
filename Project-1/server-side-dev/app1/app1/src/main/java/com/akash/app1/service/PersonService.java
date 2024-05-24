package com.akash.app1.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.akash.app1.entity.PersonEntity;
import com.akash.app1.repository.PersonReposetory;

@Service
public class PersonService implements UserDetailsService {
	
	@Autowired
	private PersonReposetory personReposetory;
	
	//Method 1
	public PersonEntity signup(PersonEntity person) {
		person.setPassword(getPasswordEncoder().encode(person.getPassword()));
		return personReposetory.save(person);
	}
	
	
	//Method 2
	public boolean login(PersonEntity person) {
		PersonEntity dbPerson = personReposetory.findByUsernameAndPassword(person.getUsername(), person.getPassword());
		boolean loginStatus = dbPerson != null ? true : false;
		return loginStatus;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		PersonEntity person = personReposetory.findByUsername(username);
		UserDetails userDetails = new User(person.getUsername(), person.getPassword(), new ArrayList<GrantedAuthority>());
		return userDetails;
	}
	
	@Bean
	public BCryptPasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
