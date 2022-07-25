import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminInterface from "./adminInterface";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const url = "http://localhost:8080/api/v1/voucher";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setData(response.data.data.voucher);
    });
  }, [url]);

  const handleData = data.map((d) => {
    return (
      <AdminInterface
        title={d.title}
        price={d.price}
        description={d.description}
        image={d.image}
        id={d._id}
        key={d._id}
      />
    );
  });

  return (
    <div>
      <div className="search" style={{display:"flex", justifyContent:"space-between", padding:"2rem"}}>
        <form action="/">
          <input type="search" className="navsearch" placeholder="Search" />
        </form> 
        <div>
        <Link to="/addVoucher" className="btn btn-primary">Add Voucher</Link>
        <Link to="/addVoucher" className="btn btn-primary" style={{marginLeft:"1rem"}}>Add Promo</Link>
        </div>
      </div>
      <div className="voucher-content">{handleData}</div>
    </div>
  );
};

export default Admin;
