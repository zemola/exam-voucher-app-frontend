import React from "react";
import { useState } from "react";
import './AddVoucher.css'

const AddPromo = () => {
  const [title, setTitle] = useState('');
  const [percentage, setpercentage] = useState('');
  const [vouchers, setVouchers] = useState('');

  const url = 'http://localhost:8080/api/v1/promo'

  const handleSubmit = (e) => {
    e.preventDefault();
    const Promo = {title, percentage, Promos, }

    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Promo)
    }).then(() => {
      console.log("new log added");
    })

   
  }


return ( 
  <div className="addvoucher">
    <div className="sub-addvoucher">
      <div>
        <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="addvoucher-text">
          Add a New Voucher
        </h2>
          <div className="form-group">
          <label className="fill-form">Voucher title:</label>
              <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
          </div>

          <div className="form-group">
          <label className="fill-form"> percentage:</label>
                <input type="text"
                  required
                  value={percentage}
                  onChange={(e) => setpercentage(e.target.value)}
                />
          </div>

          <div className="form-group">
          <label className="fill-form"> vouchers:</label>
                <input type="text"
                  required
                  value={vouchers}
                  onChange={(e) => setVouchers(e.target.value)}
                />
          </div>

          {/* <button className="btn">Add Voucher</button> */}
        </form>

        <a className="btn" href="#">Add Voucher</a>

      </div>
      
      
    </div>
  </div>
 );
}
 
export default AddVoucher;