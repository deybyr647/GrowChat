import {Form, FormGroup, FormControl, InputGroup} from 'react-bootstrap';

import './index.css'

const Login = () => (
    <div className='login-form'>
        <div className='top'>
            <a href='#pain'>
                <img alt='logo' src='null.png'/>
            </a>
            <hr/>
            <p>Log In</p>
        </div>

        <form>
            <input type='text' name='emailNumber' placeholder='Email or Phone Number' required/>
            <input type='password' name='password' placeholder='Password' required/>

            <div className='form-group'>
                <br/>
                <button type='submit' name='submit'>Submit</button>
            </div>

            <p>Don't Have An Account? <a href='#painn'>Sign Up</a></p>
        </form>
    </div>
)

export default Login;