import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Supplements Store</Link>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}