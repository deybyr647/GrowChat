import logo from './logo.svg';
import './App.css';

import * as ROUTES from './constants/routes';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import Login from './pages/signin';
import SignUp from './pages/signup';

const Navigation = () => {
  return(
    <>
      <Navbar variant='light' expand='lg' bg='light'>
        <Navbar.Brand as={Link} to={ROUTES.LANDING}>GrowChat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.SIGN_UP}>Sign Up</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.LOGIN}>Login</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
      </Switch>
    </>
  )
}

const App = () => {
  return(
    <Router>
      <Navigation/>
    </Router>
  )
}

export default App;
