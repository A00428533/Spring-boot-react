package com.guptascompany.springboot.crudoperations.service;

import java.util.List;

import com.guptascompany.springboot.crudoperations.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> searchAll();
	
	public Employee findEmployee(int id);
	
	public void saveEmployee(Employee employee);

	public void deleteEmployee(int id); 

}
