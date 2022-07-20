


const Voucher = (props) => {

  const handleDelete = () => {
    fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
      method: 'DELETE'
    })
}


  return (
    <div className="voucher">
  
          <div>
            <img src={props.image} alt='logo'/>
            <h2>{props.title}</h2>
            <p>N{props.price}</p>
            <p>{props.description}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
     
    </div>
  );
};

export default Voucher;
