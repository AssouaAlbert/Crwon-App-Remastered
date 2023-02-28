import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectShopData, selectShopDataIsLoading } from "../../redux/selectors/shop.selector";
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Spinner from "../../components/spinner/spinner.compoenent";

const CollectionPreviewRoute = () => {
    const shopData = useSelector(selectShopData);
    const isLoading = useSelector(selectShopDataIsLoading);

    return (<>
   { isLoading ? <Spinner/> : <>
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
        }</> 
   }
        
    </>
    )
}

export default CollectionPreviewRoute;