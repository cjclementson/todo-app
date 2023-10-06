package com.todo.app.TodoApp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.todo.app.TodoApp.model.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, Long> {
	
	List<Users> findByEmail (String email);

}
