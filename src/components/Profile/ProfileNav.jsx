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
                <li><span class="material-icons-sharp">home</span>Address</li>
            </Link>

            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">room_service</span>Orders</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">account_balance_wallet</span>Wallet</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">soup_kitchen</span>Diet</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">sports</span>Trainer</li>
            </Link>
            
            <Link className="LINK" to='/myProfile'>
                <li><span class="material-icons-sharp">inventory</span>Package</li>
            </Link>
            
            <li onClick={LogOut}><span class="material-icons-sharp">logout</span>Log Out</li>
            
        </ul>
    </div>
  )
}

export default ProfileNav