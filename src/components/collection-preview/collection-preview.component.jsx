import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './collection-preview.component.scss'

const CollectionPreview = ({title, shopData}) => {
    return (<>
        <h2 className='category-preview-container'><span><Link to={`${title}`}>{title.toUpperCase()}</Link></span></h2>
        <div className="products-container">
            {
                shopData[title].map((product, index) => {

                    // index < 4? <ProductCard key={product.id} product={product} />:<></>
                    
                    if (index < 4) {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    }
                    return (null);
                })
            }
        </div>
        </>
  )
}
export default CollectionPreview;