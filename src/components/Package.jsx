import React from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const Package = () => {
  return (
    <>
    <Navbar/>
       
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="package-box">
                            <div class="select-package-carousel">
                                <h3 class="text-center text-transform-none color-black">Select a Package</h3>
                                <div class="package-container swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <input type="radio" class="styled-checkbox" id="package1" name="packages" value=""/>
                                                <label for="package1" title="Sumbatik">
                                                    <div class="package-img">
                                                        <img src="img/sumbatik.jpg" class="img-fluid" alt="Sumbatik Package"/>
                                                        <div class="package-head">
                                                            <h2>Sumbatik</h2><p>100g Protein</p>
                                                            <div><p>Starting from 150 KWD</p></div>
                                                            <div class="read-more-select"><a href="#sumbatikModel" data-fancybox class="button">Read More</a><span class="button select-btn">Select</span></div>
                                                        </div>
                                                    </div>
                                                </label>	
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <input type="radio" class="styled-checkbox" id="package2" name="packages" value=""/>
                                                <label for="package2" title="FiT">
                                                    <div class="package-img">
                                                        <img src="img/FiT.jpg" class="img-fluid" alt="FiT Package"/>
                                                        <div class="package-head">
                                                            <h2>FiT</h2><p>150g Protein</p>
                                                            <div><p>Starting from 175 KWD</p></div>
                                                            <div class="read-more-select"><a href="#fitModel" data-fancybox class="button">Read More</a><span class="button select-btn">Select</span></div>
                                                        </div>
                                                    </div>
                                                </label>	
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="package-card">
                                                <input type="radio" class="styled-checkbox" id="package3" name="packages" value=""/>
                                                <label for="package3" title="Bulk">
                                                    <div class="package-img">
                                                        <img src="img/Bulk.jpg" class="img-fluid" alt="Bulk Package"/>
                                                        <div class="package-head">
                                                            <h2>Bulk</h2><p>200g Protein</p>
                                                            <div><p>Starting from 200 KWD</p></div>
                                                            <div class="read-more-select"><a href="#bulkModel" data-fancybox class="button">Read More</a><span class="button select-btn">Select</span></div>
                                                        </div>
                                                    </div>
                                                </label>	
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="package-button-prev swiper-button-prev"></div>
                                <div class="package-button-next swiper-button-next"></div>
                            </div>
                            <div class="number-of-days">
                                <h3 class="text-center text-transform-none color-black">Select Number of Day(s)</h3>
                                <div class="text-center">
                                    <ul class="unstyled days-ul d-inline-block">
                                        <li>
                                            <input type="radio" class="styled-checkbox" id="day30" name="day" value=""/>
                                            <label for="day30" title="25 Days">
                                                <h2>30</h2><p>Days</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" class="styled-checkbox" id="day26" name="day" value=""/>
                                            <label for="day26" title="25 Days">
                                                <h2>26</h2><p>Days</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" class="styled-checkbox" id="day6" name="day" value=""/>
                                            <label for="day6" title="6 Days">
                                                <h2>6</h2><p>Days</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" class="styled-checkbox" id="day1" name="day" value=""/>
                                            <label for="day1" title="25 Days">
                                                <h2>1</h2><p>Day</p>
                                            </label>
                                        </li>
                                    </ul>
                                </div>	
                            </div>
                            <div class="meal-snacks-soup">
                                <h3 class="text-center text-transform-none color-black mt-2 mb-2">Select Number of Food Dishes</h3>
                                <div class="row">
                                    <div class="col-12">
                                    <div class="carousel-dishes">
                                        <div class="dishes-container swiper-container">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="dish-box meal-dish">
                                                        <h2><span>Choose Number of</span> Meal(s)</h2>
                                                        <ul class="unstyled dish-ul justify-content-between">
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal0" name="Meal" value="0"/>
                                                                <label for="meal0"><strong>0</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal1" name="Meal" value="1"/>
                                                                <label for="meal1"><strong>1</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal2" name="Meal" value="2"/>
                                                                <label for="meal2"><strong>2</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal3" name="Meal" value="3"/>
                                                                <label for="meal3"><strong>3</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal4" name="Meal" value="4"/>
                                                                <label for="meal4"><strong>4</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="meal5" name="Meal" value="5"/>
                                                                <label for="meal5"><strong>5</strong></label>
                                                            </li>
                                                        </ul>	
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="dish-box snacks-dish">
                                                        <h2><span>Choose Number of</span> Snacks</h2>
                                                        <ul class="unstyled dish-ul justify-content-between">
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks0" name="snacks" value="0"/>
                                                                <label for="Snacks0"><strong>0</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks1" name="snacks" value="1"/>
                                                                <label for="Snacks1"><strong>1</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks2" name="snacks" value="2"/>
                                                                <label for="Snacks2"><strong>2</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks3" name="snacks" value="3"/>
                                                                <label for="Snacks3"><strong>3</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks4" name="snacks" value="4"/>
                                                                <label for="Snacks4"><strong>4</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Snacks5" name="snacks" value="5"/>
                                                                <label for="Snacks5"><strong>5</strong></label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="dish-box soup-dish">
                                                        <h2><span>Choose Number of</span> Soup(s)</h2>
                                                        <ul class="unstyled dish-ul justify-content-between">
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup0" name="Soup" value="0"/>
                                                                <label for="Soup0"><strong>0</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup1" name="Soup" value="1"/>
                                                                <label for="Soup1"><strong>1</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup2" name="Soup" value="2"/>
                                                                <label for="Soup2"><strong>2</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup3" name="Soup" value="3"/>
                                                                <label for="Soup3"><strong>3</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup4" name="Soup" value="4"/>
                                                                <label for="Soup4"><strong>4</strong></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" class="styled-checkbox" id="Soup5" name="Soup" value="5"/>
                                                                <label for="Soup5"><strong>5</strong></label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dishes-button-prev swiper-button-prev"></div>
                                        <div class="dishes-button-next swiper-button-next"></div>
                                    </div>
                                </div>		
                                    {/* <div class="col-lg-4 col-md-4 col-sm-4">
                                        <div class="dish-box meal-dish">
                                            <h2><span>Choose Number of</span> Meal(s)</h2>
                                            <ul class="unstyled dish-ul justify-content-between">
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal0" name="Meal" value="0">
                                                    <label for="meal0"><strong>0</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal1" name="Meal" value="1">
                                                    <label for="meal1"><strong>1</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal2" name="Meal" value="2">
                                                    <label for="meal2"><strong>2</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal3" name="Meal" value="3">
                                                    <label for="meal3"><strong>3</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal4" name="Meal" value="4">
                                                    <label for="meal4"><strong>4</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="meal5" name="Meal" value="5">
                                                    <label for="meal5"><strong>5</strong></label>
                                                </li>
                                            </ul>	
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4">
                                        <div class="dish-box snacks-dish">
                                            <h2><span>Choose Number of</span> Snacks</h2>
                                            <ul class="unstyled dish-ul justify-content-between">
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks0" name="snacks" value="0">
                                                    <label for="Snacks0"><strong>0</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks1" name="snacks" value="1">
                                                    <label for="Snacks1"><strong>1</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks2" name="snacks" value="2">
                                                    <label for="Snacks2"><strong>2</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks3" name="snacks" value="3">
                                                    <label for="Snacks3"><strong>3</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks4" name="snacks" value="4">
                                                    <label for="Snacks4"><strong>4</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Snacks5" name="snacks" value="5">
                                                    <label for="Snacks5"><strong>5</strong></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4">
                                        <div class="dish-box soup-dish">
                                            <h2><span>Choose Number of</span> Soup(s)</h2>
                                            <ul class="unstyled dish-ul justify-content-between">
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup0" name="Soup" value="0">
                                                    <label for="Soup0"><strong>0</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup1" name="Soup" value="1">
                                                    <label for="Soup1"><strong>1</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup2" name="Soup" value="2">
                                                    <label for="Soup2"><strong>2</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup3" name="Soup" value="3">
                                                    <label for="Soup3"><strong>3</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup4" name="Soup" value="4">
                                                    <label for="Soup4"><strong>4</strong></label>
                                                </li>
                                                <li>
                                                    <input type="radio" class="styled-checkbox" id="Soup5" name="Soup" value="5">
                                                    <label for="Soup5"><strong>5</strong></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div class="col-g-12 col-md-12 col-sm-12 starting-column">
                                        <div class="text-center starting-box pt-0 border-top-red max-width780">
                                            <div class="summary-div-box">Food Dishes Summary</div>
                                            <div class="starting-sub">
                                                <h4><strong class="mealVal">0</strong> Meals + <strong class="SnakcsVal">0</strong> Snakcs + <strong class="SoupVal">0</strong> Soup</h4>
                                                <p>You selected starting date is <strong>20 September 2021</strong></p>
                                            </div>
                                            <div class="starting-sub">
                                                <h4 class="pt-0"><span>150.000 KWD</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	
                            <h3 class="text-transform-none mt-4 text-left value-added-choice"><span>Value added Choice</span></h3>
                            <div class="value-choice">
                                <div class="value-choice-left">
                                    <p>Do you want the Friday delivery?</p>
                                    <div class="mb-5">
                                        <a href="javascript:void(0);" class="button-line mr-3">Yes</a> <a href="javascript:void(0);" class="button-line">No</a>
                                    </div>
                                </div>
                                <div class="value-choice-right">
                                    <p><strong>Note : </strong></p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                </div>	
                            </div>
                            <div class="carousel">
                                <div class="week-container menu-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="sat" name="weekday" value=""/><label for="sat"><span>Sat</span>25 Sept</label></div>
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="sun" name="weekday" value=""/><label for="sun"><span>Sun</span>26 Sept</label></div>								
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="mon" name="weekday" value=""/><label for="mon"><span>Mon</span>27 Sept</label></div>
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="tue" name="weekday" value=""/><label for="tue"><span>Tue</span>28 Sept</label></div>								
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="wed" name="weekday" value=""/><label for="wed"><span>Wed</span>29 Sept</label></div>
                                        <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="thu" name="weekday" value=""/><label for="thu"><span>Thu</span>30 Sept</label></div>
                                    </div>
                                </div>
                                <div class="swiper-button-prev week-button-prev"></div>
                                <div class="swiper-button-next week-button-next"></div>
                            </div>
                            <div class="row">
                                
                                <div class="col-g-4 col-md-4 col-sm-6 starting-column">
                                    <div class="text-center starting-box">
                                        <h4>Select the delivery time</h4>
                                        <ul class="unstyled delivery-time">
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="9am" name="delivery" value=""/>
                                                <label for="9am">
                                                    <div>9AM to 1PM</div>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="2am" name="delivery" value=""/>
                                                <label for="2am">
                                                    <div>2PM to 4PM</div>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="4am" name="delivery" value=""/>
                                                <label for="4am">
                                                    <div>4PM to 6PM</div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-g-4 col-md-4 col-sm-6 starting-column">
                                    <div class="text-center starting-box">
                                        <h4>Contact on Delivery</h4>
                                        <ul class="unstyled delivery-time">
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="door" name="deliverymethod" value=""/>
                                                <label for="door">
                                                    <div>Leave the box at the door</div>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="bell" name="deliverymethod" value=""/>
                                                <label for="bell">
                                                    <div>Ring the bell</div>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" class="styled-checkbox" id="call" name="deliverymethod" value=""/>
                                                <label for="call">
                                                    <div>Call</div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-g-4 col-md-4 col-sm-6 starting-column">
                                    <div class="text-center starting-box">
                                        <h4>Dislikes</h4>
                                        <div class="form-group">
                                            <a href="#dislikesModel" class="button" data-fancybox>Choose Dislikes Items</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-g-6 col-md-6 col-sm-6 starting-column">
                                    <div class="address-sub-div delivery-address">
                                        <h3 class="text-left">Delivery Address <a href="#newAddressModel" data-fancybox class="button change-btn">Change</a></h3>
                                        <div class="profiledata">
                                            <div class=" ">
                                                <div class="form-group">
                                                    <label>Governate</label><p>Mubarak Al-Kabeer</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Area</label><p>Salmiya</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Block</label><p>116</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Street </label><p>Salem Al Mubarak Street</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Judda</label><p>Lorem Ipsum</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Building No</label><p>5</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>Floor No</label><p>5</p>
                                                </div>
                                                <div class="form-group">
                                                    <label>House No</label><p>2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 starting-column">
                                    <div class="starting-box">
                                        <h4 class="text-center">Payment Method</h4>
                                        <p class="text-center">The Fridays will be the off days</p>
                                        <div class="payment-method">
                                            <div class="payment-detail">
                                                <ul class="unstyled">
                                                    <li><input type="radio" class="styled-checkbox" id="knet" name="payment" value=""/><label for="knet" title="K-Net"><img src="img/k-net.png" alt="k net"/></label><div>k net</div></li>
                                                    <li><input type="radio" class="styled-checkbox" id="visa" name="payment" value=""/><label for="visa" title="Credit Card"><img src="img/creditcard.png" alt="Credit Card"/></label><div>Credit Card</div></li>
                                                    <li><input type="radio" class="styled-checkbox" id="cash" name="payment" value=""/><label for="cash" title="Cash on Delivery"><img src="img/cash.png" alt="Cash on Delivery"/></label><div>Cash on Delivery</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="text-center total-amount">Total: <strong>215.500</strong> KWD</p>
                                        <div class="text-center"><button type="submit" onClick="location.href='thank-you.html'" class="button">Pay Now</button></div>
                                    </div>	
                                </div>
                            </div>	
                        </div>
                        
                        
                    </div>
                </div>
            </div>
    
        <div id="sumbatikModel" class="popup-hidden modelbox animated-modal">
            <h2 class="anim1 pt-0">Sumbatik</h2>
            <div class="package-dtl">
                <h3 class="pt-0 anim2">Popular amongst those</h3>
                <p class="anim3">Whose looking for weight lose and get in shape</p>
                <h4 class="anim4">Most popular Meals choice</h4>
                <ul class="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div class="starting-from anim6"><strong>Starting from 150 KWD</strong></div>
            </div>
        </div>
        <div id="fitModel" class="popup-hidden modelbox animated-modal">
            <h2 class="anim1 pt-0">Fit</h2>
            <div class="package-dtl">
                <h3 class="pt-0 anim2">Popular amongst those</h3>
                <p class="anim3">Whose looking for weight lose and get in shape</p>
                <h4 class="anim4">Most popular Meals choice</h4>
                <ul class="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div class="starting-from anim6"><strong>Starting from 175 KWD</strong></div>
            </div>
        </div>
        <div id="bulkModel" class="popup-hidden modelbox animated-modal">
            <h2 class="anim1 pt-0">Bulk</h2>
            <div class="package-dtl">
                <h3 class="pt-0 anim2">Popular amongst those</h3>
                <p class="anim3">Whose looking for weight lose and get in shape</p>
                <h4 class="anim4">Most popular Meals choice</h4>
                <ul class="anim5">
                    <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                    <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                    <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                </ul>
                <div class="starting-from anim6"><strong>Starting from 200 KWD</strong></div>
            </div>
        </div>	
        <div id="dislikesModel" class="popup-hidden modelbox animated-modal">
            <h2 class="anim1 pt-0">Choose Dislikes Items</h2>
            <div class="row">
                <div class="col-12 anim2">
                    <ul class="unstyled checkbox dislikes-items">
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item1" name="dislikes" value=""/>
                            <label for="item1">
                                <div>Pepper</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item2" name="dislikes" value=""/>
                            <label for="item2">
                                <div>Olive oil</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item3" name="dislikes" value=""/>
                            <label for="item3">
                                <div>Vegetable oil</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item4" name="dislikes" value=""/>
                            <label for="item4">
                                <div>Granulated sugar</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item5" name="dislikes" value=""/>
                            <label for="item5">
                                <div>Lentils</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item6" name="dislikes" value=""/>
                            <label for="item6">
                                <div>Split peas</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item7" name="dislikes" value=""/>
                            <label for="item7">
                                <div>Onions</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item8" name="dislikes" value=""/>
                            <label for="item8">
                                <div>Chilly Papper</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item9" name="dislikes" value=""/>
                            <label for="item9">
                                <div>Garlic</div>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" class="styled-checkbox" id="item10" name="dislikes" value=""/>
                            <label for="item10">
                                <div>Hot sauce</div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="col-12 anim3 pt-2"><button class="button" type="submit">Submit</button></div>
            </div>
        </div>		
        <div id="newAddressModel" class="popup-hidden modelbox animated-modal">
            <h2 class="anim1">Add New Address</h2>
            <div class="row">
                <div class="col-12 anim2">
                    <div class="form-group">
                        <ul class="unstyled">
                            <li class="white">
                                <input class="styled-checkbox" id="a_house" name="addresstype" type="radio" value=""/>
                                <label for="a_house"><span>House</span></label>
                            </li>
                            <li class="black">
                                <input class="styled-checkbox" id="a_aparment" name="addresstype" type="radio" value=""/>
                                <label for="a_aparment"><span>Apartment</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim3">
                    <div class="form-group">
                        <div class="inputbox">
                            <select class="form-control"><option>-- Governate --</option><option>Capital</option>
                                <option>Hawalli</option>
                                <option>Mubarak Al-Kabeer</option>
                                <option>Ahmadi</option>
                                <option>Farwaniya</option>
                                <option>Jahra</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim3">
                    <div class="form-group"><div class="inputbox"><select class="form-control"><option>-- Area --</option>
                        <option value="Al Ahmadi">Al Ahmadi</option><option value="Al Farwaniyah">Al Farwaniyah</option><option value="Al Asimah">Al Asimah</option><option value="Al Jahra">Al Jahra</option><option value="Hawalli">Hawalli</option><option value="Mubarak Al-Kabeer">Mubarak Al-Kabeer</option>
                        </select></div></div>
                </div>	
                <div class="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="Block" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="Street" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim5">	
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="Avenue / Judda" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim5">
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="Building No" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim6">	
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="Floor No" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 anim6">
                    <div class="form-group">
                        <div class="inputbox"><input type="text" value="" placeholder="House No" class="form-control"/></div>
                    </div>
                </div>
                <div class="col-12 anim7"><button class="button" type="submit">Submit</button></div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default Package;
