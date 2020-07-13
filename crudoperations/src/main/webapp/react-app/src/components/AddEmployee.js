import React from 'react';
import {Card, Row, Col, Form, Button} from 'react-bootstrap';
import NavLinks from '../shared-components/NavLinks';
import axios from 'axios';
import MyToast from '../shared-components/MyToast';

class AddEmployee extends React.Component {

	initialState = {
		id:'',
		firstName: '',
		lastName: '',
		email: ''
	}

	constructor(props) {
		super(props);
		this.state = this.initialState;
		this.state.show=false;
	}

	componentDidMount() {
		const empId = +this.props.match.params.id;
		if (empId) {
			this.findEmployeeById(empId);
		}
	}

	findEmployeeById = (empId) => {
		axios.get("http://localhost:8080/api/employees/"+empId)
			.then(response => {
				if(response.data !=null) {
					this.setState({
						id: response.data.id,
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						email: response.data.email
					})
				}

			}).catch((error) => {
				console.log(error)
			})
	}

	submitEmployee = (event)=> {
		event.preventDefault();

		const employee = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email
		}

		axios.post("http://localhost:8080/api/employees", employee)
			.then(response => {
				if(response.data !=null) {
					this.setState({"show": true, method: "post"});
					setTimeout(() => this.setState({"show": false}), 3000)
				} else {
					this.setState({"show": false});
				}
			})
		this.setState(this.initialState);
	};

	empChange = (event) => {
		this.setState({
			[event.target.name] : event.target.value
		})
	};

	listEmployee = () => {
		return this.props.history.push('/listEmployee');
	};

	updateEmployee = (event) => {

		event.preventDefault();

		const employee = {
			id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email
		}

		axios.put("http://localhost:8080/api/employees", employee)
			.then(response => {
				if(response.data !=null) {
					this.setState({"show": true, method: "put"});
					setTimeout(() => this.listEmployee(), 3000)
				} else {
					this.setState({"show": false});
				}
			})

		this.setState(this.initialState);

	}

	resetEmployee = () => {
		this.setState(() => this.initialState)
	};

	render() {
		const {firstName, lastName, email} = this.state;
		return (
			<React.Fragment>
				<div style={{ display: this.state.show ? "block": "none"}}>
					<MyToast
						show ={this.state.show}
						message ={this.state.method === "put" ? 'Employee updated successfully!' :'Employee saved successfully!'}
						type = {'success'}
					/>
				</div>
				<Row>
					<Col md={2}>
						<NavLinks />
					</Col>
					<Col md={8}>
						<Card>
							<Card.Header>{this.state.id ? 'Edit Employee':'Add Employee'}</Card.Header>
							<Card.Body>
								<Form id="addEmpId">
									<Form.Group>
										<Form.Label>First Name</Form.Label>
										<Form.Control 
											type="text" name="firstName"
											value={firstName}
											onChange={this.empChange}
											className={"bg-dark text-white"}
											placeholder="First Name"
											autoComplete="off"
											required 
										/>
									</Form.Group>

									<Form.Group>
										<Form.Label>Last Name</Form.Label>
										<Form.Control 
											type="text" name="lastName"
											value={lastName}
											onChange={this.empChange}
											className={"bg-dark text-white"}
											placeholder="Last Name"
											autoComplete="off"
											required 
										/>
									</Form.Group>
									<Form.Group>
										<Form.Label>Email</Form.Label>
										<Form.Control 
											type="text" name="email"
											value={email}
											onChange={this.empChange}
											className={"bg-dark text-white"}
											placeholder="Email"
											autoComplete="off"
											required
										/>
									</Form.Group>
								</Form>
							</Card.Body>
							<Card.Footer style={{ textAlign: "right"}}>{' '}
								<Button variant="success" type="submit" onClick={ this.state.id ? this.updateEmployee : this.submitEmployee}>
									{this.state.id ? 'Edit' : 'Save'}
								</Button>{' '}
								<Button variant="info" type="submit" onClick={ this.resetEmployee}>
									Reset
								</Button>{' '}
								<Button variant="secondary" type="submit" onClick={ this.listEmployee}>
									Employee List
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default AddEmployee;