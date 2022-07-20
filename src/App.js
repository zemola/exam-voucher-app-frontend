import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import AddVoucher from './components/admin/AddVoucher';
import VoucherDetails from './components/voucherDetails';
// import Home from './Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/create" element= {<AddVoucher/>} />
      <Route path="/vouchers/:id" element= {<VoucherDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
