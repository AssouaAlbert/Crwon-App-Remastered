import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/user/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.auth";
import { CartDropDownContext } from "../context/cart-dropdown/cart-drop-down.context";
import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from'./navigation.styles';
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
            <NavigationContainer>
                <LogoContainer to="/">
                    <div className=""><CrwnLogo className="logo" /></div>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {
                        currentUser ? (<NavLink to="#" onClick={signOutHandler} >Sign-Out</NavLink>) : (<NavLink to="/authentication" >Sign-In</NavLink>)
                    }
                </NavLinksContainer>
                <CartIcon/>
                {dropdown && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;