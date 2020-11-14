import './signup.css';

const SignUp = () => {
    return(
        <div className='sign-up-form'>
            <div className='top'>
                <a href='profile.html'>
                    <img alt='' src='photo/growchatname.png'/>
                </a>
                <p>Sign Up</p>
            </div>

            <form>
                <input type='text' name='emailNumber' placeholder='Email or Phone Number' required/>
                <input type='text' name='fullName' placeholder='Full Name' required/>
                <input type='text' name='userName' placeholder='User Name' required/>
                <input type='password' name='password' placeholder='Password' required/>

                <div className='form-group'>
                    <br/>
                    <button type='submit' name='submit'>Submit</button>
                </div>

                <p>Already have an account? <a href='login.html'>Login Here</a></p>
            </form>
        </div>
    )
}

export default SignUp;