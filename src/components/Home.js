import React from "react";
import HomePage from '../HomePage/homepage'
import Promo from '../Promo/promo';
import VoucherList from "./voucherList";
import ContactUs from '../ContactUs/contact';

const Home = () => {
  return ( 
    <div>
      <div id="home">
      <HomePage />
      </div>
      <Promo />
      <div id="services">
      <VoucherList />
      </div>
      <div id="contact">
      <ContactUs />
      </div>
      
    </div>
   );
}
 
export default Home;