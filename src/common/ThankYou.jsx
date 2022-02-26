import {React, useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ThankYou = () => {
    const [StartDATE] = useState(localStorage.getItem('startDate'))
  return (
    <>
        <Navbar/>
            <section class="innerpages">
                <div className="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Thank You</h1>
                    </div>
                    <div class="col-g-12 col-md-12 col-sm-12 starting-column">
                        <div class="text-center starting-box pt-0  max-width780">
                            <div class="starting-sub pt-4">
                                <p><strong>Your payment has been successful.</strong></p>
                                <p>Please check your email for reciept.</p>
                                <p>You selected starting date is <strong>{StartDATE?StartDATE:'No Date Selected'}</strong></p>
                                <p>Now you can manage your meals on app and <br/>you can download the app clicking on following link. </p>
                                <div class="application">
                                    <a href="javascript:void(0);"><img src="img/apple-store.png" alt="apple store"/></a>
                                    <a href="javascript:void(0);"><img src="img/google-play.png" alt="google play"/></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default ThankYou