import React from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'


const Menu = () => {
  return (
    <>
     <Navbar/>
      
        <div class="container">
            <div class="row">
                {/* <!--<div class="col-12">
                    <h1 class="text-center">Sumbatik</h1>
                </div>--> */}
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="text-center week-days">
                        <a href="javascript:void(0);" class="active">Week 1</a><a href="javascript:void(0);">Week 2</a>
                    </div>
                        <div class="carousel mb-3">
                            <div class="week-container menu-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="sat" name="weekday" checked value=""/><label for="sat">Sat</label></div>
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="sun" name="weekday" value=""/><label for="sun">Sun</label></div>								
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="mon" name="weekday" value=""/><label for="mon">Mon</label></div>
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="tue" name="weekday" value=""/><label for="tue">Tue</label></div>								
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="wed" name="weekday" value=""/><label for="wed">Wed</label></div>
                                    <div class="swiper-slide"><input type="radio" class="styled-checkbox" id="thu" name="weekday" value=""/><label for="thu">Thu</label></div>
                                </div>
                            </div>
                            <div class="swiper-button-prev week-button-prev"></div>
                            <div class="swiper-button-next week-button-next"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>MEAL(S)</h1></div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch1.jpg"><img src="img/lunch1.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title One</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch2.jpg"><img src="img/lunch2.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Two</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch3.jpg"><img src="img/lunch3.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Three</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch4.jpg"><img src="img/lunch4.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Four</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch4.jpg"><img src="img/lunch5.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Five</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch4.jpg"><img src="img/lunch6.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Six</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch4.jpg"><img src="img/lunch7.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Seven</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/lunch4.jpg"><img src="img/lunch8.jpg" class="w-100" alt="meals"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Meal Title Eight</h2> 
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>SNACKS</h1></div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/blog_01-1150x720.jpg"><img src="img/blog_01-1150x720.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title One</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/03_menu_balanced.jpg"><img src="img/03_menu_balanced.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title Two</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/01_menu_slimming.jpg"><img src="img/01_menu_slimming.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title Three</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/02_menu_muscle.jpg"><img src="img/02_menu_muscle.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title Four</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/breakfast.jpg"><img src="img/breakfast.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title Five</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/breakfast2.jpg"><img src="img/breakfast2.jpg" class="w-100" alt="Snacks"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Snacks Title Six</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            
                            
                            <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>SOUP(S)</h1></div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/soup1.jpg"><img src="img/soup1.jpg" class="w-100" alt="Soup"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Soup Title Five</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/soup2.jpg"><img src="img/soup2.jpg" class="w-100" alt="Soup"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Soup Title One</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/soup3.jpg"><img src="img/soup3.jpg" class="w-100" alt="Soup"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Soup Title Three</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishOne">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 dish-column">
                                <div class="menu-dish-box">
                                    <div class="dish-holder">
                                        <div class="dish-img-holder" data-fancybox data-src="img/soup4.jpg"><img src="img/soup4.jpg" class="w-100" alt="Soup"/></div>
                                    </div>
                                    <div class="menu-dish-detail">
                                        <h2>Soup Title Four</h2>
                                        <p class="pb-0"><strong>Ingredients:</strong></p>
                                        <p class="menu-dish-para">garlic, onion, tomato, bell pepper, carrot, scallion, potato, ginger, red onion, celery</p>
                                        <div class="apnt-btn"><a href="javascript:void(0);" class="button" data-fancybox data-src="#lunchDishTwo">Read More</a></div>
                                    </div>
                                </div>	
                            </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div id="lunchDishOne" class="popup-hidden modelbox dish-popup animated-modal">
            <h2 class="anim1 pt-0">Meal Title One</h2>
            <div class="package-dtl">
                <h3 class="pt-0 anim2">Ingredients</h3>
                <ul class="ingredients-div anim3">
                    <li>garlic</li>
                    <li>onion</li>			
                    <li>tomato</li>
                    <li>bell pepper</li>
                    <li>carrot</li>
                    <li>scallion</li>
                    <li>potato</li>
                    <li>ginger</li>
                    <li>red onion</li>
                    <li>celery</li>
                </ul>
            </div>
        </div>
        <div id="lunchDishTwo" class="popup-hidden modelbox dish-popup animated-modal">
            <h2 class="anim1 pt-0">Meal Title Two</h2>
            <div class="package-dtl">
                <h3 class="pt-0 anim2">Ingredients</h3>
                <ul class="ingredients-div anim3">
                    <li>garlic</li>
                    <li>onion</li>			
                    <li>tomato</li>
                    <li>bell pepper</li>
                    <li>carrot</li>
                    <li>scallion</li>
                    <li>potato</li>
                    <li>ginger</li>
                    <li>red onion</li>
                    <li>celery</li>
                </ul>
            </div>
        </div>	
        <Footer/>	
    </>
  );
};

export default Menu;
