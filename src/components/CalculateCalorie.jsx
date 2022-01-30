import React from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const CalculateCalorie = () => {
  return (
    <>
    <Navbar/>
        <section class="innerpages">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Calculate Calorie</h1>
                    </div>
                    <div class="col-12">
                        <div class="calculate-calorie">
                            <div class="calculate-box">
                                <div class="swiper calculateCalorie">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <h3>What are your Profile of a Muscle Fuel diet?</h3>
                                        <ul class="calorie-profile">
                                            <li>
                                                <label for="Gender">Gender</label>
                                                <div class="select-div"><select class="form-control"><option>-- Gender --</option><option>Male</option><option>Female</option></select></div>
                                            </li>
                                            <li>
                                                <label for="">Height in CM</label>
                                                <div class="form-div"><input type="text" class="form-control" placeholder="Height in CM" id="" name="" value=""/><div class="measurement">CM</div></div>
                                            </li>
                                            <li>
                                                <label for="">Weight in KG</label>
                                                <div class="form-div"><input type="text" class="form-control" placeholder="Weight in KG" id="" name="" value=""/><div class="measurement">KG</div></div>
                                            </li>
                                            <li>
                                                <label for="Birth">Date of Birth</label>
                                                <input type="date" class="form-control" placeholder="DD/MM/YYYY" id="Birth" name="" value=""/>
                                            </li>
                                        </ul>
                                        <div class="mt-2"><button class="button calorie-btn">Continue</button></div>
                                        <div class="info">
                                            <h5 class="p-0">Your BMI is </h5>
                                            <h2 class="p-0">24.9</h2>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <h3>What are your end goals of a Muscle Fuel diet?</h3>
                                        <ul class="unstyled cc-ul">
                                            <li><input type="radio" class="styled-checkbox" id="GainWeight" name="Calorie" value=""/><label for="GainWeight"><div class="cc-div"><span>I want to Gain Weight</span></div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="MaintainWeight" name="Calorie" value=""/><label for="MaintainWeight"><div class="cc-div"><span>I want to Maintain Weight</span></div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="looseWeight" name="Calorie" value=""/><label for="looseWeight"><div class="cc-div"><span>I want to Loose Weight</span></div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="Muscle" name="Calorie" value=""/><label for="Muscle"><div class="cc-div"><span>I want to Gain Muscle</span></div></label></li>
                                        </ul>
                                        <div class="mt-2"><button class="button calorie-btn">Continue</button> <a href="javascript:void(0);" class="button back-btn">Back</a></div>
                                        <div class="info">
                                            <h5>How to identify your goal?</h5>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <h3>Active Level</h3>
                                        <ul class="unstyled active-level cc-ul">
                                            <li><input type="radio" class="styled-checkbox" id="Low" name="ActiveLevel" value=""/><label for="Low"><div class="cc-div">If you are lightly active (light exercise/sports 1-3 days/week)</div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="Moderate" name="ActiveLevel" value=""/><label for="Moderate"><div class="cc-div">If you are moderately active (moderate exercise/sports 3-5 days/week) </div></label></li>
                               
                                            <li><input type="radio" class="styled-checkbox" id="Active" name="ActiveLevel" value=""/><label for="Active"><div class="cc-div">If you are very active (hard exercise/sports 6-7 days a week) </div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="VeryActive" name="ActiveLevel" value=""/><label for="VeryActive"><div class="cc-div">If you are extra active (very hard exercise/sports & physical job or 2x training)</div></label></li>
                                            <li><input type="radio" class="styled-checkbox" id="NotSure" name="ActiveLevel" value=""/><label for="NotSure"><div class="cc-div">Not sure - Everyday is different</div></label></li>
                                        </ul>
                                        <div class="mt-2"><button class="button calorie-btn">Continue</button> <a href="javascript:void(0);" class="button back-btn">Back</a></div>
                                        <div class="info">
                                            <h5>How the being your active makes difference</h5>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <h3>Target Weight</h3>
                                        <p>What is Target Weight? Your current weight is 85 kg</p>
                                        <div class="kg-input">
                                            <div class="form-group"><input type="text" class="form-control" placeholder="Weight" value=""/></div><p>KG</p>
                                        </div>
                                        <div class="mt-2"><button class="button calorie-btn">Continue</button> <a href="javascript:void(0);" class="button back-btn">Back</a></div>
                                        <div class="info">
                                            <h5>How to choose the Target Weight?</h5>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <h3>Personal Detail</h3>
                                        <div class="form-group">
                                            <div class="inputbox"><input type="text" id="" name="" placeholder="Name" class="form-control" /></div>
                                        </div>
                                        <div class="form-group">
                                            <div class="inputbox"><input type="text" id="" name="" placeholder="Mobile" class="form-control" /></div>
                                        </div>
                                        <div class="form-group">
                                            <div class="inputbox"><input type="text" id="" name="" placeholder="Email Address" class="form-control" /></div>
                                        </div>
                                        <div class="form-group">
                                            <div class="inputbox"><input type="password" id="" name="" placeholder="Password" class="form-control" /></div>
                                        </div>
                                        <div class="mt-2"><button class="button calorie-btn">Submit</button> <a href="javascript:void(0);" class="button back-btn">Back</a></div>
                                        {/* <!--<div class="info">
                                            <h5>What is the common loosing weight style?</h5>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                        </div>--> */}
                                    </div>
                                    <div class="swiper-slide">
                                        <h3>Muscle Fuel Recommends </h3>
                                        <div class="package-name">Sumbatik Package</div>
                                        <div class="package-meal">3 Meals + 2 Snack +1 Soup</div>
                                        <p class="recommended-calorie">Your recommended Calorie & Protine /day should</p>
                                        <div class="package-regtangle d-block">
                                            <h4>Total Nutrition Value</h4>
                                            <ul class="package-ul d-flex justify-content-between">
                                                <li>
                                                    <div class="item-box d-flex align-items-center">
                                                        <div class="w-100">
                                                            <p>Calorie</p>
                                                            <h3>104</h3>
                                                        </div>	
                                                    </div>	
                                                </li>
                                                <li>
                                                    <div class="item-box d-flex align-items-center">
                                                        <div class="w-100">
                                                            <p>Fat</p>
                                                            <h3>104</h3>
                                                        </div>	
                                                    </div>	
                                                </li>
                                                <li>
                                                    <div class="item-box d-flex align-items-center">
                                                        <div class="w-100">
                                                            <p>Pro</p>
                                                            <h3>104</h3>
                                                        </div>	
                                                    </div>	
                                                </li>
                                                <li>
                                                    <div class="item-box d-flex align-items-center">
                                                        <div class="w-100">
                                                            <p>Carb</p>
                                                            <h3>104</h3>
                                                        </div>	
                                                    </div>
                                                </li>
                                            </ul>	
                                        </div>
                                        <div class="package-btns">
                                            <a href="thank-you.html" class="button">Continue with this Package</a>
                                            <a href="package.html" class="button">Select my own Package</a>
                                        </div>
                                        <div class="info">
                                            <h5>Note : </h5>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
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
        <Footer/>	
    </>
  );
};

export default CalculateCalorie;
