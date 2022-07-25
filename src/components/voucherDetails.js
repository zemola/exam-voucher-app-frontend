import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './voucherDetails.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "style-components";

const VoucherDetails = ({ handleClick }) => {

   const params = useParams();

   const url = `http://localhost:8080/api/v1/voucher/${params.id}`
   const [data, setData] = useState([]) 
 
   useEffect(()=>{
     axios.get(url)
       .then(response => {
         console.log(response.data.data);
         setData(response.data.data)
       })
   }, [url])
 



  return ( 
  <div className="voucher-details">
    {/* <h2>Voucher Details</h2> */}
    <div className="details br3 shadow-3">
    <Link to="/" className="btn btn-primary">x</Link>
    <div className="details-image">
    <img src={data.image} alt="voucher"></img> 
    </div>
     <div className="write-up"> 
       <div className="title">
      <h2>{data.title}</h2>
      </div>
     
     <p className="price">N{data.price}</p>
     <p className="description">{data.description}</p>
    <Button className="button" onClick={() => handleClick(data)}>ADD TO CART </Button>
    </div>
    </div>
  </div> );
}
 
export default VoucherDetails;