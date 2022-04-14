import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider()
    const handleSign = () => {
        signInWithPopup(auth, provider)
            .then(result => setUser(result.user))
            .catch(error => console.log(error))
        navigate(from, { replace: true });

        console.log(user);
    }

    const emailRef=useRef('')
    const passwordRef=useRef('')
    const handleSubmit=e=>{
        e.preventDefault()
        const email=emailRef.current.value; 
        const password=passwordRef.current.value; 
        console.log(email, password);

    }
    const nevigate=useNavigate()
    const navigateRegister=e=>{
        nevigate('/register')
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Login Here</h2>
            <Form className='text-start' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius? <span className='text-danger' onClick={navigateRegister}>Register Now</span></p>
            <button onClick={handleSign}>Sign</button>
            <h1>{user.displayName}</h1>
        </div>
    );
};

export default Login;