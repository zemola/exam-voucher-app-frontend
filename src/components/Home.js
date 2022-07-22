import HomePage from '../HomePage/homepage'
import Promo from '../Promo/promo';
import VoucherList from "./voucherList";
import ContactUs from '../ContactUs/contact';

const Home = () => {
  return ( 
    <div>
      <HomePage />
      <Promo />
      <VoucherList />
      <ContactUs />
    </div>
   );
}
 
export default Home;