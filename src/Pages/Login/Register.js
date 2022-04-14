import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const handleSubmit =e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
    }
    return (
        <div>
            <h1>Please Register</h1>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="text-start">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name='name' className='form-control' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name='password' type="password" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                
            </form>
            <p>Already have an account? <span className='text-success' onClick={()=>navigate('/login')}>Log In Now</span></p>
        </div>
    );
};

export default Register;