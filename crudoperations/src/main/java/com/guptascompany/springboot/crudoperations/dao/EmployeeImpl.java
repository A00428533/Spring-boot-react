package com.guptascompany.springboot.crudoperations.dao;

import java.io.Console;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.guptascompany.springboot.crudoperations.entity.Employee;

@Repository
public class EmployeeImpl implements EmployeeDAO {
	
	private EntityManager entityManager;
	
	@Autowired
	public EmployeeImpl(EntityManager theentityManager) {
		entityManager=theentityManager;
	}
		
	public List<Employee> searchAll() {	
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Employee> theQuery = 
				currentSession.createQuery("from Employee", Employee.class);
		
		List<Employee> employees = theQuery.getResultList();
		
		
		return employees;
	}


	@Override
	public Employee findEmployee(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Employee emp = 
				currentSession.get(Employee.class, id);
		
		
		return emp;
	}


	@Override
	public void saveEmployee(Employee employee) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		currentSession.saveOrUpdate(employee);
		
	}


	@Override
	public void deleteEmployee(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query query = 
				currentSession.createQuery("delete from Employee where id=:employeeId");
		
		query.setParameter("employeeId", id);
		
		query.executeUpdate();
		
	}

}
