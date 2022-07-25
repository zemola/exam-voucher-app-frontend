import React from 'react';
import './footer.css'


const Footer = () => {
    return (  
        <footer className=" footer px-5">
            <div className="container-fluid">
                <div className="row text-light py-5">
                    <div className="col-lg-2 col-sm-6">
                        <h5 className="pb-3">ExamApp <i class="fas fa-award"></i></h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">Services</a></li>
                            <li><a href="#" className="footer-link">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h5 className="pb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Certifications</a></li>
                            <li><a href="#" className="footer-link">Training Courses</a></li>
                            <li><a href="#" className="footer-link">Business Solution</a></li>
                            <li><a href="#" className="footer-link">Rquest Exam</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h5 className="pb-3">Course</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Microsoft</a></li>
                            <li><a href="#" className="footer-link">Cisco</a></li>
                            <li><a href="#" className="footer-link">Google</a></li>
                            <li><a href="#" className="footer-link">Amazon</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <h5 className="pb-3">Need Help?</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link text-uppercase">Customer Services</a></li>
                            <li><a href="#" className="footer-link text-uppercase">Online Chat</a></li>
                            <li><a href="#" className="footer-link text-uppercase">Support</a></li>
                            <li><a href="#" className="text-info">ExamLab@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <h5 className="pb-3">Stay Connected</h5>
                        <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime provident amet minima? Error, facere fugiat. Quos impedit, tempore eius rerum quis.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fab fa-google-plus fa-2x text-danger"></i></li>
                            <li className="list-inline-item"><i className="fab fa-facebook fa-2x text-primary"></i></li>
                            <li className="list-inline-item"><i className="fab fa-instagram fa-2x text-danger"></i></li>
                            <li className="list-inline-item"><i className="fab fa-twitter fa-2x text-primary"></i></li>
                            <li className="list-inline-item"><i className="fab fa-youtube fa-2x text-danger"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center text-light border-top pt-3">
                        <p>&copy; HLFY22 Copyright, Ha-Shem</p>
                    </div>
                </div>
            </div>
        </footer>
                        
    );
}
 
export default Footer;


