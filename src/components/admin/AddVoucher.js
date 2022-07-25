import React from "react";
import { useState } from "react";
import './AddVoucher.css'

const AddVoucher = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const url = 'http://localhost:8080/api/v1/voucher'

  const handleSubmit = (e) => {
    e.preventDefault();
    const Voucher = {title, price, description, image }

    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Voucher)
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
          <label className="fill-form"> price:</label>
                <input type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
          </div>

          <div className="form-group">
          <label className="fill-form"> description:</label>
                <input type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
          </div>

          <div className="form-group">
          <label className="fill-form"> image (url):</label>
                <input type="text"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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