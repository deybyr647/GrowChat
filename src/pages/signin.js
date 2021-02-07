import { useState } from 'react';
import {Link} from '@reach/router';
import {auth} from '../firebase/firebase';

import * as ROUTES from '../constants/routes';
import logo from '../images/logo.png';
import '../styles/auth.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const authHandler = (e, email, password) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
            setError("Error signing in with password and email!");
            console.error(error, err);
        });

        setEmail('');
        setPassword('');
    }

    const changeHandler = (e) => {
        const {name, value} = e.currentTarget;

        if(name === 'userEmail') setEmail(value);
        else if(name === 'userPassword') setPassword(value);
    }

    return(
        <div className='login-form'>
            <div className='top'>
                <a href='#lol'>
                    <img alt='logo' src={logo}/>
                </a>
                <hr/>
                <p>Log In</p>
            </div>

            <form>
                <input type='text' name='userEmail' placeholder='Email' value={email} onChange={e => changeHandler(e)} required/>
                <input type='password' name='userPassword' placeholder='Password' value={password} onChange={e => changeHandler(e)} required/>

                <div className='form-group'>
                    <br/>
                    <button onClick={e => authHandler(e, email, password)} name='submit'>Sign In</button>
                </div>

                <p>Don't Have An Account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;