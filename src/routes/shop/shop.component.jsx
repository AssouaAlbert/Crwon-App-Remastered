import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.database';
import { setShopData } from "../../redux/actions/shop.actions"

import CollectionPreviewRoute from '../collection-preview/collection-preview.route';
import Collection from '../collection/collection.component';
import './shop-styles.scss'
const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async ()=> {
          const collectionsArray = await getCategoriesAndDocuments();
          dispatch(setShopData(collectionsArray));
      })()
      }, [dispatch])

    return (
        <Routes>
            <Route index element={<CollectionPreviewRoute />} />
            <Route path=':collection' element={<Collection />} />
        </Routes>
    )
}

export default Shop;