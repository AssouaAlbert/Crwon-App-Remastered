
import '../../utilities/firebase/firebase.utils'
import {SignUp as SignUpFrom} from '../../components/sign-up/sign-up.component';
import { SignInForm } from '../../components/sign-in/sign-in.component';
import './authentication.scss';

const Authentication = () => {


    return (<div className="sign-in-page">
        <SignInForm/>
        <SignUpFrom/>
    </div>)
}

export default Authentication;