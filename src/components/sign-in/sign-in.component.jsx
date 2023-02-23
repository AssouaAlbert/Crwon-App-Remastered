import { useState } from 'react';
import { SignInUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
import { signInWithGooglePopup } from '../../utilities/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';

// import { UserContext } from '../context/user.context';
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
            await SignInUserWithEmailAndPassword(email, password);
            // const { user } = await SignInUserWithEmailAndPassword(email, password);
            setFormField(defaultFormData);
            //* Handled by onAuthStateChanged
            // setCurrentUser(previousUser => user);
        })()
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formData, [name]: value })

    }
    const logGoogleUser = async () => {
        const userAuthResponse = await signInWithGooglePopup();
        const { user } = userAuthResponse;
        //* Handled by onAuthStateChanged
        // setCurrentUser(previousUser => user);
        await createUserDocumentFromAuth(user);
    }

    return (<div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up With Email and Password</span>
        <form onSubmit={handleSubmit} id='form'>
            <Input label={true} required={true} id="email" placeholder="Email" type="email" changeHandler={handleChange} formField={formData} />
            <Input label={true} required={true} id="password" placeholder="Password" type="password" changeHandler={handleChange} formField={formData} />
            <Button btnType="submit" form='form'> Submit </Button><br />
        </form>
            <Button btnType='button' form='' classname='google-button' action={logGoogleUser}>Google Sign In</Button><br />
    </div>
    )
}