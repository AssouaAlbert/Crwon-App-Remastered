import { useContext } from "react";
import { ShopContext } from "../../components/context/shop/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop-styles.scss'
const Shop = () => {
    const { shopData } = useContext(ShopContext)
    console.log('shopData:', shopData)
    return (<>
        <h1 className="title">Shop Page</h1>
        <div className="products-container">
            {
                shopData.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }

        </div>
    </>
    )
}

export default Shop;