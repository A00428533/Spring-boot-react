package com.guptascompany.springboot.crudoperations.controller;

import java.io.Console;
import java.util.List;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guptascompany.springboot.crudoperations.entity.Employee;
import com.guptascompany.springboot.crudoperations.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeRestController {

	private EmployeeService employeeService;
	
	@Autowired
	public EmployeeRestController(EmployeeService theemployeeService) {
		employeeService = theemployeeService;
	}
	
	@GetMapping("/employees")
	public List<Employee> searchAll() {
		return employeeService.searchAll();
	}
	
	@GetMapping("/employees/{employeeId}")
	public Employee findEmployee(@PathVariable int employeeId) {
		if(employeeId == 0) {
			throw new RuntimeException("employee id not found"+ employeeId);
		}
		Employee emp = employeeService.findEmployee(employeeId);
		
		return emp;
	}
	
	@PostMapping("/employees")
	public void saveEmployee(@RequestBody Employee emp) {
		
		emp.setId(0);
		
		employeeService.saveEmployee(emp);
	}
	
	@PutMapping("/employees")
	public Employee updateEmployee(@RequestBody Employee emp) {
		
		
		employeeService.saveEmployee(emp);
		
		return emp;
	}
	
	@DeleteMapping("/employees/{employeeId}")
	public String updateEmployee(@PathVariable int employeeId) {
		
		
		Employee emp = employeeService.findEmployee(employeeId);
		
		if (emp == null) {
			throw new RuntimeException("Not able to find Id"+employeeId);
		}
		
		employeeService.deleteEmployee(employeeId);
		
		return "Employee deleted with Id"+employeeId;
		
		
	}
}
