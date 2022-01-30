import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div class="foot-box">
                            <h3>Explorer</h3>
                            <ul>
                                <li><Link to="/package" >Package</Link></li>
                                <li><a href="javascript:void(0);">FAQs</a></li>
                                <li><Link to="/dietician">Menu</Link></li>
                                <li><a href="javascript:void(0);">Why Muscle Fuel?</a></li>
                                <li><Link to="/sign-up">Sign Up</Link></li>
                                <li><a href="javascript:void(0);">Report a Problem</a></li>
                                <li><a href="javascript:void(0);">Careers</a></li>
                                <li><Link to="/terms-conditions">Terms and Condition</Link></li>
                                <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                <li><a href="javascript:void(0);">Refund Policy</a></li>
                                <li><a href="javascript:void(0);">Cancellation Policy</a></li>
                            </ul>	
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div class="foot-box">
                            <h3>Explorer</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Tutorial</a></li>
                                <li><a href="javascript:void(0);">Learn</a></li>
                                <li><a href="javascript:void(0);">Contact Us</a></li>
                                <li><a href="javascript:void(0);">Testimonials</a></li>
                                <li><a href="calculate-calorie.html">Calculate Calorie</a></li>
                                <li><a href="javascript:void(0);">Updates</a></li>
                                <li><a href="javascript:void(0);">Careers</a></li>
                                <li><a href="javascript:void(0);">Our Gallery</a></li>
                                <li><a href="javascript:void(0);">Kitchen</a></li>
                                <li><a href="javascript:void(0);">Our Team</a></li>
                            </ul>	
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 foot-column">
                        <div class="foot-box">
                            <h3>Subscribe </h3>
                            <p>Please Subscribe to Our Newsletter </p>
                            <div class="subscriber-div"><input type="text" class="form-control" placeholder="Enter Your Email" id="" name=""/></div>
                            <div class="subscribe-btn"><button class="button">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyrights">
            <div class="container clearfix">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between">
                        <p>© 2022 Muscle Fuel. All rights reserved</p>
                        <ul class="social-media">
                            <li><a href="javascript:void(0);" class="snapchat"><img src="img/snapchat-icon.svg" alt="Snapchat"/></a></li>
                            <li><a href="javascript:void(0);" class="twitter"><img src="img/twitter-icon.svg" alt="Twitter"/></a></li>
                            <li><a href="javascript:void(0);" class="whatsapp"><img src="img/whatsapp-icon.svg" alt="whatsapp"/></a></li>
                            <li><a href="javascript:void(0);" class="youtube"><img src="img/youtube-icon.svg" alt="youtube"/></a></li>
                            <li><a href="javascript:void(0);" class="instagram"><img src="img/instagram-icon.svg" alt="Instagram"/></a></li>
                            <li><a href="javascript:void(0);" class="facebook"><img src="img/facebook-icon.svg" alt="facebook"/></a></li>

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
