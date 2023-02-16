import { useContext, Fragment } from "react";
import { ShopContext } from "../../components/context/shop/shop.context";
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const CollectionPreviewRoute = () => {
    const { shopData } = useContext(ShopContext)
    return (<>
        <h1 className="title">Shop</h1>
        {
            // shopData.map((collection) => {
            //     return (<Fragment key={collection.title}>
            //         <h2>{collection.title}</h2>
            //         <div className="products-container">
            //             {
            //                 collection.items.map((product) => {
            //                     return (
            //                         <ProductCard key={product.id} product={product} />
            //                     )
            //                 })
            //             }
            //         </div>
            //     </Fragment>)
            // })
            Object.keys(shopData).map((title) => {
                return (<Fragment key={title}>
                    <CollectionPreview title={title} shopData={shopData} />
                </Fragment>)
            })
        }
    </>
    )
}

export default CollectionPreviewRoute;