// PaymentDetails.js
import React, { useState } from "react";
import "./PaymentDetails.css";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function PaymentDetails({cartItems}) {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [pincode, setPincode] = useState("");
const [addressError, setAddressError] = useState("");
const [deliveryAddress, setDeliveryAddress] = useState("");

const totalAmount = cartItems.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

  const handlePlaceOrder = () => {
  if (!address.trim() || !city || !pincode.trim()) {
    setAddressError("Please fill in all delivery details.");
    return;
  }
  setAddressError("");
  setShowConfirmation(true);
  setTimeout(() => setShowConfirmation(false), 20000);
};



  return (
    <div className="payment-container">
      {showConfirmation && <Confetti />}

      <div className="glass-card payment-card shift-left">
        <h2>Payment Details</h2>
        

       <div className="address-section">
  <label htmlFor="address">Delivery Address</label>
  <textarea
    id="address"
    rows="3"
    placeholder="Enter your delivery address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  ></textarea>

  <label htmlFor="city">City</label>
  <select
    id="city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  >
    <option value="">Select City</option>
    <option value="Chennai">Chennai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Madurai">Madurai</option>
    <option value="Trichy">Trichy</option>
    <option value="Salem">Salem</option>
    <option value="Thoothukudi">Thoothukudi</option>
    <option value="Tirunelveli">Tirunelveli</option>
  </select>

  <label htmlFor="pincode">Pincode</label>
  <input
    type="text"
    id="pincode"
    placeholder="Enter pincode"
    value={pincode}
    onChange={(e) => setPincode(e.target.value)}
  />

  {addressError && <p className="error-text">{addressError}</p>}
</div>

<div className="cart-summary">
  <h4>Cart Summary</h4>
  <ul>
    {cartItems.map((item, index) => (
      <li key={index}>
        {item.name} × {item.qty} = ₹{item.price * item.qty}
      </li>
    ))}
  </ul>
</div>


        <div className="payment-amount">
          <span>Total Amount:</span>
          <strong>₹{totalAmount}</strong>

        </div>

        <div className="payment-options">
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            Pay Online
          </label>
        </div>
        

        <button onClick={handlePlaceOrder} className="place-order-btn fancy">
          Place Order
        </button>
      </div>

      {showConfirmation && (
        <div className="popup-glass shift-left">
          <h3>🎉 Your Order is Confirmed! 🎉</h3>
          <p>Thank you for shopping with Fruit Mart.</p>
        </div>
      )}
       <button className="back-button" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
}

export default PaymentDetails;
