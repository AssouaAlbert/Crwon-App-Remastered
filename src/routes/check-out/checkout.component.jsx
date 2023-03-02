import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cartDropDown.selector";
import PaymentForm from "../../components/payment-form/payment.component";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.component.scss'

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const totalCost = useSelector(selectCartTotal);
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
        <PaymentForm/>
        </div>
    </>
    )
}

export default CheckOut;