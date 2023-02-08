import '../../utilities/firebase/firebase.utils';
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../content/images/crown.svg';

import { UserContext } from "../context/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.auth";
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(prevUser => null)
    }
    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <div className=""><CrwnLogo className="logo" /></div>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">Shop</Link>
                    {
                        currentUser ? (<Link to="#" onClick={signOutHandler} className="nav-link">Sign-Out</Link>) : (<Link to="/authentication" className="nav-link">Sign-In</Link>)
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;