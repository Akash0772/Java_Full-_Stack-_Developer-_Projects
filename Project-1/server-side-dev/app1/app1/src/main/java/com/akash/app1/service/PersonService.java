package com.akash.app1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akash.app1.entity.PersonEntity;
import com.akash.app1.repository.PersonReposetory;

@Service
public class PersonService {
	
	@Autowired
	private PersonReposetory personReposetory;
	
	//Method 1
	public PersonEntity signup(PersonEntity person) {
		return personReposetory.save(person);
	}
	
	
	//Method 2
	public boolean login(PersonEntity person) {
		PersonEntity dbPerson = personReposetory.findByUserNameAndPassword(person.getUserName(), person.getPassword());
		boolean loginStatus = dbPerson != null ? true : false;
		return loginStatus;
	}
}
