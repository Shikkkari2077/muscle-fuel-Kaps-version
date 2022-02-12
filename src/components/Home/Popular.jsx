import React from "react";

const Popular = () => {
  return (
    <section class="section popular-main first parallaxcont fp-section fp-table active fp-completely H_SEC" id="section2"
        style={{opacity: '1', backgroundColor: 'rgb(255, 255, 255)', backgrounPosition: '50% 173px'}}
        data-fp-styles={{opacity: '1'}} data-anchor="Growing">
        <div class="fp-tableCell" >
            <div class="fp-scrollable">
                <div class="fp-scroller">
                    <div class="page-div">
                        <div class="page-sub">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="text-center"><span>WE ARE GROWING</span></h1>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 growing-column"><strong
                                            class="wow fadeInUp"></strong>
                                        <div class="growing-card">
                                            <div class="growing">
                                                <div class="number">
                                                    <div class="number counting" data-count="1000">1000</div><span>+</span>
                                                </div>
                                                <p>Trusted Customers</p>
                                            </div>
                                            <div class="growing">
                                                <div class="number">
                                                    <div class="number counting" data-count="20000">20000</div>
                                                    <span>+</span>
                                                </div>
                                                <p>downloads</p>
                                            </div>
                                            <div class="growing">
                                                <div class="number">
                                                    <div class="number counting" data-count="64000">64000</div>
                                                    <span>+</span>
                                                </div>
                                                <p>Meals Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 growing-column">
                                        <div class="growing-card">
                                            <div class="mobile-holder">
                                                <img src="img/mobile.png" class="img-fluid" alt="mobile"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 growing-column">
                                        <div class="growing-card">
                                            <div class="growing-link"><img src="img/qr-code.svg" class="img-fluid"
                                                    alt="qr code"/></div>
                                            <a href="javascript:void(0);" class="growing-link"><img
                                                    src="img/apple-store.png" class="img-fluid" alt="apple store"/></a>
                                            <a href="javascript:void(0);" class="growing-link"><img
                                                    src="img/google-play.png" class="img-fluid" alt="google play store"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Popular;
