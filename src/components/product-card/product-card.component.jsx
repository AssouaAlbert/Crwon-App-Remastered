import './product-card.styles.scss';
import { Button } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, id, imageUrl } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name"></span>
                <span className="price"></span>
            </div>
            <Button btnType="submit" classname="classname" >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;