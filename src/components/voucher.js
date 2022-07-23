import React from "react";
import { Link } from "react-router-dom";
import './voucher.css'



const Voucher = (props) => {

//   const handleDelete = () => {
//     fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
//       method: 'DELETE'
//     })
// }


  return (
    <div className="voucher pa2 ma2 br3 tc shadow-3 grow">
          <div>
            <Link className="link" to={`/vouchers/${props.id}`}>
            <img className="image" src={props.image} alt='logo'/>
            <h2>{props.title}</h2>
            {/* <p>N{props.price}</p> */}
            {/* <p>{props.description}</p> */}
            </Link>
          </div>
     
    </div>
  );
};

export default Voucher;
