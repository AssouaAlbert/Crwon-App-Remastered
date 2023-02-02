
import { signInWithGooglePopup,createUserDocuementFromAuth } from '../../utilities/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const userAuthResponse = await signInWithGooglePopup();
        const {user} = userAuthResponse;
        const userRef = await createUserDocuementFromAuth(user);
    }


    return (<div>
        <button onClick={logGoogleUser}>Click Me</button>
    </div>)
}

export default SignIn;