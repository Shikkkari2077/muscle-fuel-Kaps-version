import {React, useState, useEffect} from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPackageList } from "../../Actions/homeActions";
import { Link } from "react-router-dom";


const Packages = () => {
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
                                        <div class="package-carousel">
                                            <div
                                                class="package-container swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                                <div class="swiper-wrapper" id="swiper-wrapper-4a983da3c1b2fefc"
                                                    aria-live="polite" >
                                                        {PackageList?PackageList.map((pack,index)=>(
                                                            <div class="swiper-slide IMPORTANT"  role="group" aria-label="1 / 6">
                                                            <div class="package-card">
                                                                <div class="package-img"><img src={pack.img_url}
                                                                        class="img-fluid" alt="Sumbatik"/>
                                                                    <div class="package-head">
                                                                        <h2>{pack.package_name}</h2>
                                                                        <p>{pack.gram_label}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="package-dtl" style={{height:'300px'}}>
                                                                    {/* <h3>Popular amongst those</h3>
                                                                    <p>Whose looking for weight lose and get in shape</p>
                                                                    <h4>Most popular Meals choice</h4> */}
                                                                    <h5><div dangerouslySetInnerHTML={{__html:pack.description}} /></h5>
                                                                    <ul>
                                                                        <li><img src="img/meals.svg" alt="Meals"/>3 Meals</li>
                                                                        <li><img src="img/snack.svg" alt="snack"/>2 snack</li>
                                                                        <li><img src="img/soup.svg" alt="soup"/>1 soup</li>
                                                                    </ul>
                                                                    <div class="price-subscribe d-flex justify-content-between">
                                                                        <div>
                                                                            <p><strong>Starting from</strong>Starting from 150
                                                                                KWD</p>
                                                                        </div>
                                                                        <div><Link to={`/package/${pack.package_master_id}`} type="submit" class="button">Subscribe Now</Link></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        )):null}
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
        </div>
    </section>
    </>
  );
};

export default Packages;
