import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const images = ["1.png", "2.png", "3.png", "4.png"];
  const [mainImg, setMainImg] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const [secondImg, setSecondImg] = useState(images[0]);
  const [count, setCount] = useState(1);
  const [secondCount, setSecondCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    const existingItem = cart.find(
      (item) => item.title === "Fall Limited Edition Sneakers"
    );

    if (existingItem) {
      existingItem.quantity += secondCount;
      existingItem.total = existingItem.quantity * 125;
      setCart([...cart]);
    } else {
      const newItem = {
        title: "Fall Limited Edition Sneakers",
        price: 125,
        img: "./assets/2.png",
        quantity: secondCount,
        total: secondCount * 125,
      };
      setCart([...cart, newItem]);
    }
  };

  const nextHandler = () => {
    if (count >= images.length - 1) {
      setCount(0);
      setSecondImg(images[0]);
    } else {
      setCount(count + 1);
      setSecondImg(images[count + 1]);
    }
  };

  const prevHandler = () => {
    if (count <= 0) {
      setCount(images.length - 1);
      setSecondImg(images[images.length - 1]);
    } else {
      setCount(count - 1);
      setSecondImg(images[count - 1]);
    }
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="main">
      <div style={{ position: "relative" }}>
        <button
          className="cart-icon"
          onClick={toggleCart}
          style={{
            position: "absolute",
            top: 10,
            right: 20,
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          🛒
        </button>

        {showCart && (
          <div className="cart-container">
            <div className="cart-header">
              <h2>Cart</h2>
              <button onClick={() => setCart([])}>Clear</button>
            </div>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt="Product" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>
                      {item.quantity} x ${item.price} = ${item.total}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="cart-footer">
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>

      <div className="hero">
        <div className="fexi">
          <img
            src={`./assets/${mainImg}`}
            alt="Main"
            width={430}
            height={430}
            onClick={() => setShowModal(true)}
            className="main-img"
          />
          <div className="patarafexi">
            {images.map((el) => (
              <img
                onClick={() => setMainImg(el)}
                key={el}
                src={`assets/${el}`}
                width={80}
                height={80}
              />
            ))}
          </div>
        </div>

        <div className="about">
          <h5>SNEAKER COMPANY</h5>
          <h1 className="Fall">Fall Limited Edition Sneakers</h1>

          <p className="desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="discount">
            <h2>$125.00</h2>
            <div className="prec">
              <h6>-50%</h6>
            </div>
          </div>
          <h3>$250.00</h3>

          <div>
            <button
              onClick={() => {
                if (secondCount > 1) {
                  setSecondCount(secondCount - 1);
                }
              }}
            >
              -
            </button>
            <button>{secondCount}</button>
            <button
              onClick={() => {
                setSecondCount(secondCount + 1);
              }}
            >
              +
            </button>
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div onClick={prevHandler} className="arrow prev">
              <img src="./assets/arrow.png" alt="Previous" />
            </div>
            <img
              src={`./assets/${secondImg}`}
              alt="Main"
              className="modal-main-img"
            />
            <div onClick={nextHandler} className="arrow next">
              <img
                src="./assets/arrow-right.png"
                alt="Next"
                width={18}
                height={18}
              />
            </div>
            <div className="modal-thumbnails">
              {images.map((el) => (
                <img
                  onClick={() => setSecondImg(el)}
                  key={el}
                  src={`assets/${el}`}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
