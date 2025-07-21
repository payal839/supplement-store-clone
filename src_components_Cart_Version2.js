import React from "react";

export default function Cart({ cart, onRemoveFromCart }) {
  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width={60} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>
        Total: ₹
        {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </h3>
    </div>
  );
}