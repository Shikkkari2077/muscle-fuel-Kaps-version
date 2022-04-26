import React from 'react'
import { Link } from 'react-router-dom'


const MainBanner = () => {
  return (
    <section class="section banner-main H_SEC_Banner fp-section active fp-table fp-completely" id="section0"
        data-fp-styles={{opacity: '1'}}
        data-anchor="Homepage">
        <div class="fp-tableCell" >
            <div class="page-div welcomeContainer">
                <div class="page-sub">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 BannerText">
                                <h2>Healthy Eating,<br /><span>Simplified.</span></h2>
                                <p>Get customized, pre-cooked meals developed<br/> by a nutrition expert and delivered daily</p>
                                <div class="banner-btns">
                                    <Link to="/package" class="button">Subscribe Today</Link>
                                    <Link to="/calculate-calorie" class="button">Howmany Calories do you need?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-buttons">
                    <div class="container d-flex justo-content-between justify-content-between">
                        <a href="javascript:void(0);">ADJUST CALORIES ON EACH MEAL</a>
                        <a href="javascript:void(0);">BASED ON HEALTH GOALS</a>
                        <a href="javascript:void(0);">HUNDREDS OF MEAL OPTIONS</a>
			        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainBanner