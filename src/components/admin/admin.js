import axios from "axios";
import { useState, useEffect } from "react";

const Admin = () => {
  const url = "http://localhost:8080/api/v1/voucher";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setData(response.data.data.voucher);
    });
  }, [url]);

  const handleDelete = () => {
    fetch('http://localhost:8080/api/v1/voucher/'+ props.id, {
      method: 'DELETE'
    })
}

  data.map((d) => {
    return (
      <div className="voucher-content">
        <div className="voucher pa2 ma2 br3 tc shadow-3 grow">
          <Link className="link" to={`/vouchers/${d.id}`}>
            <img className="image" src={d.image} alt="logo" />
            <h2>{d.title}</h2>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  });
};

export default Admin;
