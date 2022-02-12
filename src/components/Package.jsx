import React from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const Package = () => {
  return (
    <>
    <Navbar/>
    <section className="innerpages">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="package-box">
                        <div className="select-package-carousel">
                            <h3 className="text-center text-transform-none color-black">Select a Package</h3>
                            <div className="package-container swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide IMPORTANT2">
                                        <div className="package-card">
                                            <input type="radio" className="styled-checkbox" id="package1" name="packages" />
                                            <label htmlFor="package1" title="Sumbatik">
                                                <div className="package-img">
                                                    <img src="img/sumbatik.jpg" className="img-fluid" alt="Sumbatik Package"/>
                                                    <div className="package-head">
                                                        <h2>Sumbatik</h2><p>100g Protein</p>
                                                        <div><p>Starting from 150 KWD</p></div>
                                                        <div className="read-more-select"><a href="#sumbatikModel" data-fancybox className="button">Read More</a><span className="button select-btn">Select</span></div>
                                                    </div>
                                                </div>
                                            </label>	
                                        </div>
                                    </div>
                                    <div className="swiper-slide IMPORTANT2">
                                        <div className="package-card">
                                            <input type="radio" className="styled-checkbox" id="package2" name="packages" />
                                            <label htmlFor="package2" title="FiT">
                                                <div className="package-img">
                                                    <img src="img/FiT.jpg" className="img-fluid" alt="FiT Package"/>
                                                    <div className="package-head">
                                                        <h2>FiT</h2><p>150g Protein</p>
                                                        <div><p>Starting from 175 KWD</p></div>
                                                        <div className="read-more-select"><a href="#fitModel" data-fancybox className="button">Read More</a><span className="button select-btn">Select</span></div>
                                                    </div>
                                                </div>
                                            </label>	
                                        </div>
                                    </div>
                                    <div className="swiper-slide IMPORTANT2">
                                        <div className="package-card">
                                            <input type="radio" className="styled-checkbox" id="package3" name="packages" />
                                            <label htmlFor="package3" title="Bulk">
                                                <div className="package-img">
                                                    <img src="img/Bulk.jpg" className="img-fluid" alt="Bulk Package"/>
                                                    <div className="package-head">
                                                        <h2>Bulk</h2><p>200g Protein</p>
                                                        <div><p>Starting from 200 KWD</p></div>
                                                        <div className="read-more-select"><a href="#bulkModel" data-fancybox className="button">Read More</a><span className="button select-btn">Select</span></div>
                                                    </div>
                                                </div>
                                            </label>	
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="package-button-prev swiper-button-prev"></div> */}
                            {/* <div className="package-button-next swiper-button-next"></div> */}
                        </div>
                        <div className="number-of-days">
                            <h3 className="text-center text-transform-none color-black">Select Number of Day(s)</h3>
                            <div className="text-center">
                                <ul className="unstyled days-ul d-inline-block">
                                    <li>
                                        <input type="radio" className="styled-checkbox" id="day30" name="day" />
                                        <label htmlFor="day30" title="25 Days">
                                            <h2>30</h2><p>Days</p>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" className="styled-checkbox" id="day26" name="day" />
                                        <label htmlFor="day26" title="25 Days">
                                            <h2>26</h2><p>Days</p>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" className="styled-checkbox" id="day6" name="day" />
                                        <label htmlFor="day6" title="6 Days">
                                            <h2>6</h2><p>Days</p>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" className="styled-checkbox" id="day1" name="day" />
                                        <label htmlFor="day1" title="25 Days">
                                            <h2>1</h2><p>Day</p>
                                        </label>
                                    </li>
                                </ul>
                            </div>	
                        </div>
                        <div className="meal-snacks-soup">
                            <h3 className="text-center text-transform-none color-black mt-2 mb-2">Select Number of Food Dishes</h3>
                            <div className="row">
                                <div className="col-12">
                                <div className="carousel-dishes">
                                    <div className="dishes-container swiper-container">
                                        <div className="swiper-wrapper" style={{marginBottom:'5px'}}>
                                            <div className="swiper-slide IMPORTANT" >
                                                <div className="dish-box meal-dish">
                                                    <h2><span>Choose Number of</span> Meal(s)</h2>
                                                    <ul className="unstyled dish-ul justify-content-between">
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal0" name="Meal" value="0"/>
                                                            <label htmlFor="meal0"><strong>0</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal1" name="Meal" value="1"/>
                                                            <label htmlFor="meal1"><strong>1</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal2" name="Meal" value="2"/>
                                                            <label htmlFor="meal2"><strong>2</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal3" name="Meal" value="3"/>
                                                            <label htmlFor="meal3"><strong>3</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal4" name="Meal" value="4"/>
                                                            <label htmlFor="meal4"><strong>4</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="meal5" name="Meal" value="5"/>
                                                            <label htmlFor="meal5"><strong>5</strong></label>
                                                        </li>
                                                    </ul>	
                                                </div>
                                            </div>
                                            <div className="swiper-slide IMPORTANT" >
                                                <div className="dish-box snacks-dish">
                                                    <h2><span>Choose Number of</span> Snacks</h2>
                                                    <ul className="unstyled dish-ul justify-content-between">
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks0" name="snacks" value="0"/>
                                                            <label htmlFor="Snacks0"><strong>0</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks1" name="snacks" value="1"/>
                                                            <label htmlFor="Snacks1"><strong>1</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks2" name="snacks" value="2"/>
                                                            <label htmlFor="Snacks2"><strong>2</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks3" name="snacks" value="3"/>
                                                            <label htmlFor="Snacks3"><strong>3</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks4" name="snacks" value="4"/>
                                                            <label htmlFor="Snacks4"><strong>4</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Snacks5" name="snacks" value="5"/>
                                                            <label htmlFor="Snacks5"><strong>5</strong></label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-slide IMPORTANT" >
                                                <div className="dish-box soup-dish">
                                                    <h2><span>Choose Number of</span> Soup(s)</h2>
                                                    <ul className="unstyled dish-ul justify-content-between">
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup0" name="Soup" value="0"/>
                                                            <label htmlFor="Soup0"><strong>0</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup1" name="Soup" value="1"/>
                                                            <label htmlFor="Soup1"><strong>1</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup2" name="Soup" value="2"/>
                                                            <label htmlFor="Soup2"><strong>2</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup3" name="Soup" value="3"/>
                                                            <label htmlFor="Soup3"><strong>3</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup4" name="Soup" value="4"/>
                                                            <label htmlFor="Soup4"><strong>4</strong></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" className="styled-checkbox" id="Soup5" name="Soup" value="5"/>
                                                            <label htmlFor="Soup5"><strong>5</strong></label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="dishes-button-prev swiper-button-prev"></div> */}
                                    {/* <div className="dishes-button-next swiper-button-next"></div> */}
                                </div>
                            </div>		
                                {/* <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="dish-box meal-dish">
                                        <h2><span>Choose Number of</span> Meal(s)</h2>
                                        <ul className="unstyled dish-ul justify-content-between">
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal0" name="Meal" value="0">
                                                <label for="meal0"><strong>0</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal1" name="Meal" value="1">
                                                <label for="meal1"><strong>1</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal2" name="Meal" value="2">
                                                <label for="meal2"><strong>2</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal3" name="Meal" value="3">
                                                <label for="meal3"><strong>3</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal4" name="Meal" value="4">
                                                <label for="meal4"><strong>4</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="meal5" name="Meal" value="5">
                                                <label for="meal5"><strong>5</strong></label>
                                            </li>
                                        </ul>	
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="dish-box snacks-dish">
                                        <h2><span>Choose Number of</span> Snacks</h2>
                                        <ul className="unstyled dish-ul justify-content-between">
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks0" name="snacks" value="0">
                                                <label for="Snacks0"><strong>0</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks1" name="snacks" value="1">
                                                <label for="Snacks1"><strong>1</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks2" name="snacks" value="2">
                                                <label for="Snacks2"><strong>2</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks3" name="snacks" value="3">
                                                <label for="Snacks3"><strong>3</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks4" name="snacks" value="4">
                                                <label for="Snacks4"><strong>4</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Snacks5" name="snacks" value="5">
                                                <label for="Snacks5"><strong>5</strong></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="dish-box soup-dish">
                                        <h2><span>Choose Number of</span> Soup(s)</h2>
                                        <ul className="unstyled dish-ul justify-content-between">
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup0" name="Soup" value="0">
                                                <label for="Soup0"><strong>0</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup1" name="Soup" value="1">
                                                <label for="Soup1"><strong>1</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup2" name="Soup" value="2">
                                                <label for="Soup2"><strong>2</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup3" name="Soup" value="3">
                                                <label for="Soup3"><strong>3</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup4" name="Soup" value="4">
                                                <label for="Soup4"><strong>4</strong></label>
                                            </li>
                                            <li>
                                                <input type="radio" className="styled-checkbox" id="Soup5" name="Soup" value="5">
                                                <label for="Soup5"><strong>5</strong></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="col-g-12 col-md-12 col-sm-12 starting-column">
                                    <div className="text-center starting-box pt-0 border-top-red max-width780">
                                        <div className="summary-div-box">Food Dishes Summary</div>
                                        <div className="starting-sub">
                                            <h4><strong className="mealVal">0</strong> Meals + <strong className="SnakcsVal">0</strong> Snakcs + <strong className="SoupVal">0</strong> Soup</h4>
                                            <p>You selected starting date is <strong>20 September 2021</strong></p>
                                        </div>
                                        <div className="starting-sub">
                                            <h4 className="pt-0"><span>150.000 KWD</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <h3 className="text-transform-none mt-4 text-left value-added-choice"><span>Value added Choice</span></h3>
                        <div className="value-choice">
                            <div className="value-choice-left">
                                <p>Do you want the Friday delivery?</p>
                                <div className="mb-5">
                                    <a href="#" className="button-line mr-3">Yes</a> <a href="#" className="button-line">No</a>
                                </div>
                            </div>
                            <div className="value-choice-right">
                                <p><strong>Note : </strong></p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            </div>	
                        </div>
                        <div className="carousel">
                            <div className="week-container menu-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="sat" name="weekday" /><label htmlFor="sat"><span>Sat</span>25 Sept</label></div>
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="sun" name="weekday" /><label htmlFor="sun"><span>Sun</span>26 Sept</label></div>								
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="mon" name="weekday" /><label htmlFor="mon"><span>Mon</span>27 Sept</label></div>
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="tue" name="weekday" /><label htmlFor="tue"><span>Tue</span>28 Sept</label></div>								
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="wed" name="weekday" /><label htmlFor="wed"><span>Wed</span>29 Sept</label></div>
                                    <div className="swiper-slide WEEK"><input type="radio" className="styled-checkbox" id="thu" name="weekday" /><label htmlFor="thu"><span>Thu</span>30 Sept</label></div>
                                </div>
                            </div>
                            {/* <div className="swiper-button-prev week-button-prev"></div> */}
                            {/* <div className="swiper-button-next week-button-next"></div> */}
                        </div>
                        <div className="row">
                            
                            <div className="col-g-4 col-md-4 col-sm-6 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Select the delivery time</h4>
                                    <ul className="unstyled delivery-time">
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="9am" name="delivery" />
                                            <label htmlFor="9am">
                                                <div>9AM to 1PM</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="2am" name="delivery" />
                                            <label htmlFor="2am">
                                                <div>2PM to 4PM</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="4am" name="delivery" />
                                            <label htmlFor="4am">
                                                <div>4PM to 6PM</div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-g-4 col-md-4 col-sm-6 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Contact on Delivery</h4>
                                    <ul className="unstyled delivery-time">
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="door" name="deliverymethod" />
                                            <label htmlFor="door">
                                                <div>Leave the box at the door</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="bell" name="deliverymethod" />
                                            <label htmlFor="bell">
                                                <div>Ring the bell</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" className="styled-checkbox" id="call" name="deliverymethod" />
                                            <label htmlFor="call">
                                                <div>Call</div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-g-4 col-md-4 col-sm-6 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Dislikes</h4>
                                    <div className="form-group">
                                        <a href="#dislikesModel" className="button" data-fancybox>Choose Dislikes Items</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-g-6 col-md-6 col-sm-6 starting-column">
                                <div className="address-sub-div delivery-address">
                                    <h3 className="text-left">Delivery Address <a href="#newAddressModel" data-fancybox className="button change-btn">Change</a></h3>
                                    <div className="profiledata">
                                        <div className=" ">
                                            <div className="form-group">
                                                <label>Governate</label><p>Mubarak Al-Kabeer</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Area</label><p>Salmiya</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Block</label><p>116</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Street </label><p>Salem Al Mubarak Street</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Judda</label><p>Lorem Ipsum</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Building No</label><p>5</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Floor No</label><p>5</p>
                                            </div>
                                            <div className="form-group">
                                                <label>House No</label><p>2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 starting-column">
                                <div className="starting-box">
                                    <h4 className="text-center">Payment Method</h4>
                                    <p className="text-center">The Fridays will be the off days</p>
                                    <div className="payment-method">
                                        <div className="payment-detail">
                                            <ul className="unstyled">
                                                <li><input type="radio" className="styled-checkbox" id="knet" name="payment" /><label htmlFor="knet" title="K-Net"><img src="img/k-net.png" alt="k net"/></label><div>k net</div></li>
                                                <li><input type="radio" className="styled-checkbox" id="visa" name="payment" /><label htmlFor="visa" title="Credit Card"><img src="img/creditcard.png" alt="Credit Card"/></label><div>Credit Card</div></li>
                                                <li><input type="radio" className="styled-checkbox" id="cash" name="payment" /><label htmlFor="cash" title="Cash on Delivery"><img src="img/cash.png" alt="Cash on Delivery"/></label><div>Cash on Delivery</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-center total-amount">Total: <strong>215.500</strong> KWD</p>
                                    <div className="text-center"><button type="submit" /*onClick="location.href='thank-you.html'"*/ className="button">Pay Now</button></div>
                                </div>	
                            </div>
                        </div>	
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
    <Footer/>
        <div id="sumbatikModel" className="popup-hidden modelbox animated-modal">
            <h2 className="anim1 pt-0">Sumbatik</h2>
            <div className="package-dtl">
                <h3 className="pt-0 anim2">Popular amongst those</h3>
                <p className="anim3">Whose looking for weight lose and get in shape</p>
                <h4 className="anim4">Most popular Meals choice</h4>
                <ul className="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div className="starting-from anim6"><strong>Starting from 150 KWD</strong></div>
            </div>
        </div>
        <div id="fitModel" className="popup-hidden modelbox animated-modal">
            <h2 className="anim1 pt-0">Fit</h2>
            <div className="package-dtl">
                <h3 className="pt-0 anim2">Popular amongst those</h3>
                <p className="anim3">Whose looking for weight lose and get in shape</p>
                <h4 className="anim4">Most popular Meals choice</h4>
                <ul className="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div className="starting-from anim6"><strong>Starting from 175 KWD</strong></div>
            </div>
        </div>
        <div id="bulkModel" className="popup-hidden modelbox animated-modal">
            <h2 className="anim1 pt-0">Bulk</h2>
            <div className="package-dtl">
                <h3 className="pt-0 anim2">Popular amongst those</h3>
                <p className="anim3">Whose looking for weight lose and get in shape</p>
                <h4 className="anim4">Most popular Meals choice</h4>
                <ul className="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div className="starting-from anim6"><strong>Starting from 200 KWD</strong></div>
            </div>
        </div>	
        <div id="dislikesModel" className="popup-hidden modelbox animated-modal">
            <h2 className="anim1 pt-0">Choose Dislikes Items</h2>
            <div className="row">
                <div className="col-12 anim2">
                    <ul className="unstyled checkbox dislikes-items">
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item1" name="dislikes" />
                            <label htmlFor="item1">
                                <div>Pepper</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item2" name="dislikes" />
                            <label htmlFor="item2">
                                <div>Olive oil</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item3" name="dislikes" />
                            <label htmlFor="item3">
                                <div>Vegetable oil</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item4" name="dislikes" />
                            <label htmlFor="item4">
                                <div>Granulated sugar</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item5" name="dislikes" />
                            <label htmlFor="item5">
                                <div>Lentils</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item6" name="dislikes" />
                            <label htmlFor="item6">
                                <div>Split peas</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item7" name="dislikes" />
                            <label htmlFor="item7">
                                <div>Onions</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item8" name="dislikes" />
                            <label htmlFor="item8">
                                <div>Chilly Papper</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item9" name="dislikes" />
                            <label htmlFor="item9">
                                <div>Garlic</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" className="styled-checkbox" id="item10" name="dislikes" />
                            <label htmlFor="item10">
                                <div>Hot sauce</div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="col-12 anim3 pt-2"><button className="button" type="submit">Submit</button></div>
            </div>
        </div>		
        <div id="newAddressModel" className="popup-hidden modelbox animated-modal">
            <h2 className="anim1">Add New Address</h2>
            <div className="row">
                <div className="col-12 anim2">
                    <div className="form-group">
                        <ul className="unstyled">
                            <li className="white">
                                <input className="styled-checkbox" id="a_house" name="addresstype" type="radio" />
                                <label htmlFor="a_house"><span>House</span></label>
                            </li>
                            <li className="black">
                                <input className="styled-checkbox" id="a_aparment" name="addresstype" type="radio" />
                                <label htmlFor="a_aparment"><span>Apartment</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim3">
                    <div className="form-group">
                        <div className="inputbox">
                            <select className="form-control"><option>-- Governate --</option><option>Capital</option>
                                <option>Hawalli</option>
                                <option>Mubarak Al-Kabeer</option>
                                <option>Ahmadi</option>
                                <option>Farwaniya</option>
                                <option>Jahra</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim3">
                    <div className="form-group"><div className="inputbox"><select className="form-control"><option>-- Area --</option>
                        <option value="Al Ahmadi">Al Ahmadi</option><option value="Al Farwaniyah">Al Farwaniyah</option><option value="Al Asimah">Al Asimah</option><option value="Al Jahra">Al Jahra</option><option value="Hawalli">Hawalli</option><option value="Mubarak Al-Kabeer">Mubarak Al-Kabeer</option>
                        </select></div></div>
                </div>	
                <div className="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="Block" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="Street" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim5">	
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="Avenue / Judda" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim5">
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="Building No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim6">	
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="Floor No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim6">
                    <div className="form-group">
                        <div className="inputbox"><input type="text"  placeholder="House No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-12 anim7"><button className="button" type="submit">Submit</button></div>
            </div>
        </div>
    </>
  );
};

export default Package;
