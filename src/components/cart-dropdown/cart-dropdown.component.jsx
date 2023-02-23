import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";

import { selectCartItems } from '../../redux/selectors/cartDropDown.selector';

import './cart-dropdown.component.scss';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.compoenent';
const CartDropdown = () => {
    const  cartItems  = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckOut = () => navigate('/checkout')
    return (<>
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id}/>)
                }
            </div>
            <Button btnType="button" action={goToCheckOut} >Check Out</Button>
        </div>
    </>)
}

export default CartDropdown;