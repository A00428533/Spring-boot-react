import React from 'react';
import {Card, Row, Col, Table, ButtonGroup, Button} from 'react-bootstrap';
import NavLinks from '../shared-components/NavLinks';
import axios from 'axios';
import { MdDelete, MdUpdate} from "react-icons/md";
import { IconContext} from "react-icons";
import MyToast from '../shared-components/MyToast';
import {Link} from 'react-router-dom'

class ListEmployee extends React.Component {

	constructor(props) {
		super(props);
		this.state= ({
			employees: []
		})
	}

	componentDidMount() {
		this.getAllEmployees();
	}

	getAllEmployees() {
		axios.get("http://localhost:8080/api/employees")
			.then(response => response.data)
			.then (data => {
				this.setState({employees: data})
			})
	}

	deleteEmployee = (empId) => {
		console.log(empId)
		axios.delete("http://localhost:8080/api/employees/"+empId)
			.then(response => {
				if(response.data !=null) {
					this.setState({"show": true});
					setTimeout(() => this.setState({"show": false}), 3000)
					this.setState({
							employees: this.state.employees.filter(employees => employees.id !== empId)
					})
				} else {
					this.setState({"show": false});
				}
			})
	}

	render() {
		return (
			<React.Fragment>
					<Row>
						<Col md={2}>
							<NavLinks />
						</Col>
						<Col md={8}>
							<div style={{ display: this.state.show ? "block": "none"}}>
								<MyToast 
									show = {this.state.show}
									message = {'Employee deleted successfully!'}
									type = {'danger'}
								/>
							</div>
							<Card>
								<Card.Header>Employee List</Card.Header>
								<Card.Body>
									<Table variant="dark">
										<thead>
											<tr>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											</tr>
										</thead>
										<tbody>
											{this.state.employees.length === 0 ?
												<tr align="center">
													<td colSpan="6">Employee Data Not Available</td>
												</tr>: 
												this.state.employees.map((emp) => (
													<tr key={emp.id}>
														<td>{emp.firstName}</td>
														<td>{emp.lastName}</td>
														<td>{emp.email}</td>
														<td>
															<ButtonGroup>
																<Button variant="outline" onClick={this.deleteEmployee.bind(this, emp.id)}>
																	<IconContext.Provider value={{ color: "red", 
																		className: "global-class-name", 
																		size: "23px"}}
																	>
																		<MdDelete />
																	</IconContext.Provider>
																</Button>
																<Link to={"/edit/"+ emp.id} className="outline">
																	<IconContext.Provider value={{ color: "green", 
																		className: "global-class-name", 
																		size: "23px"}}
																	>
																		<MdUpdate />
																	</IconContext.Provider>
																</Link>{' '}
															</ButtonGroup>
														</td>
													</tr>
												))
											}
										</tbody>
										</Table>
								</Card.Body>
							</Card>
						</Col>
					</Row>
			</React.Fragment>
		);
	}
}

export default ListEmployee;