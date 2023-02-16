import { useParams } from "react-router";
import { useContext, useState, useEffect } from 'react'
import ProductCard from "../../components/product-card/product-card.component";
import { ShopContext } from "../../components/context/shop/shop.context";
import './collection.style.scss';

const Collection = () => {
    const { collection } = useParams();
    const { shopData } = useContext(ShopContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(prev => shopData[collection]);
    }, [shopData, collection])

    return ( 
        <>
            <h2 className='category-preview-container'><span>{collection.toUpperCase()}</span></h2>
            <div className="products-container">
                { products &&
                    products.map((product, index) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                    })
                }
            </div>
        </>
    )
}

export default Collection;