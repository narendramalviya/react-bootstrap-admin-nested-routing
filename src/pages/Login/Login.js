import React, { useEffect } from "react";
import {
    Redirect
} from "react-router-dom";
import auth from '../../services/auth';
const Login = () => {

    const submit = () => {
        auth.setAuth({ username: 'bharat' });
    }
    useEffect(() => {
        console.log('auth', auth);
        if (auth.getAuth()) {
            < Redirect to='/admin' />
        }
    })
    return (
        <div className="mt-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h1> login </h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Example textarea</label>
                <input type="password" className="form-control" id="password" placeholder="name@example.com" />
            </div>
            <button type="submit" onClick={submit} class="btn btn-primary mb-3">Confirm identity</button>
        </div >
    );
}

export default Login;