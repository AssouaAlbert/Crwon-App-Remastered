import { useContext } from 'react';
import { CartDropDownContext } from '../context/cart-dropdown/cart-drop-down.context';
import SwithVisibility from '../../utilities/hooks/switchVisiblitiy.hook'

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../content/images/shopping-bag.svg';

const CartIcon = () => {
    const { setDropdown } = useContext(CartDropDownContext);
    const { ref } = SwithVisibility(CartDropDownContext);
    const dropdownSwitch = () => {
        setDropdown(prevState => !prevState)
    };
    return (
        <>
            <div ref={ref} onClick={dropdownSwitch} className="cart-icon-container">
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>0</span>
            </div>
        </>
    )
}

export default CartIcon;