import * as React from 'react';
import "./categories.styles.css";
import CategoryItem from "../category-item/category-item";

const Categories = ({ categories }) => {
    return (<React.Fragment>
        <div className="categories-container">
            {categories.map(({ title, id, imageUrl , route}) => {
                return <CategoryItem title={title} key={id} imageUrl={imageUrl} route={route}/>
            })}
        </div>
    </React.Fragment>

    )
};

export default Categories;