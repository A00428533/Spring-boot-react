import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import NavLinks from '../shared-components/NavLinks';

//import {Link} from 'react-router-dom';


class CRMComp extends React.Component {

	render() {
		return (
			<React.Fragment>
				<NavLinks />
				<Jumbotron style={{ width:'50%', marginLeft:'auto', marginRight:'auto', marginTop:'150px'}}>
					<div>
						Welcome to CRM
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default CRMComp;