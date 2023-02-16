import { useNavigate } from "react-router";

const CategoryItem = ({title, imageUrl, route}) => {
    console.log('route:', route)
    const navigate = useNavigate();
    const navigateHandler = () => navigate(route)
    return (<div className="category-container" onClick={navigateHandler}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="category-body-container">
            <h2 className="category-title">{title}</h2>
            <p className="cta-btn">Shop Now</p>
        </div>
    </div>)
}

export default CategoryItem;