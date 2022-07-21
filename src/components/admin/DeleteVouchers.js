import { Link } from "react-router-dom";

const DeleteVoucher = (props) => {

  const handleDelete = () => {
    fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
      method: 'DELETE'
    })
}


  return (
    <div className="voucher dib pa1 ma2 br3 tc shadow-3 grow">
  
          <div>
            <Link className="link" to={`/vouchers/${props.id}`}>
            <img className="image" src={props.image} alt='logo'/>
            <h2>{props.title}</h2>/}
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
     
    </div>
  );
};
 
export default DeleteVoucher;