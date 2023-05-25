import React, { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from '../components/FormAction';
import Input from '../components/FormInput';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

const fields = signupFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]="");

const Signup = () => {
    // Navigation
    const navigate = useNavigate();

    // States
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
        setSignupState({...signupState, [e.target.id]:e.target.value});
    }

    const handleSubmit = async (e) => {
        console.log("HandleSubmit: Creating Account - ");
        console.log(signupState);
        
        // Handle Account creation
        let email = signupState["email-address"],
            password = signupState["password"],
            username = signupState["username"];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            const tasks = ["Water flowers", "Find fossils", "Collect seashells"];

            var documentData = {
                uid: user.uid,
                authProvider: 'local',
                username,
                email,
                password,
                tasks
            }

            await setDoc(doc(db, "users/" + user.uid), documentData);
            navigate('/');
        }
        catch(err) {
            console.error(err)
            alert(err.message);
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center space-y-6 bg-nookLeaf bg-lightBlue bg-blend-hard-light bg-opacity-70'>
            {/* Login Header */}
            <a href='/'><img className="rounded-2xl h-[8rem] w-fit mx-auto" src={logo} alt="Logo" /></a>
            <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-center">Sign up to create an account</h1>
                <p className="text-center">Already have an account? <a className="text-base text-blue-500 hover:text-blue-400 hover:underline" href='/login'>Log in</a></p>
            </div>
            <div className="bg-white px-8 py-6 rounded-xl w-[30%] mx-auto shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col justify-center">
                {
                    fields.map(field => 
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text="Sign up" />
            </div>
        </div>
    );
};

export default Signup;