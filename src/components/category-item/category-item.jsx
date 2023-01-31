const CategoryItem = ({title, imageUrl}) => {
    return (<div className="category-container">
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