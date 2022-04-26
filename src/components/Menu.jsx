import {React, useState, useEffect} from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { getMealList, getSnackList, getSoupList } from "../Actions/homeActions";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'MenuSlider',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
        ]
      };

    const dispatch = useDispatch()
    const MealsList = useSelector(state => state.home.MealsList);
    const SnacksList = useSelector(state => state.home.SnacksList);
    const SoupsList = useSelector(state => state.home.SoupsList);

    const [Day, setDay] = useState('6')
    const [Week, setWeek] = useState('1')

    useEffect(() => {
        OnMeals()
        OnSnacks()
        OnSoups()
    }, [Day,Week])

    const onDayChnage=(e)=>{
        setDay(e.target.value)
    }

    const OnMeals = () =>{
        var formData = new FormData()
    
        formData.append('lang_id',1)
        formData.append('package_id',localStorage.getItem('P_ID')||24)
        formData.append('mealtype_id',1)
        formData.append('days_master_id',Day)
        formData.append('week_id',Week)

     dispatch(getMealList(formData))
    }

    const OnSnacks = () =>{
        var formData = new FormData()
    
        formData.append('lang_id',1)
        formData.append('package_id',localStorage.getItem('P_ID')||24)
        formData.append('mealtype_id',3)
        formData.append('days_master_id',Day)
        formData.append('week_id',Week)

     dispatch(getSnackList(formData))
    }

    const OnSoups = () =>{
        var formData = new FormData()
    
        formData.append('lang_id',1)
        formData.append('package_id',localStorage.getItem('P_ID')||24)
        formData.append('mealtype_id',11)
        formData.append('days_master_id',Day)
        formData.append('week_id',Week)

     dispatch(getSoupList(formData))
    }
    
    console.log('Day',Day);
    console.log('Week',Week);
   
  return (
    <>
     <Navbar/>
       <section className="innerpages">
            <div class="container">
                <div class="row">
                    {/* <!--<div class="col-12">
                        <h1 class="text-center">Sumbatik</h1>
                    </div>--> */}
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="text-center WEEK_DAYS">
                            <a onClick={()=>setWeek('1')} href="javascript:void(0);" className={Week=='1'?"Week_active":''}>Week 1</a>
                            <a onClick={()=>setWeek('2')} href="javascript:void(0);" className={Week=='2'?"Week_active":''}>Week 2</a>
                        </div>
                            <div class="carousel mb-3" style={{display:'flex',justifyContent:'center'}}>
                                <div class="week-container menu-container">
                                <div class="swiper-wrapper" id="swiper-wrapper-8c6687c48deb9a54" aria-live="polite">
                                    <div class="swiper-slide" role="group" aria-label="1 / 6" style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="sat" name="weekday" checked={Day=='6'?true:false}  value="6"/>
                                        <label for="sat">Sat</label>
                                    </div>
                                    <div class="swiper-slide" role="group" aria-label="2 / 6"  style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="sun" name="weekday" checked={Day=='7'?true:false} value="7"/>
                                        <label for="sun">Sun</label>
                                    </div>								
                                    <div class="swiper-slide" role="group" aria-label="3 / 6"  style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="mon" name="weekday" checked={Day=='1'?true:false} value="1"/>
                                        <label for="mon">Mon</label>
                                    </div>
                                    <div class="swiper-slide" role="group" aria-label="4 / 6"  style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="tue" name="weekday" checked={Day=='2'?true:false} value="2"/>
                                        <label for="tue">Tue</label>
                                    </div>								
                                    <div class="swiper-slide" role="group" aria-label="5 / 6"  style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="wed" name="weekday" checked={Day=='3'?true:false} value="3"/>
                                        <label for="wed">Wed</label>
                                    </div>
                                    <div class="swiper-slide" role="group" aria-label="6 / 6"  style={{width: '176.667px', marginRight: '10px'}}>
                                        <input onChange={onDayChnage} type="radio" class="styled-checkbox" id="thu" name="weekday" checked={Day=='4'?true:false} value="4"/>
                                        <label for="thu">Thu</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>MEALS</h1></div>
                                {MealsList?MealsList.map((meal,index)=>(
                                    <div class="col-lg-3 col-md-3 col-sm-3 dish-column">
                                        <div class="menu-dish-box MEAL_CARD">
                                            <div className="image">
                                                <img src={meal.meal_image.url} alt="" />
                                            </div>
                                            <div className="mealInfo">
                                                <h5>{meal.meal_name}</h5>
                                            </div>
                                        </div>	
                                    </div>
                                )):null}
                                
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>SNACKS</h1></div>
                                    {SnacksList?SnacksList.map((soup,index)=>(
                                        <div class="col-lg-3 col-md-3 col-sm-3 dish-column">
                                            <div class="menu-dish-box MEAL_CARD">
                                                <div className="image">
                                                    <img src={soup.meal_image.url} alt="" />
                                                </div>
                                                <div className="mealInfo">
                                                    <h5>{soup.meal_name}</h5>
                                                </div>
                                            </div>	
                                        </div>
                                    )):null}
                             
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 dish-title"><h1>SOUPS</h1></div>
                                    {SoupsList?SoupsList.map((soup,index)=>(
                                        <div class="col-lg-3 col-md-3 col-sm-3 dish-column">
                                            <div class="menu-dish-box MEAL_CARD">
                                                <div className="image">
                                                    <img src={soup.meal_image.url} alt="" />
                                                </div>
                                                <div className="mealInfo">
                                                    <h5>{soup.meal_name}</h5>
                                                </div>
                                            </div>	
                                        </div>
                                    )):null}
                                    
                        </div>
                    </div>
                </div>
            </div>
       </section>
        <Footer/>
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
    </>
  );
};

export default Menu;
