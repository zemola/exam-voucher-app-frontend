import FooterController from "./footerController";
import SocialIcons from "./socialicons";
import { Icons } from "./menus";


const Footer = () => {
    return (  
        <footer className="navfoot">
            {/* <div className="text">
                <h1><span>Promo !!!</span> Do not miss out </h1>
                <div className="searchClick">
                    <input type="text" placeholder="Search" className="searchList"/>
                    <button className="btn">
                        Request Code
                    </button>
                </div>
            </div> */}

            <FooterController />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>© 2023 HLFY. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcons Icons={Icons} />
            </div>


        </footer>
        

        
    );
}
 
export default Footer;


