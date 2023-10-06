package com.todo.app.TodoApp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GuestController {
	
	@GetMapping(value = "guest")
	public String guest() {
		return "guest";		
	}

}
