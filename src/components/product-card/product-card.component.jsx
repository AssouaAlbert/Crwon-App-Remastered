import {useContext} from 'react';
import { CartDropDownContext } from '../context/cart-dropdown/cart-drop-down.context';
import './product-card.styles.scss';
import { Button } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, imageUrl } = product;
    const {addCartItems} = useContext(CartDropDownContext)
    const handleAddToCart = (e) => {
        addCartItems(product)
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name"></span>
                <span className="price"></span>
            </div>
            <Button btnType="submit" classname="classname" action={handleAddToCart} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;