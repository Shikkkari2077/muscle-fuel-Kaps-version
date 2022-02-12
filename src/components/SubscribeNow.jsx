import React from "react";
import NavbarSecondary from '../common/NavbarSecondary'
import Footer from '../common/Footer'

const SubscribeNow = () => {
  return (
    <>
    <NavbarSecondary/>
      <section className="innerpages">
        <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Subscribe Now</h1>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="subscribe-now-div">
                            <h3>Subscribe </h3>
                            <p>Please Subscribe to Our Newsletter </p>
                            <div class="subscriber-div"><input type="text" class="form-control" placeholder="Enter Your Email" id="" name=""/></div>
                            <div class="subscribe-btn"><button class="button">Submit</button></div>
                        </div>
                        
                    </div>
                </div>
            </div>
      </section>
    <Footer/>	
    </>
  );
};

export default SubscribeNow;
