import React from 'react';
import {Form, Button, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const styles = {
  label: {
    display: "block",
    textAlign:'left'
  }
};

class HomeComp extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Jumbotron style={{ width:'50%', marginLeft:'auto', marginRight:'auto', marginTop:'150px'}}>
					<Form>
						<Form.Group controlId="formBasicEmail">
						<Form.Label style={styles.label}>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
						<Form.Label style={styles.label}>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group style={styles.label} controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						 <Link to={"/CRM"}>
							<Button variant="primary" type="submit">
								Log In
							</Button>
						</Link>
						 <Link to={"/register"}>
							<Button style={{marginLeft:'20px'}} variant="primary" type="submit">
								Sign Up
							</Button>
						</Link>
					</Form>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default HomeComp;