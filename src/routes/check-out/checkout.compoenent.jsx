import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-iten/checkout-item.compoenent';

import './checkout.compoenent.scss'
import { CartDropDownContext } from "../../components/context/cart-dropdown/cart-drop-down.context";
const CheckOut = () => {
    const { cartItems, totalCost } = useContext(CartDropDownContext);
    return (<>
        <h1 className="title">Check Out</h1>
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span className="">Product</span>
                </div>
                <div className="header-block">
                    <span className="">Description</span>
                </div>
                <div className="header-block">
                    <span className="">Quantity</span>
                </div>
                <div className="header-block">
                    <span className="">Price</span>
                </div>
                <div className="header-block">
                    <span className="">Remove</span>
                </div>
            </div>
        {
            cartItems.map((product) => {
                return (<CheckoutItem cartItem={product} key={product.id}/>)
            })
        }
        <span className="total">Total: ${totalCost}</span>
        </div>
    </>
    )
}

export default CheckOut;