import React from 'react';
import {Form, Button, Jumbotron} from 'react-bootstrap';

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
							<Form.Label style={styles.label}>First Name</Form.Label>
							<Form.Control type="email" placeholder="First Name" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label style={styles.label}>Surname</Form.Label>
							<Form.Control type="password" placeholder="Surname" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label style={styles.label}>Email</Form.Label>
							<Form.Control type="password" placeholder="Email" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label style={styles.label}>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default HomeComp;