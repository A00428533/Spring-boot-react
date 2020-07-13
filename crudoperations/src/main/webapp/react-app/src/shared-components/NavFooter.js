import React from 'react';
import {Navbar, Container, Col} from 'react-bootstrap';


class NavFooter extends React.Component {

	render() {
		let fullYear = new Date().getFullYear();
		return (
			<React.Fragment>
				<Navbar fixed="bottom "bg="dark" variant="dark">
					<Container>
						<Col lg={12} className="text-center text-muted">
							<div>
								All rights reserved by Ankush Gupta © {fullYear}-{fullYear + 1}
							</div>
						</Col>
					</Container>
				</Navbar> 
			</React.Fragment>
		);
	}
}

export default NavFooter;