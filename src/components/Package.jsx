import {React, useState, useEffect} from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 
    getPackageList,
    getPackageDetails,
    getDeliveryTime,
    getDeliveryMethod,
    getUserAddress,
    getAreaList,
    addAddress,
    purchasePackage,
    getDislikeItems,
    getReadMore,
    getCoupon,
    getUserWallet,
} from "../Actions/homeActions";
import { toast, ToastContainer } from "react-toastify";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 5).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

const Package = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'HomeSlider',
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


    const PackageID = useParams()
    const Location = useLocation()

    const dispatch = useDispatch()

    const PackageDetails = useSelector(state => state.home.PackageDetails);
    const PackageList = useSelector(state => state.home.PackageList);
    const DeliveryTime = useSelector(state => state.home.DeliveryTime);
    const DeliveryMethod = useSelector(state => state.home.DeliveryMethod);
    // const DislikeItems = useSelector(state => state.home.DislikeItems);
    const UserAddress = useSelector(state => state.home.UserAddress);
    const UserWallet = useSelector(state => state.home.UserWallet);
    const AreaList = useSelector(state => state.home.AreaList);
    // const Refresh = useSelector(state => state.home.Refresh);
    const ReadMore = useSelector(state => state.home.ReadMore);
    const Coupon = useSelector(state => state.home.Coupon);


    const [modalReadMore, setModalReadMore] = useState(false)
    const [modalAddress, setModalAddress] = useState(false)
    // const [modalDislikes, setModalDislikes] = useState(false)



    const [packageID, setPackageID] = useState()
    const [subPackageID, setSubPackageID] = useState()
    const [sub_package_id, setSub_package_id] = useState()
    const [dishValue, setVishValue] = useState({Meals: '3', Snacks: '2', Soups: '1'})
    const [subPackage, setSubPackage] = useState()

    const [finalPrice, setFinalPrice] = useState(0)
    const [DISCOUNT, setDISCOUNT] = useState(0)
    const [SUBTOTAL, setSUBTOTAL] = useState(0)

    const [startDate, setStartDate] = useState()
    const [startDateS, setStartDateS] = useState()
    const [deliveryTime, setDeliveryTime] = useState()
    const [deliveryMethod, setDeliveryMethod] = useState()
    // const [isFriday, setIsFriday] = useState('no')
    const [paymentType, setPaymentType] = useState('')
    const [address, setAddress] = useState({})
    const [CouponCode, setCouponCode] = useState('')

    const [WalletSpend, setWalletSpend] = useState(null)
    // const [dislikeItems, setDislikeItems] = useState([])
  
    const [USER_ID] = useState(localStorage.getItem('user_id'));

   console.log('WalletSpend',WalletSpend);
    
    const AddressChange =(e)=>{
        const { name, value } = e.target;

        setAddress({
        ...address,
        [name]: value,
        });
    }

    useEffect(() => {
     var StartDate = new Date(startDate).getTime()
     var date = new Date(StartDate).getDate()
     var month = new Date(StartDate).getMonth()
     var year = new Date(StartDate).getFullYear()

    var Fmonth = month==0?'January':month==1?'February':month==2?'March':month==3?'April':month==4?'May':month==5?'June':month==6?'July':month==7?'August':month==8?'September':month==9?'October':month==10?'November':month==11?'December':''
    var final = `${date} ${Fmonth} ${year}`
    localStorage.setItem('startDate',final)
     setStartDateS(final)
    }, [startDate])


    useEffect(() => {
        var StartDate = new Date(startDate).getTime()
        var Today = new Date().getTime()+96*60*60*1000

        console.log('Today',Today);
        if(StartDate<Today){
            setStartDateS('')
            setStartDate()
            toast.warning("Please Select A Date After 4 Days!", {
            position: toast.POSITION.TOP_RIGHT
            });
            return false
        }
    }, [startDate])
    
    
    useEffect(() => {
        
        if(PackageID){
            setPackageID(PackageID.PackageID)
            console.log('PARAM');
        }

    }, [PackageID])

    
    useEffect(() => {
        onPackages();
        onDeliveryTime();
        onDeliveryMethod();
        // onDislikeItem()
        dispatch(getUserWallet())
        onReadMore()
        localStorage.setItem('P_ID',24)
        
    }, [])
   
    console.log('UserWallet',UserWallet);

    useEffect(() => {
        if(Location.pathname.includes('/package')){
            setPackageID(24)
        }
    }, [])
    
    useEffect(() => {
      
        if(PackageDetails){
          setSubPackageID('1')
        }

    }, [packageID,PackageDetails])

    // useEffect(() => {
      
    //     if(subPackageID){
    //         setVishValue({Meals: '3', Snacks: '2', Soups: '1'})
    //     }
       
    // }, [subPackageID])

    
    const onPackages = () =>{
        var formData = new FormData
        formData.append('lang_id',1)
        formData.append('show_festival_package',0)

        dispatch(getPackageList(formData))
    }

    const onDeliveryTime =()=> {
        var formData = new FormData
        formData.append('language_id',1)
        dispatch(getDeliveryTime(formData));
    }

    const onDeliveryMethod =()=> {
        var formData = new FormData
        formData.append('language_id',1)
        dispatch(getDeliveryMethod(formData));
    }

    // const onDislikeItem =()=> {
    //     var formData = new FormData
    //     formData.append('language_id',1)
    //     dispatch(getDislikeItems(formData));
    // }

    const onReadMore =()=> {
        var formData = new FormData
        formData.append('text_for','general_note_in_profile_page')
        formData.append('lang_id',1)
        dispatch(getReadMore(formData));
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
    // const DislikeChange = (dislike) => {
    //     setDislikeItems([...dislikeItems,dislike])
    // }
    useEffect(() => {
       if(PackageDetails){
        var subPKG = PackageDetails.sub_package_list
        var selectSP = subPKG.filter(data=>data.package_for_id==subPackageID)
        console.log('selectSP',selectSP);
        setSubPackage(selectSP[0])
       }
    }, [subPackageID])
    
    useEffect(() => {
       if(dishValue&&subPackage){
        var meal = parseInt(dishValue.Meals)
        var snack = parseInt(dishValue.Snacks)
        var soup = parseInt(dishValue.Soups)

        var Combo = subPackage.sub_packages.filter(pack=>pack.total_combo_count.meals==meal&&pack.total_combo_count.snacks==snack&&pack.total_combo_count.soup==soup)
        console.log('Combo',Combo);
        var PRICE = Combo.length>0?Combo[0].price:'0.000'
        var id = Combo.length>0?Combo[0].sub_package_id:''
        setSub_package_id(id)
        setSUBTOTAL(parseInt(PRICE))
        setFinalPrice(parseInt(PRICE))
       }

    }, [dishValue,subPackage])

    const [Applied, setApplied] = useState(false)
    
    const [disCountTEXT, setdisCountTEXT] = useState('No Discount Yet!')

    const ApplyCoupon = ()=>{

        setApplied(true)
        var formData = new FormData()
        formData.append('user_id',USER_ID)
        formData.append('coupon_code',CouponCode)

        dispatch(getCoupon(formData))
    }
    
    useEffect(() => {
        if(UserWallet){
            var amount = parseInt(UserWallet.wallet_amount)-WalletAmount
            setFinalPrice(finalPrice-amount)
        }
    }, [SUBTOTAL])

    useEffect(() => {
        if(Coupon){
            if(Coupon.discount_type=="percentage"){
                setdisCountTEXT(`Congrats!  You Will get ${Coupon.discount_value}% Discount`)
                var discount = finalPrice*parseInt(Coupon.discount_value)/100
                var NewPrice = finalPrice - discount
                setDISCOUNT(discount)
                setFinalPrice(NewPrice)
            }
        }
    }, [Coupon,SUBTOTAL])

    useEffect(() => {
     if(Coupon==false&&Applied==true){
        setdisCountTEXT('Sorry! Your Coupon Code is Wrong or Expired')
     }
    }, [Applied])

    const [WalletAmount, setWalletAmount] = useState(null)

    useEffect(() => {
        if(UserWallet){
            setWalletAmount(parseInt(UserWallet.wallet_amount))
            // setWalletAmount(450)
        }
    }, [UserWallet])
    
    const OnSpend =()=>{

        console.log('WalletSpend',WalletSpend>finalPrice?'All Okay':'Not Okay');

        if(WalletAmount==0){
            toast.warning("Sorry! Your Wallet Balance is Zero", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }

        if(WalletSpend>WalletAmount){
            toast.warning("Enter Amount Exceeding Wallet Limit!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else if(WalletSpend>finalPrice){
            toast.warning("Enter Amount Cannot be Greater than Package Price!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else{
            var AfterSpend = finalPrice - WalletSpend
            var newWallet = WalletAmount - WalletSpend
            // setSUBTOTAL(AfterSpend)
            setFinalPrice(AfterSpend)
            setWalletAmount(newWallet)

            toast.warning(`You Avail ${WalletSpend} KWD From Wallet`, {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        
    }

    const [POP_UP, setPOP_UP] = useState(false)

    const EditAddress =()=>{

        if(UserAddress){
            setAddress({
                address_type: UserAddress.address_type,
                directions: UserAddress.directions,
                street: UserAddress.street,
                block: UserAddress.block,
                floor_no: UserAddress.floor_no,
                flat_no: UserAddress.flat_no,
                avenue: UserAddress.avenue,
                house_number: UserAddress.house_number,
                area_id: UserAddress.area.area_id,
                lang: UserAddress.lang,
                lat: UserAddress.lat,
            })
            
        }else if(!USER_ID){
            // toast.warning("You Are Not Logged In, Do You Want to Sign Up!", {
            //     position: toast.POSITION.TOP_RIGHT
            //   });
            setPOP_UP(true)
            
        }
    }

    const AddressSubmit =(e)=>{
        e.preventDefault()

        setModalAddress(false)
        
        var formData = new FormData
        formData.append('user_id',localStorage.getItem('user_id'))
        formData.append('lang_id',1)
        formData.append('address_type',address.address_type)
        formData.append('directions',address.directions)
        formData.append('street',address.street)
        formData.append('block',address.block)
        formData.append('floor_no',address.floor_no)
        formData.append('flat_no',address.flat_no)
        formData.append('avenue',address.avenue)
        formData.append('house_number',address.house_number)
        formData.append('area_id',address.area_id)

        dispatch(addAddress(formData))
    }

    useEffect(() => {
        dispatch(getUserAddress())
        dispatch(getAreaList())
    }, [])
    
    
    const PayNow = ()=>{
        if(USER_ID){
            if(!packageID){
                toast.warning("Select A Package!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!deliveryTime){
                toast.warning("Select Delivery Time!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!subPackageID){
                toast.warning("Select A Sub Package!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!deliveryMethod){
                toast.warning("Select Delivery Method!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!startDate){
                toast.warning("Select Package Start Date!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!UserAddress){
                toast.warning("Add Delivery Address!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }else if(!paymentType){
                toast.warning("Select A Payment Method!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  return false
            }

            var endDate = new Date(startDate)
            var END_DATE = endDate.setDate(endDate.getDate() + 6)

            var formData = new FormData
            formData.append('delivery_time_id',deliveryTime)
            formData.append('end_date','')
            formData.append('package_for',subPackageID)
            formData.append('package_amount',finalPrice)
            formData.append('promo_code_discount',0.0)
            formData.append('delivery_address_id',UserAddress.address_id)
            formData.append('package_id',packageID)
            formData.append('consultant_fees',0)
            formData.append('sub_package_id',sub_package_id)
            formData.append('payment_type',paymentType)
            formData.append('delivery_method_id',deliveryMethod)
            formData.append('total_amount',finalPrice)
            formData.append('user_id',localStorage.getItem('user_id'))
            formData.append('app_mode','prod')

            if(WalletSpend!==null){
                formData.append('wallet_id',UserWallet.wallet_id)
                formData.append('wallet_amount',parseInt(UserWallet.wallet_amount)-WalletAmount)
            }else{}

            formData.append('unique_code',endDate.getTime()*32)
            // formData.append('friday_delivery',isFriday)
            formData.append('start_date',startDate)
            // formData.append('dislike_ingredients',dislikeItems.toString())
            var DATA = {
                payment:paymentType,
                totalAmount:finalPrice,
            }
            dispatch(purchasePackage(formData,DATA))
        }
        else{
            // toast.warning("You Are Not Logged In, Do You Want to Sign Up!", {
            //     position: toast.POSITION.TOP_RIGHT
            //   });
            setPOP_UP(true)
           
        }

    }
    // console.log('dishValue',dishValue.Meals);
    const SET_ID = (id)=>{
        localStorage.setItem('P_ID',id)
    }

    console.log(packageID);
    console.log(subPackageID);
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
                            <div className="PackageCards">
                                <Slider {...settings} >
                                    {PackageList?PackageList.map((pack,index)=>(
                                        <div className="swiper-slide IMPORTANT2">
                                            <div className="package-card">
                                                <input checked={pack.package_master_id==packageID?true:false} onClick={()=>setPackageID(pack.package_master_id)} type="radio" className="styled-checkbox" id={`package${index+1}`} name="packages" />
                                                <label htmlFor={`package${index+1}`} title="Sumbatik">
                                                    <div className="package-img">
                                                        <Link to='/menu' onClick={()=>SET_ID(pack.package_master_id)} className="button MENU_BTN">Menu</Link>	
                                                        <img src={pack.package_master_id==24?"img/sumbatik.jpg":pack.package_master_id==26?"img/FiT.jpg":pack.package_master_id==28?"img/Bulk.jpg":null} className="img-fluid" alt="Sumbatik Package"/>
                                                        <div className="package-head">
                                                           
                                                            <h2>{pack.package_name}</h2><p>{pack.gram_label}</p>
                                                            <div style={{padding:'0px'}} dangerouslySetInnerHTML={{__html:pack.description}} />
                                                            {/* <div><p>Starting from 150 KWD</p></div> */}
                                                            <div className="read-more-select">{/*<a onClick={()=>setModalReadMore(true)} className="button">Read More</a>*/}<span className="button select-btn">Select</span></div>
                                                        </div>
                                                    </div>
                                                </label>
                                               
                                            </div>
                                        </div>
                                    )):null}
                                </Slider>
                            </div>
                            {/* <div className="package-button-prev swiper-button-prev"></div> */}
                            {/* <div className="package-button-next swiper-button-next"></div> */}
                        </div>
                        <div className="number-of-days">
                            <h3 className="text-center text-transform-none color-black">Select Number of Day</h3>
                            <div className="text-center">
                                <ul className="unstyled days-ul d-inline-block">
                                    {PackageDetails?PackageDetails.sub_package_list.map((subPackage,index)=>(
                                        <li>
                                            <input checked={subPackage.package_for_id==subPackageID?true:false} onClick={()=>setSubPackageID(subPackage.package_for_id)} type="radio" className="styled-checkbox" id={`days${subPackage.days}`} name="day" />
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
                                    <div className="dishes-container swiper-container" style={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }} >
                                        <div className="swiper-wrapper row">
                                            {PackageDetails?PackageDetails.max_values_as_per_meal_type.filter(data=>data.meal_type_id!==1).map((value,index)=>(
                                                <div className="swiper-slide col-lg-4 col-md-4 col-sm-12" style={{marginBottom:'1rem'}}>
                                                    <div className="dish-box meal-dish">
                                                        <h2><span>Choose Number of</span>{value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''}</h2>
                                                        <ul className="unstyled dish-ul justify-content-between">
                                                           {new Array(value.max_value).fill(value.max_value).map((subValue,idx)=>(
                                                                <li>
                                                                    <input checked={index==0&&dishValue.Meals==idx?true:index==1&&dishValue.Snacks==idx?true:index==2&&dishValue.Soups==idx?true:false} onChange={DishValueChange} type="radio" className="styled-checkbox" id={`${value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''}${idx}`}  name={value.meal_type_id==2?'Meals':value.meal_type_id==3?'Snacks':value.meal_type_id==11?'Soups':''} value={idx}/>
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
                                            {startDate?<p>You selected starting date is <strong>{startDateS}</strong></p>
                                            :null}
                                        </div>
                                        <div className="starting-sub">
                                            <h4 className="pt-0"><span>{SUBTOTAL=='0.000'?'Combination Not Available!':SUBTOTAL.toFixed(3)} {finalPrice=='0.000'?null:'KWD'}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        {/* <h3 className="text-transform-none mt-4 text-left value-added-choice"><span>Value added Choice</span></h3>
                        <div className="value-choice">
                            <div className="value-choice-left">
                                <p>Do you want the Friday delivery?</p>
                                <div className="mb-5"> 
                                    <span onClick={()=>setIsFriday('yes')} style={{background:`${isFriday=='yes'?'#C5251C':'#fff'}`,color:`${isFriday=='yes'?'#fff':'#000'}`}} className="button-line mr-3 ISFRYD">Yes</span> 
                                    <span onClick={()=>setIsFriday('no')} style={{background:`${isFriday=='no'?'#C5251C':'#fff'}`,color:`${isFriday=='no'?'#fff':'#000'}`}} className="button-line ISFRYD">No</span>
                                </div>
                            </div>
                            <div className="value-choice-right">
                                <p><strong>Note : </strong></p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            </div>	
                        </div> */}
                        <div className="carousel">
                            <div className="week-container menu-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide WEEK DATE_STL">
                                        <h3 style={{marginRight:'2rem'}}>Package Start Date</h3><input min={disablePastDate()} name='startDate' onChange={(e)=>setStartDate(e.target.value)} type="date" className="PACK_DATE" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="swiper-button-prev week-button-prev"></div> */}
                            {/* <div className="swiper-button-next week-button-next"></div> */}
                        </div>
                        <div className="row">
                            
                            <div className="col-g-4 col-md-4 col-sm-6 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Select the delivery time</h4>
                                    <ul className="unstyled delivery-time" style={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}>
                                        {DeliveryTime?DeliveryTime.map((time,index)=>(
                                            <li>
                                                <input onClick={()=>setDeliveryTime(time.timeid)} type="radio" className="styled-checkbox" id={time.timeid} name="delivery" />
                                                <label className="TIME_LABLE" htmlFor={time.timeid}>
                                                    <div>{time.timename}</div>
                                                </label>
                                            </li>
                                        )):null}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-g-8 col-md-8 col-sm-10 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Contact on Delivery</h4>
                                    <ul className="unstyled delivery-time">
                                        {DeliveryMethod?DeliveryMethod.map((method,index)=>(
                                        <li>
                                            <input onChange={()=>setDeliveryMethod(method.methodid)} type="radio" className="styled-checkbox" id={'method'+method.methodid} name="deliverymethod" />
                                            <label htmlFor={'method'+method.methodid}>
                                                <div>{method.methodname}</div>
                                            </label>
                                        </li>
                                        )):null}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-g-4 col-md-4 col-sm-6 starting-column">
                                <div className="text-center starting-box">
                                    <h4>Dislikes</h4>
                                    <div className="form-group">
                                        <a className="button" onClick={()=> setModalDislikes(true)}>Choose Dislikes Items</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                       {USER_ID? <div className="row">
                            <div  className="col-g-6 col-md-6 col-sm-6 starting-column">
                                <div className="CPN_DIV">
                                    <h3>Coupon Code</h3>
                                    <h4><span>{disCountTEXT}</span></h4>
                                    {Applied && Coupon!== false ?null:<div>
                                    <input onChange={(e)=>setCouponCode(e.target.value)} value={CouponCode} type="text" placeholder="Enter Coupon Here"/>
                                    <button onClick={ApplyCoupon} className="button">Apply</button>
                                   </div>}
                                   
                                 
                                </div>
                            </div>
                            <div  className="col-g-6 col-md-6 col-sm-6 starting-column">
                                <div className="WALLET_DIV">
                                    <h3>Wallet Balance</h3>
                                    <span>
                                        <span class="material-icons-sharp">account_balance_wallet</span>
                                        {UserWallet?parseInt(WalletAmount).toFixed(3):'0.000'} KWD
                                    </span>
                                    <div>
                                        <input min="0" onChange={(e)=>setWalletSpend(e.target.value)} value={WalletSpend} type="number" placeholder="Enter Amount"/>
                                        <button onClick={OnSpend} className="button">Spend</button>
                                   </div>
                                </div>
                            </div>
                        </div>:null}
                        <div className="row">
                            <div className="col-g-6 col-md-6 col-sm-6 starting-column">
                                <div className="address-sub-div delivery-address" style={{height:'100%'}}>

                                    <div className="POP_UP" style={{display:POP_UP?'flex':'none'}}>
                                        <h4>You Are Not Logged In, Do You Want To Sign UP</h4>
                                        <div>
                                            <Link to='/sign-up' className="button">Yes</Link>
                                            <Link onClick={()=>setPOP_UP(false)} to='#' className="button">No</Link>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-left addModelHead">Delivery Address <a onClick={()=>{
                                        EditAddress()
                                        setModalAddress(USER_ID?true:false)
                                    }} className="button change-btn">{UserAddress?'Change':'Add'}</a></h3>
                                    <div className="profiledata">
                                       {UserAddress? <div className=" ">
                                            <div className="form-group">
                                                <label>Type</label><p>{UserAddress?UserAddress.address_type:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Area</label><p>{UserAddress?UserAddress.area.area_name:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Block</label><p>{UserAddress?UserAddress.block:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Street </label><p>{UserAddress?UserAddress.street:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Judda</label><p>{UserAddress?UserAddress.avenue:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Floor No</label><p>{UserAddress?UserAddress.floor_no:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <span style={{color:'#34384e'}}>Flat No</span><p>{UserAddress?UserAddress.flat_no:'null'}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>House No</label><p>{UserAddress?UserAddress.house_number:null}</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Directions</label><p>{UserAddress?UserAddress.directions:null}</p>
                                            </div>
                                        </div>:null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 starting-column">
                                <div className="starting-box">
                                    <h4 className="text-center">Payment Method</h4>
                                    <p className="text-center">The Fridays will be the off days</p>
                                    <div className="payment-method" style={{marginBottom:'1rem'}}>
                                        <div className="payment-detail">
                                            <ul className="unstyled">
                                                <li><input onClick={()=>setPaymentType('knet')} type="radio" className="styled-checkbox" id="knet" name="payment" /><label htmlFor="knet" title="K-Net"><img src="img/k-net.png" alt="k net"/></label><div>K-NET</div></li>
                                                <li><input onClick={()=>setPaymentType('visa')} type="radio" className="styled-checkbox" id="visa" name="payment" /><label htmlFor="visa" title="Credit Card"><img src="img/creditcard.png" alt="Credit Card"/></label><div>Credit Card</div></li>
                                                {/* <li><input onClick={()=>setPaymentType('cash')} type="radio" className="styled-checkbox" id="cash" name="payment" /><label htmlFor="cash" title="Cash on Delivery"><img src="img/cash.png" alt="Cash on Delivery"/></label><div>Cash on Delivery</div></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <p style={{fontSize:'1.3rem',fontWeight:'500'}} className="text-center total-amount">SubTotal: <b>{SUBTOTAL.toFixed(3)}</b> KWD</p>
                                    <p className="text-center total-amount">Wallet Spend: <b>{UserWallet?(parseInt(UserWallet.wallet_amount)-WalletAmount).toFixed(3):'0.000'}</b> KWD</p>
                                    <p className="text-center total-amount">Discount: <b>{DISCOUNT.toFixed(3)}</b> KWD</p>
                                    <p style={{fontSize:'1.6rem',fontWeight:'500'}} className="text-center total-amount">Total: <strong>{finalPrice?finalPrice.toFixed(3):0.000}</strong> KWD</p>
                                    <div className="text-center"><button type="submit" onClick={PayNow} className="button">Pay Now</button></div>
                                </div>	
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>

        <div style={{
            display: modalReadMore?'block':'none',
            position:'absolute',
            bottom: '0rem',
            left:'0',
            right:'0',
            margin: '0 auto',
            zIndex:'100',
            background: '#fff',
            width:'40%',
            padding: "2rem",
            borderRadius:'7px',
            boxShadow:'3px 3px 5px grey',
        }}>
            <span style={{
                position:'absolute',
                top:'-10px',
                right:'-10px',
                boxShadow:'3px 3px 5px grey',
                borderRadius:'50%',
                background: '#fff',
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }} onClick={()=>setModalReadMore(false)}>x</span>
           {ReadMore?(
               <div dangerouslySetInnerHTML={{ __html: ReadMore.description }} />
           ):null}
        </div>

        {/* <div style={{
            display: modalDislikes?'block':'none',
            position:'absolute',
            bottom: '-50rem',
            left:'0',
            right:'0',
            margin: '0 auto',
            zIndex:'100',
            background: '#fff',
            width:'70%',
            height:'70%',
            overflowY:'scroll',
            padding: "2rem",
            borderRadius:'7px',
            boxShadow:'3px 3px 5px grey',
        }}>
            
            <h2 className="anim1 pt-0">Choose Dislikes Items</h2>
            <div className="row">
                <div className="col-12 anim2">
                    <ul className="unstyled checkbox dislikes-items">
                        {DislikeItems?DislikeItems.map((item,index)=>(
                            <li>
                                <input onClick={()=>DislikeChange(item.main_ingredients_id)} type="checkbox" className="styled-checkbox" id={`item${index+1}`} name="dislikes" />
                                <label htmlFor={`item${index+1}`}>
                                    <div>{item.ingredients_name}</div>
                                </label>
                            </li>
                        )):null}
                       
                    </ul>
                </div>
                <div className="col-12 anim3 pt-2"><button onClick={()=> setModalDislikes(false)} className="button" type="submit">Submit</button></div>
            </div>
        </div> */}
        		
        <div className="ModelAddress" style={{
            display: modalAddress?'block':'none',
        }}>
             <span style={{
                position:'absolute',
                top:'-10px',
                right:'-10px',
                boxShadow:'3px 3px 5px grey',
                borderRadius:'50%',
                background: '#fff',
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }} onClick={()=>setModalAddress(false)}>x</span>
            <h2 className="anim1">{UserAddress?'Change Your Address':'Add New Address'}</h2>
            <form onSubmit={AddressSubmit} className="row">
                <div className="col-12 anim2">
                    <div className="form-group">
                        <ul className="unstyled">
                            <li className="white">
                                <input required checked={address.address_type=='house'?true:false} value='house' name='address_type' onChange={AddressChange} className="styled-checkbox" id="a_house" type="radio" />
                                <label  htmlFor="a_house"><span>House</span></label>
                            </li>
                            <li className="black">
                                <input required checked={address.address_type=='building'?true:false} value='building' name='address_type' onChange={AddressChange} className="styled-checkbox" id="a_aparment" type="radio" />
                                <label htmlFor="a_aparment"><span>Building</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim3">
                    <div className="form-group"><div className="inputbox">
                        <select required value={address.area_id} name='area_id' onChange={AddressChange} className="form-control">
                            <option>-- Area --</option>
                            {AreaList?AreaList.map((area,index)=>(
                                <option value={area.main_area_id}>{area.area_name}</option>
                            )):null}
                        </select></div></div>
                </div>	
                <div className="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.block} name='block' onChange={AddressChange} type="text"  placeholder="Block" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim4">
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.street} name='street' onChange={AddressChange} type="text"  placeholder="Street" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim5">	
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.avenue} name='avenue' onChange={AddressChange} type="text"  placeholder="Avenue / Judda" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim5">
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.flat_no} name='flat_no' onChange={AddressChange} type="text"  placeholder="Flat No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim6">	
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.floor_no} name='floor_no' onChange={AddressChange} type="text"  placeholder="Floor No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim6">
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.house_number} name='house_number' onChange={AddressChange} type="text"  placeholder="House No" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 anim6">
                    <div className="form-group">
                        <div className="inputbox"><input required value={address.directions} name='directions' onChange={AddressChange} type="text"  placeholder="Directions" className="form-control"/></div>
                    </div>
                </div>
                <div className="col-12 anim7"><button className="button" type="submit" title="Close">Submit</button></div>
            </form>
        </div>
    </>
  );
};

export default Package;
