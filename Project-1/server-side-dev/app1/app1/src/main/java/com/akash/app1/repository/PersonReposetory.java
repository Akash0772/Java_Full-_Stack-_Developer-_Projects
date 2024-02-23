package com.akash.app1.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.akash.app1.entity.PersonEntity;

@Repository
public interface PersonReposetory extends CrudRepository<PersonEntity, Integer> {
	public PersonEntity findByUserNameAndPassword(String userName, String password);
}

