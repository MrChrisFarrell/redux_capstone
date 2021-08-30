import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useForm from '../UseForm/useForm';
import { loginAsync, selectToken } from '../../Components/Login/loginSlice';

export function LoginForm(){
    const { values, handleChange, handleSubmit } = useForm(login);
    const dispatch = useDispatch();
    const history = useHistory();

    function login(){
        dispatch(loginAsync({'username':values.username, 'password':values.password}));
        history.push("/home");
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        required={true}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        required={true}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

