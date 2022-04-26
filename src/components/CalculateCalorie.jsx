import {React, useState, useEffect} from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const CalculateCalorie = () => {
    const [USER_ID] = useState(localStorage.getItem('user_id'));
    const [toggle, setToggle] = useState(1)
    const [data, setData] = useState({
        gender:'',
        height:null,
        weight:null,
        dob:'',
    })

    useEffect(() => {
        if(data.gender && data.height && data.weight && data.dob){
            Calculate()
            console.log('TRRIGGER');
        }
    }, [data.dob, data.gender, data.height, data.weight])

    const [BMR, setBMR] = useState('No Data Yet!')

    const [Age, setAge] = useState(0)

    const handleChange =(e)=>{
        const { name, value } = e.target;

        setData({
        ...data,
        [name]: value,
        });
    }

    const Calculate =()=>{
        var currentYear = new Date().getFullYear()
        var date = data.dob.slice(0,4)
        var AGE = currentYear-date
  
        if(data.gender=='male'){
            var bmr = 10*data.weight + 6.25*data.height - 5*AGE + 5
            setBMR(bmr)
        }else{
            var bmr = 10*data.weight + 6.25*data.height - 5*AGE - 161
            setBMR(bmr)
        }

        console.log('AGE',AGE);
    }   

  return (
    <>
    <Navbar/>
        <section className="innerpages">
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

                                    {toggle==1? <form  class="swiper-slide">
                                            <h3>What are your Profile of a Muscle Fuel diet?</h3>
                                            <ul class="calorie-profile">
                                                <li>
                                                    <label for="Gender">Gender</label>
                                                    <div class="select-div">
                                                        <select name='gender' required class="form-control" value={data.gender} onChange={handleChange}>
                                                            <option value=''>-- Gender --</option>
                                                            <option value='male'>Male</option>
                                                            <option value='female'>Female</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label for="">Height in CM</label>
                                                    <div class="form-div"><input required type="text" class="form-control" placeholder="Height in CM" id="" onChange={handleChange} name="height" value={data.height} /><div class="measurement">CM</div></div>
                                                </li>
                                                <li>
                                                    <label for="">Weight in KG</label>
                                                    <div class="form-div"><input required type="text" class="form-control" placeholder="Weight in KG" id="" onChange={handleChange} name="weight" value={data.weight} /><div class="measurement">KG</div></div>
                                                </li>
                                                <li>
                                                    <label for="Birth">Date of Birth</label>
                                                    <input required type="date" class="form-control" placeholder="DD/MM/YYYY" id="Birth" onChange={handleChange} name="dob" value={data.dob}/>
                                                </li>
                                            </ul>
                                            {/* <div class="mt-2">
                                                <button onClick={()=>setToggle(2)} type="submit" class="button calorie-btn">Continue</button>
                                            </div> */}
                                            <div class="info">
                                                <h5 class="p-0">Your BMR is </h5>
                                                <h2 class="p-0">{BMR}</h2>
                                            </div>
                                        </form>:null}
                                        {toggle==2?<div class="swiper-slide">
                                            <h3>What are your end goals of a Muscle Fuel diet?</h3>
                                            <ul class="unstyled cc-ul">
                                                <li><input type="radio" class="styled-checkbox" id="GainWeight" name="Calorie" value=""/><label for="GainWeight"><div class="cc-div"><span>I want to Gain Weight</span></div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="MaintainWeight" name="Calorie" value=""/><label for="MaintainWeight"><div class="cc-div"><span>I want to Maintain Weight</span></div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="looseWeight" name="Calorie" value=""/><label for="looseWeight"><div class="cc-div"><span>I want to Loose Weight</span></div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="Muscle" name="Calorie" value=""/><label for="Muscle"><div class="cc-div"><span>I want to Gain Muscle</span></div></label></li>
                                            </ul>
                                            <div class="mt-2"><button onClick={()=>setToggle(3)} class="button calorie-btn">Continue</button> <a  onClick={()=>setToggle(1)} href="javascript:void(0);" class="button back-btn">Back</a></div>
                                            <div class="info">
                                                <h5>How to identify your goal?</h5>
                                                <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                            </div>
                                        </div>:null}
                                        {toggle==3? <div class="swiper-slide">
                                            <h3>Active Level</h3>
                                            <ul class="unstyled active-level cc-ul">
                                                <li><input type="radio" class="styled-checkbox" id="Low" name="ActiveLevel" value=""/><label for="Low"><div class="cc-div">If you are lightly active (light exercise/sports 1-3 days/week)</div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="Moderate" name="ActiveLevel" value=""/><label for="Moderate"><div class="cc-div">If you are moderately active (moderate exercise/sports 3-5 days/week) </div></label></li>
                                
                                                <li><input type="radio" class="styled-checkbox" id="Active" name="ActiveLevel" value=""/><label for="Active"><div class="cc-div">If you are very active (hard exercise/sports 6-7 days a week) </div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="VeryActive" name="ActiveLevel" value=""/><label for="VeryActive"><div class="cc-div">If you are extra active (very hard exercise/sports & physical job or 2x training)</div></label></li>
                                                <li><input type="radio" class="styled-checkbox" id="NotSure" name="ActiveLevel" value=""/><label for="NotSure"><div class="cc-div">Not sure - Everyday is different</div></label></li>
                                            </ul>
                                            <div class="mt-2"><button onClick={()=>setToggle(4)} class="button calorie-btn">Continue</button> <a onClick={()=>setToggle(2)} href="javascript:void(0);" class="button back-btn">Back</a></div>
                                            <div class="info">
                                                <h5>How the being your active makes difference</h5>
                                                <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                            </div>
                                        </div>:null}
                                        {toggle==4?<div class="swiper-slide">
                                            <h3>Target Weight</h3>
                                            <p>What is Target Weight? Your current weight is 85 kg</p>
                                            <div class="kg-input">
                                                <div class="form-group"><input type="text" class="form-control" placeholder="Weight" value=""/></div><p>KG</p>
                                            </div>
                                            <div class="mt-2"><button onClick={()=>setToggle(5)} class="button calorie-btn">Continue</button> <a onClick={()=>setToggle(3)} href="javascript:void(0);" class="button back-btn">Back</a></div>
                                            <div class="info">
                                                <h5>How to choose the Target Weight?</h5>
                                                <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                            </div>
                                        </div>:null}
                                        {toggle==5&&!USER_ID?<div class="swiper-slide">
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
                                            <div class="mt-2"><button onClick={()=>setToggle(6)} class="button calorie-btn">Submit</button> <a onClick={()=>setToggle(4)} href="javascript:void(0);" class="button back-btn">Back</a></div>
                                            {/* <!--<div class="info">
                                                <h5>What is the common loosing weight style?</h5>
                                                <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs.</p>
                                            </div>--> */}
                                        </div>:null}
                                        {toggle==(USER_ID?5:6)?<div class="swiper-slide">
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
                                            <div class="package-btns" style={{
                                                display:'flex',
                                                justifyContent:'space-between'
                                            }}>
                                                <a href="javascript:void(0);" class="button">Continue with this Package</a>
                                                <a href="javascript:void(0);" class="button">Select my own Package</a>
                                            </div>
                                            <div class="info">
                                                <h5>Note : </h5>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                            </div>
                                        </div>:null}
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
