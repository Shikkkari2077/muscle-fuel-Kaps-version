import {React, useEffect} from "react";
import { Link } from "react-router-dom";

import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

import Packages from "./Packages";
import Popular from "./Popular";
import Features from "./Features";
import Stories from "./Stories";
import IntroDuction from "./IntroDuction";
import MainBanner from "./MainBanner";
import SeeMenu from "./SeeMenu";

const Home = () => {

  useEffect(() => {
    // window.location.reload()
  }, [])
  
  return (
    <>
    <Navbar/>
        <div class="main">
            <div id="fullpage" class="fullpage-wrapper" style={{height: '100%', position: 'relative', transform: 'translate3d(0px, 0px, 0px)'}}>
                <MainBanner />
                <Packages/>
                <Popular/>
                <SeeMenu/>
                <Features/>
                <Stories/>
            </div>
        </div>
    <Footer/>
    </>
  );
};

export default Home;
