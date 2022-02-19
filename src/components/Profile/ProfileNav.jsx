import React from 'react'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onLogOut } from "../../Actions/homeActions";

const ProfileNav = () => {
    const dispatch = useDispatch()

    const LogOut =()=>{
       dispatch(onLogOut())
    }
    
  return (
    <div className="ProfileNav">
        <ul>
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">person</span>Profile</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">room_service</span>Orders</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">loyalty</span>Loyality Points</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">perm_phone_msg</span>Contact Us</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">home</span>Address</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">share</span>Share & Earn</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">ondemand_video</span>Tutorials</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">collections</span>Gallery</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">settings</span>Settings</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">info</span>About Us</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">gavel</span>Terms & Conditions</li>
            </Link>
            
            <li onClick={LogOut}><span class="material-icons-sharp">logout</span>Log Out</li>
            
        </ul>
    </div>
  )
}

export default ProfileNav