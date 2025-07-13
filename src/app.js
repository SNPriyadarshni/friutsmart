import React, { useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductCard from "./productcard";
import CartPage from "./CartPage";
import "./ap.css";
import { FaShoppingCart } from "react-icons/fa";
import SignInPage from "./SignInPage";
import LoginPage from "./LoginPage";
import PaymentDetails from "./PaymentDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [sortType, setSortType] = useState("name-asc");
  const navigate = useNavigate();
  const productRefs = useRef([]);

  const homeRef = useRef(null);
  const fruitsRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFruits = () => {
    fruitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);
  };

  const products = [
    { name: "Red Watermelon", price: 56, image: "images/watermelon.jpeg" },
    { name: "Juicy Orange", price: 46, image: "images/orange.jpeg" },
    { name: "Red Apple", price: 50, image: "images/redapple.jpeg" },
    { name: "Green Apple", price: 48, image: "images/greenapple.jpeg" },
    { name: "Green Grapes", price: 42, image: "images/greengrape.jpeg" },
    { name: "Black Grapes", price: 46, image: "images/blackgrape.jpeg" },
    { name: "Cherry", price: 60, image: "images/cherry.jpeg" },
    { name: "Red Banana", price: 52, image: "images/redbanana.jpeg" },
    { name: "Banana", price: 40, image: "images/banana.jpeg" },
    { name: "Green Banana", price: 44, image: "images/greenbanana.jpeg" },
    { name: "Dragonfruit", price: 70, image: "images/dragonfruit.jpeg" },
    { name: "Jackfruit", price: 143, image: "images/jackfruit.jpeg" },
    { name: "Mango", price: 65, image: "images/mango.jpeg" },
    { name: "Pineapple", price: 114, image: "images/pineapple.jpeg" },
    { name: "Pomegranate", price: 62, image: "images/pome.jpeg" },
    { name: "Apricots", price: 72, image: "images/apricot.jpeg" },
    { name: "Strawberry", price: 118, image: "images/strawberry.jpeg" },
    { name: "Avacados", price: 57, image: "images/avacado.jpeg" },
    { name: "Blueberry", price: 58, image: "images/blueberry.jpeg" },
    { name: "Damson plum", price: 90, image: "images/Damson plum.jpeg" },
    { name: "Blackberry", price: 49, image: "images/blackberry.jpeg" },
    { name: "Pluots", price: 78, image: "images/pluto.jpeg" },
    { name: "Elderberry", price: 99, image: "images/Elderberry.jpeg" },
    { name: "Eggfruit", price: 123, image: "images/Eggfruit.jpeg" },
    { name: "Zucchini", price: 30, image: "images/Zucchini.jpeg" },
    { name: "Yangmei", price: 64, image: "images/Yangmei.jpeg" },
    { name: "White Mulberry", price: 83, image: "images/White Mulberry.jpeg" },
    { name: "Vanilla Bean", price: 106, image: "images/vanilla Bean.jpeg" },
    { name: "Starfruit", price: 81, image: "images/Starfruit.jpeg" },
    { name: "Rose Apple", price: 50, image: "images/Rose Apple.jpeg" },
    { name: "Redcurrant", price: 31, image: "images/Redcurrant.jpeg" },
    { name: "Quince", price: 74, image: "images/Quince.jpeg" },
    { name: "Papaya", price: 85, image: "images/Papaya.jpeg" },
    { name: "Peach", price: 35, image: "images/Peach.jpeg" },
    { name: "Pear", price: 85, image: "images/Pear.jpeg" },
    { name: "Nectarine", price: 75, image: "images/Nectarine.jpg" },
    { name: "Neem", price: 25, image: "images/Neem.jpeg" },
    { name: "Lemon", price: 36, image: "images/Lemon.jpeg" },
    { name: "Kiwi", price: 73, image: "images/Kiwi.jpeg" },
    { name: "Indian Gooseberry", price: 43, image: "images/Indian Gooseberry.png" },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "name-asc") return a.name.localeCompare(b.name);
    if (sortType === "name-desc") return b.name.localeCompare(a.name);
    if (sortType === "cost-asc") return a.price - b.price;
    if (sortType === "cost-desc") return b.price - a.price;
    return 0;
  });

  const handleSearch = () => {
    const index = sortedProducts.findIndex((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (index !== -1 && productRefs.current[index]) {
      productRefs.current[index].scrollIntoView({ behavior: "smooth" });
      setHighlightedIndex(index);
      setTimeout(() => setHighlightedIndex(null), 3000);
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === product.name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter((item) => item.name !== product.name));
  };

  const decreaseQty = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);
    if (existingItem.qty === 1) {
      removeItem(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="header">
                <h1>Fruit Mart</h1>
                <select value={sortType} onChange={handleSortChange} className="sort-dropdown">
  <option value="name-asc">Name A-Z</option>
  <option value="name-desc">Name Z-A</option>
  <option value="cost-asc">Cost Low to High</option>
  <option value="cost-desc">Cost High to Low</option>
</select>

<button className="reset-btn" onClick={() => setSortType("name-asc")}>
  Reset Filter
</button>

                <div className="search-cart">
                  <button className="nav-button" onClick={scrollToHome}>Home</button>
                  <button className="nav-button" onClick={scrollToFruits}>Fruits</button>
                  <input
                    type="text"
                    placeholder="Search fruits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button onClick={handleSearch}>Search</button>
                  <div className="cart-icon" onClick={() => navigate("/cart")}>
                    <FaShoppingCart />
                    {cartItems.length > 0 && <div className="cart-count">{cartItems.length}</div>}
                  </div>
                </div>
              </div>

              <div ref={homeRef} className="hero">
                <h1>Welcome to Fruit Mart</h1>
                <p>Enjoy your fruity style of life! :)</p>
              </div>

              <div ref={fruitsRef} className="product-grid">
                {sortedProducts.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (productRefs.current[index] = el)}
                    className={highlightedIndex === index ? "highlight-card" : ""}
                  >
                    <ProductCard product={item} onAddToCart={() => addToCart(item)} />
                  </div>
                ))}
              </div>
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              updateQty={updateQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          }
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={<PaymentDetails cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
