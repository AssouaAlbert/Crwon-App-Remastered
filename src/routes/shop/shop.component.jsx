import { Routes, Route } from 'react-router-dom';
import CollectionPreviewRoute from '../collection-preview/collection-preview.route';
import Collection from '../collection/collection.component';
import './shop-styles.scss'
const Shop = () => {
    return (
        <Routes>
            <Route index element={<CollectionPreviewRoute />} />
            <Route path=':collection' element={<Collection />} />
        </Routes>
    )
}

export default Shop;