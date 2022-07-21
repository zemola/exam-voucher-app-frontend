import React from 'react';
import Navbar from './Navbar/navbar';
import HomePage from './HomePage/homepage';
import Promo from './Promo/promo';
import ContactUs from './ContactUs/contact';
import Footer from './Footer/footer';
 

//import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Promo />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
