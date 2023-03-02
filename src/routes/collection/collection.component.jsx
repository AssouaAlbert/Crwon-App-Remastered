import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

import { selectShopData, selectShopDataIsLoading } from "../../redux/selectors/shop.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.compoenent";

import './collection.style.scss';

const Collection = () => {
    const { collection } = useParams();
    const shopData = useSelector(selectShopData);
    const isLoading = useSelector(selectShopDataIsLoading);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(prev => shopData[collection]);
    }, [shopData, collection])

    return ( <>
        {
            isLoading ? <Spinner/> : 
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
        }
        </>
    )
}

export default Collection;