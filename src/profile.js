import {useContext} from 'react';
import {UserContext} from './providers/userProvider';
import {auth} from './firebase/firebase';

const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, userName, email, fullName} = user;

    return(
        <div>
            <h1>You're Signed In!</h1>
            <h3>Email: {email}</h3>
            <h3>Username: {userName}</h3>
            <h3>Full Name: {fullName}</h3>
            <div>
                <img alt="profile pic" src={photoURL}/>
            </div>

            <button onClick={() => {auth.signOut()}}>Sign Out</button>
        </div>
    )
}

export default ProfilePage;