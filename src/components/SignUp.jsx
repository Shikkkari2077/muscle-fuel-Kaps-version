import {React, useState, useEffect} from "react";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { onRegister } from "../Actions/homeActions";
import { toast } from "react-toastify";

const SignUp = () => {

    const [register, setRegister] = useState({
        first_name:'',
        last_name:'',
        email:'',
        mobile_no:null,
        password:'',
        CPassword:'',
    })
    const dispatch = useDispatch()
    const user = useSelector(state => state.home.user);
    
    const handleChange =(e)=>{
        const { name, value } = e.target;

        setRegister({
        ...register,
        [name]: value,
        });
    }

    const onSubmit =()=>{
        if(!register.first_name){
            toast.warning("Enter First Name!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else if(!register.last_name){
            toast.warning("Enter Last Name!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else if(!register.email){
            toast.warning("Enter Your Email!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else if(!register.mobile_no){
            toast.warning("Enter Your Mobile No.!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }else if(register.password!==register.CPassword){
            toast.warning("Password Dose Not Match!", {
                position: toast.POSITION.TOP_RIGHT
              });
              return false
        }
        var formData = new FormData()
        formData.append('first_name',register.first_name)
        formData.append('last_name',register.last_name)
        formData.append('email',register.email)
        formData.append('mobile_no',register.mobile_no)
        formData.append('password',register.password)
        formData.append('device_name','android')
        formData.append('device_token','frwNMKysQEm')
        formData.append('device_id',352631555654243)

        dispatch(onRegister(formData))
    }

  return (
    <>
    <Navbar/>
      <section class="innerpages sign-in-main">
        <div class="container">
            <div class="row">
                {/* <!--<div class="col-12 position-relative z-index99">
                    <h1 class="text-center">Sign In</h1>
                </div>--> */}
                <div class="col-12">
                    <div class="row fp-completely">
                        <div class="col-lg-5 col-md-5 col-sm-6 banner-text">
                            <h2 class="text-center mb-2">Sign Up</h2>
                            <div class="login-box">
                                <div class="login-box-sub">
                                    <div class="form-group">
                                        <input onChange={handleChange} type="text" class="form-control" placeholder="First Name" name='first_name' value={register.first_name}/>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="text" class="form-control" placeholder="Last Name" name='last_name' value={register.last_name}/>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="email" class="form-control" placeholder="Email" name='email' value={register.email}/>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="number" class="form-control" placeholder="Mobile" name='mobile_no' value={register.mobile_no}/>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="password" class="form-control" placeholder="Password" name='password' value={register.password}/>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={handleChange} type="password" class="form-control" placeholder="Confirm Password" name='CPassword' value={register.CPassword}/>
                                    </div>
                                    <div class="form-group">
                                        <button onClick={onSubmit} class="button">Register</button></div>
                                    
                                <div class="login-width">
                                    <div class="or form-group text-center"><span>OR</span></div>
                                    <div class="login-box-sub row">
                                        <div class="col-12 already-account">
                                            Already have an account? <Link to="/sign-in">SIGN IN</Link>
                                        </div>		
                                    </div>
                                </div></div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6 banner-right">
                            <img src="img/banner.svg" class="img-fluid" alt="Khalefa Chalet"/>
                            <div class="fider-main">
                                <div class="fider-one pipe-one">
                                    <div class="fider-text">
                                        <strong>47%</strong><span>PROTEIN</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                </div>
                                <div class="fider-one pipe-two">
                                    <div class="fider-text">
                                        <strong>24%</strong><span>FATS</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                    <img src="img/man.svg" class="man-img" alt="man"/>
                                </div>
                                <div class="fider-one pipe-three">
                                    <div class="fider-text">
                                        <strong>50%</strong><span>CARBS</span>
                                    </div>
                                    <div class="circle-top"></div>
                                    <div class="circle-btm"></div>
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default SignUp;
