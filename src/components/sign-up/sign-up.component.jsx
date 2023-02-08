import { useState } from 'react';
import { createAutheticateUserWithEmailAndPassword } from '../../utilities/firebase/firebase.auth';
import { createUserDocumentFromAuth } from '../../utilities/firebase/firebase.database';
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
    const [formField, setFormField] = useState(defaultFormData);
    // const {setCurrentUser} = useContext(UserContext);
    const createUserAccount = async ({ email, password, displayName }) => {
        try {
            const userResponseAuth = await createAutheticateUserWithEmailAndPassword(email, password);
            const { user } = userResponseAuth;
            //! Add displaynamed to the Data in the users docuement @ firestore
            await createUserDocumentFromAuth(user, { displayName });
            // setCurrentUser(prevUser => user);
        }
        catch (error) {
            console.log('Error creating User: ', error.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            password,
            confirmpassword
        } = formField;
        if (password === confirmpassword) {
            (async () => {
                try {
                    await createUserAccount(formField);
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