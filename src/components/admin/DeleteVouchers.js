import React from "react";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

const DeleteVoucher = (props) => {

  const notify = () => toast ("Itemhave been deleted!");

  const handleDelete = () => {
    fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
      method: 'DELETE'
    })
}


  return (
    <div className="voucher">
  
          <div>
            <Link className="link" to={`/vouchers/${props.id}`}>
            <img className="image" src={props.image} alt='logo'/>
            <h2>{props.title}</h2>
            </Link>
            {/* <button onClick={handleDelete}>Delete</button> */}
            <button onClick={()=> {handleDelete(); notify()}}>Delete</button>
            {/* <button onClick={()=> {fun1(); fun2()}}>Show more</button> */}
          </div>
     
    </div>
  );
};
 
export default DeleteVoucher;