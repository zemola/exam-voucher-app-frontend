import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange, handlePrice, price }) => {
  const localData = (JSON.parse(localStorage.getItem('cart')))
  // const [items, setItems] = useState([cart])

  // localStorage.setItem('cart', JSON.stringify([cart]));

  // cart = JSON.parse(localStorage.getItem([cart]));

  

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans += item.amount * item.price));
  //   setPrice(ans);
  // };

  // <button onClick={notify}>Delete</button>
  // const notify = () => toast ("Itemhave been deleted!");


  // const handlePrice = () => {
  //   const ans = cart.reduce((total, item) => total + item.price, 0 );
  //   setPrice(ans);
  // };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {localData.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>N {price}</span>
      </div>
      <Link to="/payment"><button style={{padding:"0.5rem", margin:"1rem 0",}}>Make Payment</button></Link>
      
    </article>
  );
};

export default Cart;