package com.todo.app.TodoApp.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.todo.app.TodoApp.model.Users;
import com.todo.app.TodoApp.repository.UsersRepository;

@Service
public class TodoAppUserDetails implements UserDetailsService {
	
	private UsersRepository usersRepo;
	
	public TodoAppUserDetails (UsersRepository usersRepo) {
		this.usersRepo = usersRepo;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String userName, password = null;
		List<GrantedAuthority> authorities = null;		
		List<Users> users = usersRepo.findByEmail(username);
		
		if (users.size() == 0) {
			throw new UsernameNotFoundException(String.format("User details not found for the user {0}", username));			
		}
		else {
			userName = users.get(0).getEmail();
			password = users.get(0).getPassword();
			authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority(users.get(0).getRole()));
		}
		
		return new User(userName, password, authorities);
	}

}
