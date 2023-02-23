import { createSelector } from "reselect";

const selectShopReducer = (state) => {
    return state.shop.shopData
}

// /** Example */
// export const selectCollections = createSelector(
//     [selectShopReducer], //Input to be used by createSelector...
//     (shop) => // The output from  //! return state.shop (above)
//     {
//         return shop.shopData
//     }
// )
/**Implementation */
export const selectShopData = createSelector( 
    [selectShopReducer],
    (shopData)=> {
        return shopData.reduce((acc, docSnapshot) => {
            const { title, items } = docSnapshot;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
    )


/* This Code is now meodified to use reselect */
// export const selectShopData = (state) => {
//     return state.shop.shopData.reduce((acc, docSnapshot) => {
//         const { title, items } = docSnapshot;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
// };