import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}