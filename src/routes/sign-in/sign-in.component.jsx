
import {useEffect} from'react';
import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocuementFromAuth, signInWithGoogleRedirect, auth } from '../../utilities/firebase/firebase.utils';
import {SignUpForm} from '../../components/sign-up/sign-up.component';

const SignIn = () => {
    useEffect(() => {
        (async () => {
            await getRedirectResult(auth).then( async ({user}) => {
                if(user) {
                    await createUserDocuementFromAuth(user);
                }
            });

          })();
            }, [])

    const logGoogleUser = async () => {
        const userAuthResponse = await signInWithGooglePopup();
        const {user} = userAuthResponse;
        await createUserDocuementFromAuth(user);
    }

    const logGoogleUserRedirect = async () => {
        const userAuthResponse = await signInWithGoogleRedirect();
        const {user} = userAuthResponse;
        await createUserDocuementFromAuth(user);
    }


    return (<div>
        <button onClick={logGoogleUser}>Click Me</button><br/>
        <button onClick={logGoogleUserRedirect}>Click Me 2</button>
        <SignUpForm/>
    </div>)
}

export default SignIn;