import './cart-dropdown.component.scss';
import { Button } from '../button/button.component';
const CartDropdown = () => {
    return (<>
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button btnType="button" >Check Out</Button>
        </div>
    </>)
}

export default CartDropdown;