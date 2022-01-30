import React from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const SingIn = () => {
  return (
    <>
     <Navbar/>
      <section class="innerpages sign-in-main">
        <div class="container">
            <div class="row">
                {/* <!--<div class="col-12 position-relative z-index99">
                    <h1 class="text-center">Sign In</h1>
                </div>--> */}
                <div class="col-12">
                    <div class="row fp-completely">
                        <div class="col-lg-5 col-md-5 col-sm-6 banner-text">
                            <h2 class="text-center mb-2">Login</h2>
                            <div class="login-box">
                                <div class="login-box-sub">
                                    <div class="form-group"><input type="text" class="form-control" placeholder="Email" value=""/></div>
                                    <div class="form-group"><input type="password" class="form-control" placeholder="Password" value=""/></div>
                                    <div class="form-group"><button class="button">Login</button> <a href="javascript:void(0);" class="forgot-link">Forgot Password?</a></div>
                                    <div class="forgot-main">
                                        <div class="forgot-main-sub">
                                            <div class="forgot-div"><input type="text" class="form-control" placeholder="Enter mobile or email" value=""/><button type="submit" class="button">Reset Password</button></div>
                                        </div>
                                    </div>
                                <div class="login-width">
                                    <div class="or form-group text-center"><span>OR</span></div>
                                    <div class="login-box-sub row">
                                        <div class="col-6"><button class="button w-100 text-center apple-link"><span>Sign in with Apple</span></button></div>
                                        <div class="col-6"><button class="button w-100 text-center google-link"><span>Sign in with Google</span></button></div>
                                        <div class="col-12 an-account">
                                            Don’t have an account? <a href="sign-up.html">SIGN UP</a>
                                        </div>		
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6 banner-right">
                            <img src="img/banner.svg" class="img-fluid" alt="Khalefa Chalet"/>
                            <div class="fider-main">
                                <div class="fider-one pipe-one">
                                    <div class="fider-text">
                                        <strong>47%</strong><span>PROTEIN</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                </div>
                                <div class="fider-one pipe-two">
                                    <div class="fider-text">
                                        <strong>24%</strong><span>FATS</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                    <img src="img/man.svg" class="man-img" alt="man"/>
                                </div>
                                <div class="fider-one pipe-three">
                                    <div class="fider-text">
                                        <strong>50%</strong><span>CARBS</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default SingIn;
