import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

import { selectShopData } from "../../redux/reducer/shop/shop.utils";

import ProductCard from "../../components/product-card/product-card.component";

import './collection.style.scss';

const Collection = () => {
    const { collection } = useParams();
    const shopData = useSelector(selectShopData);
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