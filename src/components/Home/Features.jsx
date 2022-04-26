import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Features = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'FTRSlider',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
        ]
      };

  return (
    <section class="section feature-main fp-section fp-table active fp-completely H_SEC" id="section3"
        style={{opacity: '1', backgroundColor: 'rgb(255, 255, 255)'}} data-fp-styles={{opacity: '1'}}
        data-anchor="Features">
        <div class="fp-tableCell" >
            <div class="fp-scrollable">
                <div class="fp-scroller">
                    <div class="page-div">
                        <div class="page-sub">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="text-center"><span>FEATURES</span></h1>
                                        <div class="featurs-carousel" style={{
                                            // border:"1px solid red",
                                            display:'flex',
                                            justifyContent:'center'
                                        }}>
                                            <div
                                                class="swiper-container feature-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden FTR">
                                                <Slider {...settings}>
                                                    <div class="swiper-slide swiper-slide-active FTR_BOX" role="group"
                                                        aria-label="1 / 5">
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Freeze.svg" alt="Freeze"/>
                                                              
                                                            </div>
                                                            <p>Freeze</p>
                                                        </div>
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img
                                                                    src="img/Goal-based-recommendation.svg"
                                                                    alt="Goal based recommendation"/>
                                                              
                                                            </div>
                                                            <p>Goal based recommendation</p>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide swiper-slide-next FTR_BOX" role="group"
                                                        aria-label="2 / 5">
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Customize-macro.svg"
                                                                    alt="Customize macro "/>
                                                              
                                                            </div>
                                                            <p>Customize macro </p>
                                                        </div>
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img
                                                                    src="img/Maintain-total-nutrition-value.svg"
                                                                    alt="Maintain total nutrition value"/>
                                                              
                                                            </div>
                                                            <p>Maintain total nutrition value</p>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide FTR_BOX" role="group" aria-label="3 / 5"
                                                    >
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Customize-Packages.svg"
                                                                    alt="Customize Packages"/>
                                                              
                                                            </div>
                                                            <p>Customize Packages</p>
                                                        </div>
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Rate-Meal.svg"
                                                                    alt="Rate Meal"/>
                                                              
                                                            </div>
                                                            <p>Rate Meal</p>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide FTR_BOX" role="group" aria-label="4 / 5"
                                                    >
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img
                                                                    src="img/Manage-Health-Profile.svg"
                                                                    alt="Manage Health Profile"/>
                                                              
                                                            </div>
                                                            <p>Manage Health Profile</p>
                                                        </div>
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Call-Support.svg"
                                                                    alt="Call Support"/>
                                                              
                                                            </div>
                                                            <p>Call Support</p>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide FTR_BOX" role="group" aria-label="5 / 5"
                                                    >
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/Report-Issues.svg"
                                                                    alt="Report Issues"/>
                                                              
                                                            </div>
                                                            <p>Report Issues</p>
                                                        </div>
                                                        <div class="feature-box">
                                                            <div class="feature-img"><img src="img/100-Menu-items.svg"
                                                                    alt="100+ Menu items "/>
                                                              
                                                            </div>
                                                            <p>100+ Menu items </p>
                                                        </div>
                                                    </div>
                                                </Slider>
                                                <span class="swiper-notification" aria-live="assertive"
                                                    aria-atomic="true"></span>
                                            </div>
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

export default Features;
