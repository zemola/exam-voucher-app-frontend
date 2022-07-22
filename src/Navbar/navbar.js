import React from 'react';
import './navbar.css'


const navbar = () => {
    return (  
        <nav className="navbar">
            <a className="logo">ExamApp <i class="fas fa-award"></i> </a>
           
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



        </nav>
        

        
    );
}
 
export default navbar;


