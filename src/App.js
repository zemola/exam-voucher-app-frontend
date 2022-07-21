import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import VoucherList from './components/voucherList'
import Navbar from './components/navbar';
import AddVoucher from './components/admin/AddVoucher';
import VoucherDetails from './components/voucherDetails';
import 'tachyons';
import Cart from "./components/Cart";
import DeleteVoucher from "./components/admin/DeleteVouchers";



function App() {

  

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element= {<VoucherList />} />
      <Route path="/create" element= {<AddVoucher/>} />
      <Route path="/vouchers/:id" element= {<VoucherDetails />} />
      <Route path="/vouchers/delete" element= {<DeleteVoucher />} />
      <Route path="/cart" element= {<Cart />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
