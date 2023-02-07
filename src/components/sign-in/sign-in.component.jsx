import { useState } from 'react';
import { SignInUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
import { signInWithGooglePopup } from '../../utilities/firebase/firebase.auth';
import {createUserDocumentFromAuth} from '../../utilities/firebase/firebase.database';
import { Input } from '../forms/inputs/inputs.component';
import { Button } from '../button/button.component';

const defaultFormData = {
    email: '',
    password: '',
}

export const SignInForm = () => {
    const [formData, setFormField] = useState(defaultFormData)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password
        } = formData;
        (async () => {
                const response = await SignInUserWithEmailAndPassword( email, password);
                setFormField(defaultFormData);
        })()
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formData, [name]: value })

    }
    const logGoogleUser = async () => {
        const userAuthResponse = await signInWithGooglePopup();
        const { user } = userAuthResponse;
        await createUserDocumentFromAuth(user);
    }

    return (<div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up With Email and Password</span>
        <form onSubmit={handleSubmit}>
            <Input label={true} required={true} id="email" placeholder="Email" type="email" changeHandler={handleChange} formField={formData} />
            <Input label={true} required={true} id="password" placeholder="Password" type="password" changeHandler={handleChange} formField={formData} />
            <div className="button-container">
            <Button type="submit" > Submit </Button><br/>
            <Button type='button' buttonType='google-button' onClick={logGoogleUser}>Google Sign In</Button><br />
            </div>
        </form>
    </div>
    )
}