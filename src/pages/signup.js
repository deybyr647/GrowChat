import { useState, useContext } from 'react';
import {Link} from '@reach/router';
import * as ROUTES from '../constants/routes';
import {auth, generateUserDocument} from '../firebase/firebase';

import '../styles/auth.css';
import logo from '../images/growchatname.png';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState(null);

    const createUser = async (e, email, password) => {
        e.preventDefault();
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, {userName, fullName});
        } catch(err){
            setError(err);
            console.error("Error!!", err);
        }

        setEmail("");
        setPassword("");
        setUsername("");
        setFullName("");
    }

    const changeHandler = (e) => {
        const {name, value} = e.currentTarget;

        if(name === "userEmail") setEmail(value);
        else if(name === "userPassword") setPassword(value);
        else if(name === "userName") setUsername(value);
        else if(name === "userFullName") setFullName(value);

        console.log(email, password);
    }

    return(
        <div className='sign-up-form'>
            <div className='top'>
                <a href='profile.html'>
                    <img alt='' src={logo}/>
                </a>
                <p>Sign Up</p>
            </div>

            <form>
                <input type='text' name='userEmail' placeholder='Email' value={email} onChange={e => changeHandler(e)} required/>
                <input type='text' name='userFullName' placeholder='Full Name' value={fullName} onChange={e => changeHandler(e)} required/>
                <input type='text' name='userName' placeholder='Username' value={userName} onChange={e => changeHandler(e)} required/>
                <input type='password' name='userPassword' placeholder='Password' value={password} onChange={e => changeHandler(e)} required/>

                <div className='form-group'>
                    <br/>
                    <button onClick={e => createUser(e, email, password)} name='submit'>Submit</button>
                </div>

                <p>Already have an account? <Link to={ROUTES.LOGIN}>Log In</Link></p>
            </form>
        </div>
    )
}

export default SignUp;