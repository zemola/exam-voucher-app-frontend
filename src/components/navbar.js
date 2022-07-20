const navbar = () => {
    return (  
        <nav className="navbar">
            <h2 className="logo">ExamApp</h2>

            <div className="search">
                <form action="/">
                    <input type="search" placeholder="Search" />
                </form>
            </div>
           
            <div className="links">
                <a href="/">Home</a>
				<a href="/about">About Us</a>
				<a href="/services">Services</a>
				<a href="/contact">Contact Us</a>
            </div>

            <div>
                <a href="/sign-in" className="btn">Sign In</a>
                <a href="/cart" className="Cart">Cart</a>
            </div>
            
        </nav>
        

        
    );
}
 
export default navbar;
