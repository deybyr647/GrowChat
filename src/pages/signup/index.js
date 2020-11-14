import { useState } from 'react';
import './signup.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState(null);

    const createUser = (e, email, password) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUsername('');
        setFullName('');
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
                    <img alt='' src='photo/growchatname.png'/>
                </a>
                <p>Sign Up</p>
            </div>

            <form>
                <input type='text' name='userEmail' placeholder='Email or Phone Number' value={email} onChange={e => changeHandler(e)} required/>
                <input type='text' name='userFullName' placeholder='Full Name' value={fullName} onChange={e => changeHandler(e)} required/>
                <input type='text' name='userName' placeholder='User Name' value={userName} onChange={e => changeHandler(e)} required/>
                <input type='password' name='userPassword' placeholder='Password' value={password} onChange={e => changeHandler(e)} required/>

                <div className='form-group'>
                    <br/>
                    <button onClick={e => createUser(e)} name='submit'>Submit</button>
                </div>

                <p>Already have an account? <a href='login.html'>Login Here</a></p>
            </form>
        </div>
    )
}

export default SignUp;