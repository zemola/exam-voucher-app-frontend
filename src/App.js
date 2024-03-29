import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Admin from "./components/admin/admin";
import AddVoucher from "./components/admin/AddVoucher";
import VoucherDetails from './components/voucherDetails';
import Cart from "./components/Cart";
import DeleteVoucher from "./components/admin/DeleteVouchers";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import 'tachyons';
import Home from "./components/Home";
import PaystackPayment from "./components/payment/paystackPayment";



 


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleClick = (data) => {
    if (cart.indexOf(data) !== -1) return;

    setCart([...cart, data]);
    localStorage.setItem('cart', JSON.stringify([...cart, data]));
  };

  const handlePrice = () => {
    const ans = cart.reduce((total, item) => total + item.price, 0 );
    setPrice(ans);
  };

  const handleChange = (data, d) => {
    const ind = cart.indexOf(data);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
        <Router>
    <div className="App">
      <Navbar setShow={setShow} size={cart.length}/>
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/create" element= {<Admin/>} />
      <Route path="/addvoucher" element= {<AddVoucher/>} />
      <Route path="/vouchers/:id" element= {<VoucherDetails handleClick={handleClick} />} />
      <Route path="/vouchers/delete" element= {<DeleteVoucher  />} />
      <Route path="/cart" element= {<Cart cart={cart} setCart={setCart} handleChange={handleChange} handlePrice={handlePrice} price={price}/>} />
      <Route path="/payment" element= {<PaystackPayment  handlePrice={handlePrice} price={price}/>} />
      </Routes>
      
      <ToastContainer/>
      <div id="about">
      <Footer />
      </div>

      
      
    </div>
    </Router>
  );
}

export default App;
