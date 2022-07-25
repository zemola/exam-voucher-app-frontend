import './navbar.css'
import shopping from "../components/shopping-cart.png"
import { Link } from 'react-router-dom';


const Navbar = ({ setShow, size }) => {

    return (  
        <nav className="navbar">
            <a href="/" className="logo">ExamApp <i class="fas fa-award"></i> </a>
           
            <div className="links">
                <a href="/">Home</a>
				<a href="/about">About Us</a>
				<a href="/services">Services</a>
				<a href="/contact">Contact Us</a>
            </div>

            <div className="search">
                <form action="/">
                    <input type="search" className='navsearch' placeholder="Search" />
                </form>
            </div>
            <Link to= "/cart">
            <img className='cart-image' src={shopping} alt='cart'/><span>{size}</span>
            </Link>

        </nav>
        

        
    );
}
 
export default Navbar;


