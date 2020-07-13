import React from 'react';
import './App.css';
import HomeComp from './components/HomeComp';
import RegisterEmployee from './components/RegisterEmployee';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CRMComp from './components/CRMComp';
import AddEmployee from './components/AddEmployee';
import ListEmployee from './components/ListEmployee';
import NavigationBar from './shared-components/NavigationBar';
import { Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavigationBar name="CRM" />
          <Row>
            <Col lg={12} style={{marginTop: '10px'}}>
              <Switch>
                <Route path="/home" exact component={HomeComp} />
                <Route path="/register" exact component={RegisterEmployee} />
                <Route path="/CRM" exact component={CRMComp} />
                <Route path="/addEmployee" exact component={AddEmployee} />
                <Route path="/listEmployee" exact component={ListEmployee} />
                <Route path="/edit/:id" exact component={AddEmployee} />
              </Switch>
            </Col>
          </Row>
    </Router>
  );
}

export default App;
