const navbar = () => {
    return (  
        <nav className="navbar">
            <a className="logo">ExamApp</a>
           
            <div className="links">
                <a href="/">Home</a>
				<a href="/">About Us</a>
				<a href="/">Services</a>
				<a href="/">Contact Us</a>
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


