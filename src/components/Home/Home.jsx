import React from "react";
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar/>
     <div class="main">
        <div id="fullpage">	
            <div class="section banner-main" id="section0">
                <div class="page-div"><div class="page-sub">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-6 banner-text">
                                <h1>We not only provide Diet <br/>But Food too</h1>
                                <ul>
                                    <li>We lets you customize your  Protein and Carb for each meal. </li>
                                    <li>We recommends which package  suites you.</li>
                                    <li>We tells your how much calorie you should eat daily to achieve your goal</li>
                                    <li>We alerts of your allergy when you select meals</li>
                                    <li>We reminds you to select meals. If you don’t our experts selects it for you</li>
                                </ul>
                            <div class="banner-btns"><Link to="/subscribe" class="button">Subscribe Now</Link><Link to="/calculate-calorie" class="button">Calculate Calorie</Link></div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-6 banner-right">
                                <img src="img/banner.svg" class="img-fluid" alt="Khalefa Chalet"/>
                                <div class="fider-main">
                                    <div class="fider-one pipe-one">
                                        <div class="fider-text">
                                            <strong>20%</strong><span>PROTEIN</span>
                                        </div>
                                        <div class="circle-top"></div>
                                        <div class="circle-btm"></div>
                                    </div>
                                    <div class="fider-one pipe-two">
                                        <div class="fider-text">
                                            <strong>20%</strong><span>FATS</span>
                                        </div>
                                        <div class="circle-top"></div>
                                        <div class="circle-btm"></div>
                                        <img src="img/man.svg" class="man-img" alt="man"/>
                                    </div>
                                    <div class="fider-one pipe-three">
                                        <div class="fider-text">
                                            <strong>20%</strong><span>CARBS</span>
                                        </div>
                                        <div class="circle-top"></div>
                                        <div class="circle-btm"></div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>	
                </div></div>
            </div>
            <div class="section package-main" id="section1">
                <div class="page-div"><div class="page-sub">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="text-center pb-4"><span>OUR PACKAGES</span></h1>
                            <div class="package-carousel">
                                <div class="package-container swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/sumbatik.jpg" class="img-fluid" alt="Sumbatik"/><div class="package-head"><h2>Sumbatik</h2><p>100g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/FiT.jpg" class="img-fluid" alt="FiT"/><div class="package-head"><h2>FiT</h2><p>150g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/Bulk.jpg" class="img-fluid" alt="Bulk"/><div class="package-head"><h2>Bulk</h2><p>200g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/sumbatik.jpg" class="img-fluid" alt="Sumbatik"/><div class="package-head"><h2>Sumbatik</h2><p>100g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/FiT.jpg" class="img-fluid" alt="FiT"/><div class="package-head"><h2>FiT</h2><p>150g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <div class="package-img"><img src="img/Bulk.jpg" class="img-fluid" alt="Bulk"/><div class="package-head"><h2>Bulk</h2><p>200g Protein</p></div></div>
                                                <div class="package-dtl">
                                                    <h3>Popular amongst those</h3>
                                                    <p>Whose looking for weight lose and get in shape</p>
                                                    <h4>Most popular Meals choice</h4>
                                                    <ul>
                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                    </ul>
                                                    <div class="price-subscribe d-flex justify-content-between">
                                                        <div><p><strong>Starting from</strong>Starting from 150 KWD</p></div>
                                                        <div><button type="submit" onClick="location.href='package.html'" class="button">Subscribe Now</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="package-button-prev swiper-button-prev"></div>
                                <div class="package-button-next swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div></div>
                </div>
            </div>
            <div class="section popular-main first parallaxcont" id="section2">
                <div class="page-div"><div class="page-sub">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="text-center"><span>WE ARE GROWING</span></h1>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 growing-column"><strong class="wow fadeInUp"></strong>
                                <div class="growing-card">
                                    <div class="growing">
                                        <div class="number"><div class="number counting" data-count="1000">0</div><span>+</span></div>
                                        <p>Trusted Customers</p>
                                    </div>
                                    <div class="growing">
                                        <div class="number"><div class="number counting" data-count="20000">0</div><span>+</span></div>
                                        <p>downloads</p>
                                    </div>
                                    <div class="growing">
                                        <div class="number"><div class="number counting" data-count="64000">0</div><span>+</span></div>
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
                                    <div class="growing-link"><img src="img/qr-code.svg" class="img-fluid" alt="qr code"/></div>
                                    <a href="javascript:void(0);" class="growing-link"><img src="img/apple-store.png" class="img-fluid" alt="apple store"/></a>
                                    <a href="javascript:void(0);" class="growing-link"><img src="img/google-play.png" class="img-fluid" alt="google play store"/></a>
                                </div>	
                            </div>
                        </div>
                    </div></div>
                </div>	
            </div>
            <div class="section feature-main" id="section3">
                <div class="page-div"><div class="page-sub">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="text-center"><span>FEATURES</span></h1>
                                <div class="featurs-carousel">
                                    <div class="swiper-container feature-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Freeze.svg" alt="Freeze"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Freeze</p>
                                                </div>
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Goal-based-recommendation.svg" alt="Goal based recommendation"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Goal based recommendation</p>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Customize-macro.svg" alt="Customize macro "/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Customize macro </p>
                                                </div>
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Maintain-total-nutrition-value.svg" alt="Maintain total nutrition value"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Maintain total nutrition value</p>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Customize-Packages.svg" alt="Customize Packages"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Customize Packages</p>
                                                </div>
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Rate-Meal.svg" alt="Rate Meal"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Rate Meal</p>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Manage-Health-Profile.svg" alt="Manage Health Profile"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Manage Health Profile</p>
                                                </div>
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Call-Support.svg" alt="Call Support"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Call Support</p>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/Report-Issues.svg" alt="Report Issues"/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>Report Issues</p>
                                                </div>
                                                <div class="feature-box">
                                                    <div class="feature-img"><img src="img/100-Menu-items.svg" alt="100+ Menu items "/><div class="feature-dtl"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p></div></div>
                                                    <p>100+ Menu items </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feature-button-prev swiper-button-prev"></div>
                                    <div class="feature-button-next swiper-button-next"></div>
                                </div>	
                            </div>
                        </div>
                    </div></div>
                </div>	
            </div>		
            <div class="section stories-main" id="section4">
                <div class="page-div"><div class="page-sub">
                    <div class="w-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h1 class="text-center"><span>CUSTOMER STORIES</span></h1>
                                    <div class="stories-carousel">
                                        <div class="swiper-container stories-container">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/01.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/B4S5R3APER - Rise .mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Missiony - Facts.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Nowaveus - RECKEDGE.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Viper - berries.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Aquarius - long gone - aquarius_drpepper115.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/B4S5R3APER - Rise .mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Missiony - Facts.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Nowaveus - RECKEDGE.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="stories-box">
                                                        <div class="stories-img">
                                                            <img src="img/customer.png" alt="customer"/>
                                                            <div class="slide__audio js-audio">
                                                                <audio class="slide__audio-player" controls="">
                                                                <source src="mp3/Viper - berries.mp3" type="audio/mpeg"/>
                                                                </audio>
                                                                <div class="audio__controls">
                                                                {/* <svg version="1.1" class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                                                                    <path class="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
                                                                </svg> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
                                                                    <g class="equalizer-group">
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                        <rect class="bar"></rect>
                                                                    </g>
                                                                </svg>
                                                                <div class="audio__slider"></div>
                                                                <button class="play-pause"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>Mohammed Al Khaled</p>
                                                        <h4>Sumbatik</h4>
                                                        <div class="meal-snaks-soup d-flex justify-content-between">
                                                            <div>3 Meals</div><div>2 snack</div><div>1 soup</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="stories-button-prev swiper-button-prev"></div>
                                        <div class="stories-button-next swiper-button-next"></div>
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
    <Footer/>	
    </>
  );
};

export default Home;
