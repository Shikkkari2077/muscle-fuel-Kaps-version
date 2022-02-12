import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div className="foot-box">
                            <h3>Explorer</h3>
                            <ul>
                                <li><Link to="/package" >Package</Link></li>
                                <li><a href="#">FAQs</a></li>
                                <li><Link to="/dietician">Menu</Link></li>
                                <li><a href="#">Why Muscle Fuel?</a></li>
                                <li><Link to="/sign-up">Sign Up</Link></li>
                                <li><a href="#">Report a Problem</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><Link to="/terms-conditions">Terms and Condition</Link></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Cancellation Policy</a></li>
                            </ul>	
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div className="foot-box">
                            <h3>Explorer</h3>
                            <ul>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="calculate-calorie.html">Calculate Calorie</a></li>
                                <li><a href="#">Updates</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Our Gallery</a></li>
                                <li><a href="#">Kitchen</a></li>
                                <li><a href="#">Our Team</a></li>
                            </ul>	
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div className="foot-box">
                            <h3>Subscribe </h3>
                            <p>Please Subscribe to Our Newsletter </p>
                            <div className="subscriber-div"><input type="text" className="form-control" placeholder="Enter Your Email" id="" name=""/></div>
                            <div className="subscribe-btn"><button className="button">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyrights">
            <div className="container clearfix">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <p>© 2022 Muscle Fuel. All rights reserved</p>
                        <ul className="social-media">
                            <li><a href="#" className="snapchat"><img src="img/snapchat-icon.svg" alt="Snapchat"/></a></li>
                            <li><a href="#" className="twitter"><img src="img/twitter-icon.svg" alt="Twitter"/></a></li>
                            <li><a href="#" className="whatsapp"><img src="img/whatsapp-icon.svg" alt="whatsapp"/></a></li>
                            <li><a href="#" className="youtube"><img src="img/youtube-icon.svg" alt="youtube"/></a></li>
                            <li><a href="#" className="instagram"><img src="img/instagram-icon.svg" alt="Instagram"/></a></li>
                            <li><a href="#" className="facebook"><img src="img/facebook-icon.svg" alt="facebook"/></a></li>

                        </ul>
                        <p><a href="https://www.design-master.com" target="_blank">Designed By Design Master</a></p>
                    </div>
                </div>		
            </div>
        </div>
    </>
  );
};

export default Footer;
