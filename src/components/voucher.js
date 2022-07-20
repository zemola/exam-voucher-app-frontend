
import axios from 'axios';
import { useState, useEffect } from 'react';

const Voucher = () => {

  const url = 'http://localhost:8080/api/v1/voucher'
  const [data, setData] = useState([])


  useEffect(()=>{
    axios.get(url)
      .then(response => {
        console.log(response);
        setData(response.data.data.voucher)
      })
  }, [url])

  return (
    <div className="voucher">
      {
        data.map(d => (
          <div>
            <img src={d.image} alt='logo'/>
            <h2>{d.title}</h2>
            <p>N{d.price}</p>
            <p>{d.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Voucher;
