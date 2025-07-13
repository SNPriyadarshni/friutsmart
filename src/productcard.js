import React from "react";
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;