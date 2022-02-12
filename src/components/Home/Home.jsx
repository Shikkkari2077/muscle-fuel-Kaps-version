import React from "react";
import { Link } from "react-router-dom";

import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

import Packages from "./Packages";
import Popular from "./Popular";
import Features from "./Features";
import Stories from "./Stories";
import IntroDuction from "./IntroDuction";

const Home = () => {
  return (
    <>
    <Navbar/>
        <div class="main">
            <div id="fullpage" class="fullpage-wrapper" style={{height: '100%', position: 'relative', touchAction: 'none', transform: 'translate3d(0px, 0px, 0px)'}}>
                <IntroDuction/>
                <Packages/>
                <Popular/>
                <Features/>
                <Stories/>
            </div>
        </div>
    <Footer/>
    </>
  );
};

export default Home;
