import { useContext } from 'react';
import { CartDropDownContext } from '../context/cart-dropdown/cart-drop-down.context';
// import SwithVisibility from '../../utilities/hooks/switchVisiblitiy.hook'
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../content/images/shopping-bag.svg';

const CartIcon = () => {
    const { setDropdown, totalCartItems, dropdown } = useContext(CartDropDownContext);
    // const { ref } = SwithVisibility(CartDropDownContext);
    const dropdownSwitch = () => {
        setDropdown(dropdown)
    };
    return (
        <>
            <div  onClick={dropdownSwitch} className="cart-icon-container">
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>{totalCartItems}</span>
            </div>
        </>
    )
}

export default CartIcon;