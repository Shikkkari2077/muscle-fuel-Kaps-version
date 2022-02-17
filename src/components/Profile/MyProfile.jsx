import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onLogOut } from "../../Actions/homeActions";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import ProfileNav from "./ProfileNav";

const MyProfile = () => {
    

  return (
    <> 
    <Navbar/>
        <section className="innerpages" style={{paddingBottom:'1rem'}}>
           <div className="container">
                <h5 style={{marginLeft:'1rem'}}>My Profile</h5>
                <div className="profilePage">
                    <ProfileNav/>
                    <div className="profileData">

                    </div>
                </div>
           </div>
        </section>
    <Footer/>
    </>
  );
};

export default MyProfile;
