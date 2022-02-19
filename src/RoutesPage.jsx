import {React, useState, useEffect} from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CalculateCalorie from "./components/CalculateCalorie";
import Dietician from "./components/Dietician";
import Home from "./components/Home/Home";
import Packages from "./components/Home/Packages";
import Menu from "./components/Menu";
import Package from "./components/Package";
import MyProfile from "./components/Profile/MyProfile";
import SignUp from "./components/SignUp";
import SingIn from "./components/SingIn";
import SubscribeNow from "./components/SubscribeNow";
import TermsAndConditions from "./components/TermsAndConditions";


const RoutesPage = () => {
  const [render] = useState(localStorage.getItem('user_id'))
  return (
    <Router baseName={'/'}>
      <ToastContainer></ToastContainer>
        <Routes>
         {render?<Route exact path='/myProfile' element={<MyProfile /> }/>:null}

          <Route exact path='/' element={<Home/> }/>
          <Route exact path='/package' element={<Package/>}/>
          <Route exact path='/calculate-calorie' element={<CalculateCalorie/>}/>
          <Route exact path='/dietician' element={<Dietician/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          <Route exact path='/sign-in' element={<SingIn/>}/>
          <Route exact path='/sign-up' element={<SignUp/> }/>
          <Route exact path='/subscribe' element={<SubscribeNow/> }/>
          <Route exact path='/terms-conditions' element={<TermsAndConditions/> }/>
          
        </Routes>
    </Router>
  );
};

export default RoutesPage;
