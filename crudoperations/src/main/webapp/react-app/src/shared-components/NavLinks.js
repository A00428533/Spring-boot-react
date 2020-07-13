import React from 'react';
import {Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom'

const styles = {
  links: {
	
  }
};

class NavLinks extends React.Component {

	render() {
		return (
      <React.Fragment>
		<div style={styles.links}>  
			<Nav defaultActiveKey="/home" className="flex-column">
				<Nav.Link href="/addEmployee">Add Employee</Nav.Link>
				<Nav.Link href="/listEmployee">List Employees</Nav.Link>
				<Nav.Link href="/updateEmployee">Update Employees</Nav.Link>
				<Nav.Link href="/deleteEmployee">Delete Employees</Nav.Link>
			</Nav>
		</div>
      </React.Fragment>
		);
	}
}

export default NavLinks;