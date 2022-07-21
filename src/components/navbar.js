const navbar = () => {
    return (  
        <nav className="navbar">
            <a href="/" className="logo">ExamApp</a>
           
            <div className="links">
                <a href="/">Home</a>
				<a href="/about">About Us</a>
				<a href="/services">Services</a>
				<a href="/contact">Contact Us</a>
            </div>

            <div className="search">
                <form action="/">
                    <input type="search" placeholder="Search" />
                </form>
            </div>

        </nav>
        

        
    );
}
 
export default navbar;


