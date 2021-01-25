import './App.css';

import * as ROUTES from './constants/routes';

import {Router, Link} from '@reach/router';
import {Nav, Navbar} from 'react-bootstrap';

import Login from './pages/signin';
import SignUp from './pages/signup';
import Account from './pages/account';

/*const Navigation = () => {
  return(
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
  )
}*/

const App = () => {
  const user = !true;

  return(
      user ? <Account/> 
      : <Router>
        <SignUp path={ROUTES.SIGN_UP}/>
        <Login path={ROUTES.LOGIN}/>

      </Router>
  )
}

export default App;
