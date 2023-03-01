import { useState } from 'react';
// import { SignInUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
// import { signInWithGooglePopup } from '../../utilities/firebase/firebase.auth';
// import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';
import {useDispatch} from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/actions/user.actions';

// import { UserContext } from '../context/user.context';
import { Input } from '../forms/inputs/inputs.component';
import { Button } from '../button/button.component';

const defaultFormData = {
    email: '',
    password: '',
}

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormField] = useState(defaultFormData)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password
        } = formData;
        dispatch(emailSignInStart(email, password));
        setFormField(defaultFormData);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formData, [name]: value })

    }
    const logGoogleUser = () => {
        dispatch(googleSignInStart())
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