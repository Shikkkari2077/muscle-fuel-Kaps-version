import {React, useState, useEffect} from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPackageList } from "../../Actions/homeActions";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Packages = () => {

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

    const dispatch = useDispatch()

    const PackageList = useSelector(state => state.home.PackageList);

    useEffect(() => {
        onPackages();
    }, [])

    const onPackages = () =>{
        var formData = new FormData
        formData.append('lang_id',1)
        formData.append('show_festival_package',0)

        dispatch(getPackageList(formData))
    }
    
    console.log('PackageList',PackageList);
  return (
    <>
    <section class="section package-main fp-section fp-table active fp-completely H_SEC" id="section1"
        style={{opacity: '1', backgroundColor: 'rgb(255, 255, 255)',}} data-fp-styles={{opacity: '1'}}
        data-anchor="Packages">
        <div class="fp-tableCell" >
            <div class="fp-scrollable">
                <div class="fp-scroller" >
                    <div class="page-div">
                        <div class="page-sub">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="text-center pb-4"><span>OUR PACKAGES</span></h1>
                                        <div class="package-carousel" style={{
                                            // border:"1px solid red",
                                            display:'flex',
                                            justifyContent:'center'
                                        }}>
                                            <div class="PackageCards">
                                                <Slider {...settings}>
                                                        {PackageList?PackageList.map((pack,index)=>(
                                                            <div class="swiper-slide IMPORTANT"  role="group" aria-label="1 / 6">
                                                                <div class="package-card">
                                                                    <div class="package-img"><img src={pack.package_master_id==24?"img/sumbatik.jpg":pack.package_master_id==26?"img/FiT.jpg":pack.package_master_id==28?"img/Bulk.jpg":null}
                                                                            class="img-fluid" alt="Sumbatik"/>
                                                                        <div class="package-head">
                                                                            <h2>{pack.package_name}</h2>
                                                                            <p>{pack.gram_label}</p>
                                                                            <div><Link to={`/PACKAGE/${pack.package_master_id}`} type="submit" class="button">Subscribe Now</Link></div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )):null}
                                                       
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
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

export default Packages;
