import { useEffect, useState } from "react";
import axios from "axios";

const AddVoucher = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isPending, setIsPending] = useState(false)

  const url = 'http://localhost:8080/api/v1/voucher'

  const handleSubmit = (e) => {
    e.preventDefault();
    const Voucher = {title, price, description, image }

    setIsPending(true)
    axios.post(url, {Voucher})
   
  }


return ( 
  <div>
    <h2>
    Add a New Blog
    </h2>
    <form onSubmit={handleSubmit}>
      <label>Voucher title:</label>
      <input type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

<label>Voucher price:</label>
      <input type="text"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

<label>Voucher description:</label>
      <input type="text"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

<label>Voucher image:</label>
      <input type="text"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      
      <button>Add Voucher</button>
    </form>
  </div>
 );
}
 
export default AddVoucher;