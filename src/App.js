import * as ROUTES from './constants/routes';

import {useContext} from 'react';
import {Router} from '@reach/router';

import UserProvider from './providers/userProvider';
import {UserContext} from './providers/userProvider';
import Login from './pages/signin';
import SignUp from './pages/signup';
import ProfilePage from './pages/account';
import Chat from './pages/chat';

const GrowChat = () => {
  const user = useContext(UserContext);

  return(
    user ? 
    <Router>
      <ProfilePage path={ROUTES.ACCOUNT}/>
      <Chat path={ROUTES.MESSAGES}/>
    </Router>
    : <Router>
      <SignUp path={ROUTES.SIGN_UP}/>
      <Login path={ROUTES.LOGIN}/>
    </Router>
  );
}

const App = () => {
  return(
      <UserProvider>
        <GrowChat/>
      </UserProvider>
  )
}

export default App;
