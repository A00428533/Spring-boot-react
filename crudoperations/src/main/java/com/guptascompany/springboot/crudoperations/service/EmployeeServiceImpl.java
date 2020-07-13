package com.guptascompany.springboot.crudoperations.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guptascompany.springboot.crudoperations.dao.EmployeeDAO;
import com.guptascompany.springboot.crudoperations.entity.Employee;


@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeDAO employeeDAO;
	
	
	@Autowired
	public EmployeeServiceImpl(EmployeeDAO theemployeeDAO) {
		employeeDAO = theemployeeDAO;
	}

	@Override
	@Transactional
	public List<Employee> searchAll() {
		
		return employeeDAO.searchAll();
	}

	@Override
	@Transactional
	public Employee findEmployee(int id) {
		return employeeDAO.findEmployee(id);
	}

	@Override
	@Transactional
	public void saveEmployee(Employee employee) {
		
		employeeDAO.saveEmployee(employee);
	}

	@Override
	@Transactional
	public void deleteEmployee(int id) {
		
		employeeDAO.deleteEmployee(id);
	}

}
