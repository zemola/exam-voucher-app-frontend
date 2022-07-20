
import axios from 'axios';
import { useState, useEffect } from 'react';
import Voucher from "./voucher"

const VoucherList = () => {

  const url = 'http://localhost:8080/api/v1/voucher'
  const [data, setData] = useState([])



  useEffect(()=>{
    axios.get(url)
      .then(response => {
        console.log(response);
        setData(response.data.data.voucher)
      })
  }, [url])



 const everyVoucher = data.map(d => {
   return (
     <Voucher title={d.title} price={d.price} descreption = {d.descreption} image = {d.image} id = {d._id} />
   )
 }) 



  return (
    <div className="voucher">
        {everyVoucher}
    </div>
  );
};

export default VoucherList;
