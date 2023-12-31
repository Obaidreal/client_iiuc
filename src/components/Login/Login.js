import React, { useState } from 'react';
import '../Login/Login.css';
import OtherLogin from '../Others/OhterLogin';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Login = () => {

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/mainHome');
    }
    if (loading) {
        <Loading />
    }

    const handlePassword = e => {
        SetPassword(e.target.value);
    }

    const handleUser = async (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Please Put a Email');
        }
        if (!password) {
            setPasswordError('Please Put a password');
        }
        if (!email || !password) {
            return;
        }
        await signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container my-4'>
            <form onSubmit={handleUser} c className="container-form text-center form-all">
                <div className="form-title">LOGIN</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" />
                    {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>}

                    <label className='form-label'>PASSWORD</label>
                    <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" />
                    {passwordError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordError}</p>}
                    <br />
                    <button className='form-btn' type="submit">LOGIN</button>
                </div>
            </form>
            {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <br />
            <p className='text-white'>You are new user! Please SignUp <Link to='/signup' className='text-danger pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
            <p className='text-white'>
                If forget password then reset password
              <button className='btn btn-info'
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }}
                >   Reset password
            </button></p>
            <br />
            <h4 className='text-white'>Access in anotherway</h4>
            <hr className='w-25 mx-auto text-white' />
            <OtherLogin></OtherLogin>

        </div>
    );
};

export default Login;