import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const styles = {
  button: {
    position: 'absolute',
    right: '15px',
    marginTop:'-20px'
  }
};

class NavigationBar extends React.Component {

	render() {
    const navProps = this.props;
		return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Link to={"/home"} className="navb">
            <Navbar.Brand href="">{navProps.name}</Navbar.Brand>
          </Link>
           <Link to={"/home"} className="navb">
             <Button style={{ position: 'absolute', right: '100px', marginTop:'-20px'}} variant="outline-light">About</Button>{' '}
           </Link>
          <Link to={"/home"} className="navb">
             <Button style={styles.button} variant="outline-light">Logout</Button>{' '}
           </Link>
        </Navbar> 
      </React.Fragment>
		);
	}
}

export default NavigationBar;