import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';
import Input from '../components/FormInput';
import FormExtra from '../components/FormExtra';
import FormAction from '../components/FormAction';
import logo from '../assets/logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]='');

const Login = () => {
    // Navigation
    const navigate = useNavigate();

    // States
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => { 
        setLoginState({...loginState, [e.target.id]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginState);

        // Handle Account login
        signInWithEmailAndPassword(auth, loginState["email-address"], loginState["password"])
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };
    
    return (
        <div className='h-screen flex flex-col justify-center space-y-6 bg-nookLeaf bg-lightBlue bg-blend-hard-light bg-opacity-70'>
            {/* Login Header */}
            <a href='/'><img className="rounded-2xl h-[8rem] w-fit mx-auto" src={logo} alt="Logo" /></a>
            <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-center">Login to your account</h1>
                <p className="text-center">Don't have an account yet? <a className="text-base text-blue-500 hover:text-blue-400 hover:underline" href='/signup'>Sign up</a></p>
            </div>
            <div className="bg-white px-8 py-6 rounded-xl w-[30%] mx-auto shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col justify-center">
                {
                    fields.map(field => 
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />  
                    )
                }
                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Log in" />
            </div>
        </div>
    );
};

export default Login;