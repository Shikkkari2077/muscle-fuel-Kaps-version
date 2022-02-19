import {React, useEffect, useState} from "react";
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation()
    const [userData] = useState({
        first_name:localStorage.getItem('first_name'),
        last_name:localStorage.getItem('last_name'),
        email:localStorage.getItem('email'),
        user_id:localStorage.getItem('user_id'),
    })

    const [navActive, setNavActive] = useState(1);
    
    useEffect(() => {
     if(location.pathname.includes('/')){
        setNavActive(1)
     }
     if(location.pathname.includes('/package')){
        setNavActive(2)
     }
     if(location.pathname.includes('/calculate-calorie')){
        setNavActive(3)
     }
     if(location.pathname.includes('/dietician')){
        setNavActive(4)
     }
     if(location.pathname.includes('/menu')){
        setNavActive(5)
     }
     if(location.pathname.includes('/sign-in')){
        setNavActive(6)
     }
     if(location.pathname.includes('/sign-up')){
        setNavActive(7)
     }
    }, [navActive]);
 
  return (
      <header>
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <Link to='/' className="muscle-fuel"><img src="img/muscle-fuel.svg" alt="Muscle Fuel"/></Link>
                    <div className="navigation">
                        <div className="wsmenucontainer clearfix">
                            <div className="overlapblackbg"></div>
                            <div className="wsmobileheader clearfix">
                                <a id="wsnavtoggle" className="animated-arrow"><span></span></a>
                            </div>
                            <div className="wsmain">
                                <nav className="wsmenu clearfix">
                                    <ul className="mobile-sub wsmenu-list">
                                        <li><Link to="/" className={navActive==1?"active":null}>Home</Link></li>
                                        <li><Link to="/package" className={navActive==2?"active":null}>Package</Link></li>
                                        <li><Link to="/calculate-calorie" className={navActive==3?"active":null}>Calculate Calorie</Link></li>
                                        <li><Link to="/dietician" className={navActive==4?"active":null}>Dietician</Link></li>
                                        <li><Link to="/menu" className={navActive==5?"active":null}>Menu</Link></li>
                                        {!localStorage.getItem('user_id')?(
                                        <li><Link to="/sign-in" className={navActive==6||navActive==7?"active":null}>Sign in</Link>
                                            <ul className="wsmenu-submenu">
                                                <li><Link to="/sign-in" className={navActive==6?"active":null}>Login</Link></li>
                                                <li><Link to="/sign-up" className={navActive==7?"active":null}>Register</Link></li>
                                            </ul>	
                                        </li>
                                        ):null}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="language-div USER_NAME">
                            <span>
                                {userData.user_id?`${userData.first_name} ${userData.last_name}`:'User Name'}
                            </span>
                        </div>
                        <Link className="subscribe-div USER_PHOTO" to={userData.user_id?'/myProfile':'#'}>
                            <span class="material-icons-sharp">account_circle</span>
                        </Link>
                    </div>				
                </div>
            </div>
 	    </div>
     </header>
  );
};

export default Navbar;
