import React from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";


const CartPage = ({ cartItems, updateQty, removeItem, decreaseQty }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>🛒 Your FruitMart Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your FruitMart cart is empty 😔🍌</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>

                <div className="qty-section">
                  <button onClick={() => removeItem(item)} className="qty-btn">🗑️</button>
                  <button onClick={() => decreaseQty(item)} className="qty-btn">-</button>
                  <span className="qty-count">{item.qty}</span>
                  <button onClick={() => updateQty(item)} className="qty-btn">+</button>
                </div>

               
              </div>
            </div>
          ))}
          <h3 className="subtotal">Subtotal ({cartItems.length} items): ₹{subtotal}</h3>
          {cartItems.length > 0 && (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <button className="proceed-btn" onClick={() => navigate("/signin")}>Proceed</button>
</div>

)}

        </>
      )}
      
      <button className="back-button" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
};

export default CartPage;
