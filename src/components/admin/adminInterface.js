import { Link, Navigate } from "react-router-dom";

const AdminInterface = (props) => {

  const handleDelete = () => {
    fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
      method: 'DELETE'
    })
    alert("Item deleted successfully")

  }

  return (
        <div className="voucher pa2 ma2 br3 tc shadow-3">
            <Link className="link" to={`/vouchers/${props.id}`}>
            <img className="image" src={props.image} alt='logo'/>
            <h6 className="voucher-link">{props.title}</h6>
            {/* <p>N{props.price}</p> */}
            {/* <p>{props.description}</p> */}
            <button className="delete-voucher" onClick={handleDelete}>Delete</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
    </div> );
}
 
export default AdminInterface;