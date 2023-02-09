import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/user/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.auth";
import { CartDropDownContext } from "../context/cart-dropdown/cart-drop-down.context";
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../content/images/crown.svg';
import CartIcon from "../cart-icon/cart-icon.compoenent";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { dropdown } = useContext(CartDropDownContext);
    const signOutHandler = async () => {
        await signOutUser();
        //* Handled by onAuthStateChanged
        // setCurrentUser(prevUser => null)
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
                <CartIcon/>
                {dropdown && <CartDropdown/>}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;