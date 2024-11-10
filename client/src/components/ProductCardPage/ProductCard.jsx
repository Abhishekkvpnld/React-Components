
import "./ProductCard.css"; // CSS file for custom styling

const ProductCard = ({ product }) => {
    const { title, description, price, rating, stock, brand, thumbnail } = product;

    return (
        <div className="product_card">
            <div className="product_image">
                <img src={thumbnail || "https://via.placeholder.com/150"} alt={title} />
            </div>
            <div className="product_info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Brand:</strong> {brand}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Rating:</strong> {rating} / 5</p>
                <p><strong>Stock:</strong> {stock > 0 ? stock : "Out of Stock"}</p>
            </div>
        </div>
    );
};

export default ProductCard;
