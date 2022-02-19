import {React, useState, useEffect} from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPackageList, getPackageDetails } from "../Actions/homeActions";


const Package = () => {

    const dispatch = useDispatch()
    const PackageDetails = useSelector(state => state.home.PackageDetails);
    const PackageList = useSelector(state => state.home.PackageList);

    const [packageID, setPackageID] = useState()
    const [subPackageID, setSubPackageID] = useState()
    const [dishValue, setVishValue] = useState()
    const [subPackage, setSubPackage] = useState()
    const [finalPrice, setFinalPrice] = useState('0.000')

    console.log('subPackageID',subPackageID);
    console.log('finalPrice',finalPrice);

    useEffect(() => {
        onPackages();
    }, [])
    
    const onPackages = () =>{
        var formData = new FormData
        formData.append('lang_id',1)
        formData.append('show_festival_package',0)

        dispatch(getPackageList(formData))
    }

    useEffect(() => {
        var formData = new FormData
        formData.append('lang_id',1)
        formData.append('package_id',packageID)

        dispatch(getPackageDetails(formData))
    }, [packageID])
    
    const DishValueChange =(e)=>{
        const { name, value } = e.target;

        setVishValue({
        ...dishValue,
        [name]: value,
        });
    }

    useEffect(() => {
       if(PackageDetails){
        var subPKG = PackageDetails.sub_package_list
        var selectSP = subPKG.filter(data=>data.package_for_id==subPackageID)
        console.log('selectSP',selectSP);
        setSubPackage(selectSP[0])
       }
    }, [subPackageID])
    
    useEffect(() => {
       if(dishValue){
        var meal = parseInt(dishValue.Meals)
        var snack = parseInt(dishValue.Snacks)
        var soup = parseInt(dishValue.Soups)

        var Combo = subPackage.sub_packages.filter(pack=>pack.total_combo_count.meals==meal&&pack.total_combo_count.snacks==snack&&pack.total_combo_count.soup==soup)
        console.log('Combo',Combo);
        var PRICE = Combo.length>0?Combo[0].price:'0.000'
        setFinalPrice(PRICE)
       }

    }, [dishValue,subPackage])
    
    console.log('dishValue',dishValue);
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
                                    {PackageList?PackageList.map((pack,index)=>(
                                        <div className="swiper-slide IMPORTANT2">
                                            <div className="package-card">
                                                <input onClick={()=>setPackageID(pack.package_master_id)} type="radio" className="styled-checkbox" id={`package${index+1}`} name="packages" />
                                                <label htmlFor={`package${index+1}`} title="Sumbatik">
                                                    <div className="package-img">
                                                        <img src="img/sumbatik.jpg" className="img-fluid" alt="Sumbatik Package"/>
                                                        <div className="package-head">
                                                            <h2>{pack.package_name}</h2><p>{pack.gram_label}</p>
                                                            <div dangerouslySetInnerHTML={{__html:pack.description}} />
                                                            {/* <div><p>Starting from 150 KWD</p></div> */}
                                                            <div className="read-more-select"><a href="#sumbatikModel" data-fancybox className="button">Read More</a><span className="button select-btn">Select</span></div>
                                                        </div>
                                                    </div>
                                                </label>	
                                            </div>
                                        </div>
                                    )):null}
                                </div>
                            </div>
                            {/* <div className="package-button-prev swiper-button-prev"></div> */}
                            {/* <div className="package-button-next swiper-button-next"></div> */}
                        </div>
                        <div className="number-of-days">
                            <h3 className="text-center text-transform-none color-black">Select Number of Day(s)</h3>
                            <div className="text-center">
                                <ul className="unstyled days-ul d-inline-block">
                                    {PackageDetails?PackageDetails.sub_package_list.map((subPackage,index)=>(
                                        <li>
                                            <input onClick={()=>setSubPackageID(subPackage.package_for_id)} type="radio" className="styled-checkbox" id={`days${subPackage.days}`} name="day" />
                                            <label htmlFor={`days${subPackage.days}`}>
                                                <h2>{subPackage.days}</h2><p>Days</p>
                                            </label>
                                        </li>
                                    )):null}
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
                                            {PackageDetails?PackageDetails.max_values_as_per_meal_type.filter(data=>data.meal_type_id!==1).map((value,index)=>(
                                                <div className="swiper-slide IMPORTANT" >
                                                    <div className="dish-box meal-dish">
                                                        <h2><span>Choose Number of</span>{value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''}</h2>
                                                        <ul className="unstyled dish-ul justify-content-between">
                                                           {new Array(value.max_value).fill(value.max_value).map((subValue,idx)=>(
                                                                <li>
                                                                    <input onChange={DishValueChange} type="radio" className="styled-checkbox" id={`${value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''}${idx}`}  name={value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''} value={idx}/>
                                                                    <label htmlFor={`${value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''}${idx}`}><strong>{idx}</strong></label>
                                                                </li>
                                                           ))}
                                                        </ul>	
                                                    </div>
                                                </div>
                                            )):null}
                                        </div>
                                    </div>
                                    {/* <div className="dishes-button-prev swiper-button-prev"></div> */}
                                    {/* <div className="dishes-button-next swiper-button-next"></div> */}
                                </div>
                            </div>		
                                <div className="col-g-12 col-md-12 col-sm-12 starting-column">
                                    <div className="text-center starting-box pt-0 border-top-red max-width780">
                                        <div className="summary-div-box">Food Dishes Summary</div>
                                        <div className="starting-sub">
                                            <h4><strong className="mealVal">{dishValue?dishValue.Meals?dishValue.Meals:0:0}</strong> Meals + <strong className="SnakcsVal">{dishValue?dishValue.Snacks?dishValue.Snacks:0:0}</strong> Snacks + <strong className="SoupVal">{dishValue?dishValue.Soups?dishValue.Soups:0:0}</strong> Soups</h4>
                                            <p>You selected starting date is <strong>20 September 2021</strong></p>
                                        </div>
                                        <div className="starting-sub">
                                            <h4 className="pt-0"><span>{finalPrice} KWD</span></h4>
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
