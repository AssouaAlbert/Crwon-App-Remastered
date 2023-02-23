import {useSelector, useDispatch} from "react-redux";

import { selectCartDropDown, selectCartCount } from '../../redux/selectors/cartDropDown.selector';
import { setDropdown } from '../../redux/actions/cartDropDown.action';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../content/images/shopping-bag.svg';

const CartIcon = () => {
    const dispatch = useDispatch();
    const  dropdown  = useSelector(selectCartDropDown);
    const  totalCartItems  = useSelector(selectCartCount);
    const dropdownSwitch = () => {
        dispatch(setDropdown(dropdown))
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