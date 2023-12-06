package com.todo.app.TodoApp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class TodoController {
	
	@GetMapping(value = "create")
	public String createTodo() {
		return "create to do";		
	}

}
