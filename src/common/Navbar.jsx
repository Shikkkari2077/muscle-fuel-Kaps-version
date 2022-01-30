import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <a href="index.html" class="muscle-fuel"><img src="img/muscle-fuel.svg" alt="Muscle Fuel"/></a>
                    <div class="navigation">
                        <div class="wsmenucontainer clearfix">
                            <div class="overlapblackbg"></div>
                            <div class="wsmobileheader clearfix">
                                <a id="wsnavtoggle" class="animated-arrow"><span></span></a>
                            </div>
                            <div class="wsmain">
                                <nav class="wsmenu clearfix">
                                    <ul class="mobile-sub wsmenu-list">
                                        <li><Link to="/" class="active">Home</Link></li>
                                        <li><Link to="/package" >Package</Link></li>
                                        <li><Link to="/calculate-calorie" >Calculate Calorie</Link></li>
                                        <li><Link to="/dietician">Dietician</Link></li>
                                        <li><Link to="/menu">Menu</Link></li>
                                        <li><Link to="/sign-in">Sign in</Link>
                                            <ul class="wsmenu-submenu">
                                                <li><Link to="/sign-in">Login</Link></li>
                                                <li><Link to="/sign-up">Register</Link></li>
                                            </ul>	
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="language-div"><Link to="#">العربية</Link></div>
                        <div class="subscribe-div"><Link to="/subscribe" class="button">Subscribe Now</Link></div>
                    </div>				
                </div>
            </div>
 	    </div>
    </>
  );
};

export default Navbar;
