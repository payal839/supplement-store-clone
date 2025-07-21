import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}