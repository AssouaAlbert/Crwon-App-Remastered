import {useContext} from 'react';
import { CartDropDownContext } from '../context/cart-dropdown/cart-drop-down.context';
import './cart-dropdown.component.scss';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.compoenent';
const CartDropdown = () => {
    const {cartItems} = useContext(CartDropDownContext);
    return (<>
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id}/>)
                }
            </div>
            <Button btnType="button" >Check Out</Button>
        </div>
    </>)
}

export default CartDropdown;