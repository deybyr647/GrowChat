import logo from './logo.svg';
import './App.css';

import * as ROUTES from './constants/routes';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import Login from './pages/signin';

const Navigation = () => (
  <>
    <Navbar variant='light' expand='lg' bg='light'>
      <Navbar.Brand as={Link} to={ROUTES.LANDING}>GrowChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.MESSAGES}>Messages</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

const App = () => (
  <>
    <Router>
      <Navigation/>
      <Login/>
    </Router>
  </>  
)

export default App;
