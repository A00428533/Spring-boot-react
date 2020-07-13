package com.guptascompany.springboot.crudoperations.dao;

import java.util.List;

import com.guptascompany.springboot.crudoperations.entity.Employee;

public interface EmployeeDAO {
	
	public List<Employee> searchAll();
	
	public Employee findEmployee(int id);
	
	public void saveEmployee(Employee employee);

	public void deleteEmployee(int id); 
}
