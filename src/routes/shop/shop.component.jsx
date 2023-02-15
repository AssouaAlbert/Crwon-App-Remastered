import { useContext, Fragment } from "react";
import { ShopContext } from "../../components/context/shop/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop-styles.scss'
const Shop = () => {
    const { shopData } = useContext(ShopContext)
    return (<>
        <h1 className="title">Shop</h1>
        {
            shopData.map((collection) => {
                return (<Fragment key={collection.title}>
                    <h2>{collection.title}</h2>
                    <div className="products-container">
                        {
                            collection.items.map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                )
                            })
                        }
                    </div>
                </Fragment>)
            })
            // Object.keys(shopData).map((title) => {
            //     <>
            //         <h2>{title}</h2>
            //         <div className="products-container">
            //             {
            //                 shopData[title].map((product) => {
            //                     return (
            //                         <ProductCard key={product.id} product={product} />
            //                     )
            //                 })
            //             }
            //         </div>
            //     </>
            // })
        }
    </>
    )
}

export default Shop;