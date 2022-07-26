import './navbar.css'
import shopping from "../components/shopping-cart.png"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = ({ setShow, size }) => {

    return (  
        <nav className="navbar">
            <a href="/" className="logo">ExamApp <i class="fas fa-award"></i> </a>
           
            <div className="links">
                <HashLink activeClass="active" to="/#home" spy={true} smooth={true} offset={50} duration={500}>Home</HashLink>
                <HashLink activeClass="active" to="/#about" spy={true} smooth={true} offset={50} duration={500}>About</HashLink>
                <HashLink activeClass="active" to="/#services" spy={true} smooth={true} offset={50} duration={500}>Services</HashLink>
                <HashLink activeClass="active" to="/#contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</HashLink>
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


