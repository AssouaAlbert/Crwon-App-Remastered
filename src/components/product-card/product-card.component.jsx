import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../redux/selectors/cartDropDown.selector";
import { addCartItems } from "../../redux/actions/cartDropDown.action";
import './product-card.styles.scss';
import { Button } from '../button/button.component';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, price } = product;
    const handleAddToCart = (e) => {
        dispatch(addCartItems(cartItems, product))
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button btnType="submit" classname="classname" action={handleAddToCart} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;