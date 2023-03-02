import { Outlet } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from'./navigation.styles';

import { selectUser } from "../../redux/selectors/user.selector";
import { selectCartDropDown } from "../../redux/selectors/cartDropDown.selector";
import { ReactComponent as CrwnLogo } from '../../content/images/crown.svg';
import CartIcon from "../cart-icon/cart-icon.compoenent";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);
    const dropdown  = useSelector(selectCartDropDown);
    const signOutHandler = () => {dispatch()};
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