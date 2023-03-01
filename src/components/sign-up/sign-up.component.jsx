import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { signUpStart } from '../../redux/actions/user.actions';
import { Form } from '../../components/forms/sign-up/sign-up-form.component';

// import { UserContext } from '../context/user.context';
import './sign-up.styles.scss';

const defaultFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

export const SignUp = () => {
    const dispatch = useDispatch();
    const [formField, setFormField] = useState(defaultFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            password,
            confirmpassword, email, displayName
        } = formField;
        if (password === confirmpassword) {
            (async () => {
                try {
                    dispatch(signUpStart(email, password, displayName));
                    // Reset Form
                    setFormField(defaultFormData);
                }
                catch (error) {
                    console.log('Error creating User, ', error.message)
                }
            })()
        } else {
            console.log("Passwords do not match")
        };
    }
    return (<div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up With Email and Password</span>
        <Form handleSubmit={handleSubmit} formField={formField} setFormField={setFormField} />
    </div>
    )
}