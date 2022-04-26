import {React, useRef, useEffect, useState} from "react";
import './Stories.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Stories() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "StorySlider",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const Audio1 = useRef()
  const Audio2 = useRef()
  const Audio3 = useRef()
  const Audio4 = useRef()
  const Audio5 = useRef()
  const Audio6 = useRef()

  const [Btn1, setBtn1] = useState('s_btn s_btn_play')
  const [Btn2, setBtn2] = useState('s_btn2 s_btn_play2')
  const [Btn3, setBtn3] = useState('s_btn3 s_btn_play3')
  const [Btn4, setBtn4] = useState('s_btn4 s_btn_play4')
  const [Btn5, setBtn5] = useState('s_btn5 s_btn_play5')
  const [Btn6, setBtn6] = useState('s_btn6 s_btn_play6')

  const CLICK_BTN_1=() => {
    if(Audio1.current.paused){
      Audio1.current.play()
      setBtn1('s_btn s_btn_pause')

      setBtn2('s_btn2 s_btn_play2')
      setBtn3('s_btn3 s_btn_play3')
      setBtn4('s_btn4 s_btn_play4')
      setBtn5('s_btn5 s_btn_play5')
      setBtn6('s_btn6 s_btn_play6')

      Audio2.current.pause()
      Audio3.current.pause()
      Audio4.current.pause()
      Audio5.current.pause()
      Audio6.current.pause()
    }else{
      Audio1.current.pause()
      setBtn1('s_btn s_btn_play')
    }
  }

  const CLICK_BTN_2=() => {
    if(Audio2.current.paused){
      Audio2.current.play()
      setBtn2('s_btn2 s_btn_pause2')

      setBtn1('s_btn s_btn_play')
      setBtn3('s_btn3 s_btn_play3')
      setBtn4('s_btn4 s_btn_play4')
      setBtn5('s_btn5 s_btn_play5')
      setBtn6('s_btn6 s_btn_play6')

      Audio1.current.pause()
      Audio3.current.pause()
      Audio4.current.pause()
      Audio5.current.pause()
      Audio6.current.pause()
    }else{
      Audio2.current.pause()
      setBtn2('s_btn2 s_btn_play2')
    }
  }

  const CLICK_BTN_3=() => {
    if(Audio3.current.paused){
      Audio3.current.play()
      setBtn3('s_btn3 s_btn_pause3')

      setBtn2('s_btn2 s_btn_play2')
      setBtn1('s_btn s_btn_play')
      setBtn4('s_btn4 s_btn_play4')
      setBtn5('s_btn5 s_btn_play5')
      setBtn6('s_btn6 s_btn_play6')

      Audio2.current.pause()
      Audio1.current.pause()
      Audio4.current.pause()
      Audio5.current.pause()
      Audio6.current.pause()
    }else{
      Audio3.current.pause()
      setBtn3('s_btn3 s_btn_play3')
    }
  }
  
  const CLICK_BTN_4=() => {
    if(Audio4.current.paused){
      Audio4.current.play()
      setBtn4('s_btn4 s_btn_pause4')

      setBtn2('s_btn2 s_btn_play2')
      setBtn3('s_btn3 s_btn_play3')
      setBtn1('s_btn  s_btn_play')
      setBtn5('s_btn5 s_btn_play5')
      setBtn6('s_btn6 s_btn_play6')

      Audio2.current.pause()
      Audio3.current.pause()
      Audio1.current.pause()
      Audio5.current.pause()
      Audio6.current.pause()
    }else{
      Audio4.current.pause()
      setBtn4('s_btn4 s_btn_play4')
    }
  }

  const CLICK_BTN_5=() => {
    if(Audio5.current.paused){
      Audio5.current.play()
      setBtn5('s_btn5 s_btn_pause5')

      setBtn2('s_btn2 s_btn_play2')
      setBtn3('s_btn3 s_btn_play3')
      setBtn4('s_btn4 s_btn_play4')
      setBtn1('s_btn s_btn_play')
      setBtn6('s_btn6 s_btn_play6')

      Audio2.current.pause()
      Audio3.current.pause()
      Audio4.current.pause()
      Audio1.current.pause()
      Audio6.current.pause()
    }else{
      Audio5.current.pause()
      setBtn5('s_btn5 s_btn_play5')
    }
  }

  const CLICK_BTN_6=() => {
    if(Audio6.current.paused){
      Audio6.current.play()
      setBtn6('s_btn6 s_btn_pause6')

      setBtn2('s_btn2 s_btn_play2')
      setBtn3('s_btn3 s_btn_play3')
      setBtn4('s_btn4 s_btn_play4')
      setBtn5('s_btn5 s_btn_play5')
      setBtn1('s_btn s_btn_play')

      Audio2.current.pause()
      Audio3.current.pause()
      Audio4.current.pause()
      Audio5.current.pause()
      Audio1.current.pause()
    }else{
      Audio6.current.pause()
      setBtn6('s_btn6 s_btn_play6')
    }
  }
  console.log('Audio1',);
  
  return (
    <section
      class="section stories-main fp-section fp-table active fp-completely"
      id="section4"
      style={{
        opacity: "1",
        height: "657px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
      data-fp-styles={{ opacity: "1" }}
      data-anchor="Testimonials"
    >
      <div class="fp-tableCell">
        <div class="fp-scrollable">
          <div class="fp-scroller">
            <div class="page-div">
              <div class="page-sub">
                <div class="w-100">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <h1 class="text-center">
                          <span>CUSTOMER STORIES</span>
                        </h1>
                        <div class="stories-carousel">
                        
                            <Slider {...settings}>
                                <div className="S_CARD1">
                                    <div>
                                        <audio ref={Audio1} className="Audio1" src="mp3/01.ogg" type='audio/ogg'/>
                                        <div className="s_box">
                                            <div className="s_visualizer"></div>
                                        </div>
                                        <div className="s_play" onClick={CLICK_BTN_1}>
                                            <div className={Btn1}></div>
                                        </div>
                                    </div>
                                    <p>حسن دشتي</p>
                                </div>

                                <div  className="S_CARD1">
                                    <div>
                                        <audio ref={Audio2} className="Audio2" src="mp3/02.ogg" type='audio/ogg'/>
                                        <div className="s_box2">
                                            <div className="s_visualizer2"></div>
                                        </div>
                                        <div className="s_play2" onClick={CLICK_BTN_2}>
                                            <div className={Btn2}></div>
                                        </div>
                                    </div>
                                    <p>خالد المصيجر</p>
                                </div>

                                <div className="S_CARD1">
                                    <div>
                                        <audio ref={Audio3} className="Audio3" src="mp3/03.mpeg" type='audio/mpeg'/>
                                        <div className="s_box3">
                                            <div className="s_visualizer3"></div>
                                        </div>
                                        <div className="s_play3" onClick={CLICK_BTN_3}>
                                            <div className={Btn3}></div>
                                        </div>
                                    </div>
                                    <p>خليفة العجيل</p>
                                </div>

                                <div className="S_CARD1">
                                    <div>
                                        <audio ref={Audio4} className="Audio4" src="mp3/04.ogg" type='audio/ogg'/>
                                        <div className="s_box4">
                                            <div className="s_visualizer4"></div>
                                        </div>
                                        <div className="s_play4" onClick={CLICK_BTN_4}>
                                            <div className={Btn4}></div>
                                        </div>
                                    </div>
                                    <p>زامل الزامل</p>
                                </div>

                                <div className="S_CARD1">
                                   <div>
                                    <audio ref={Audio5} className="Audio5" src="mp3/05.ogg" type='audio/ogg'/>
                                        <div className="s_box5">
                                            <div className="s_visualizer5"></div>
                                        </div>
                                        <div className="s_play5" onClick={CLICK_BTN_5}>
                                            <div className={Btn5}></div>
                                        </div>
                                   </div>
                                   <p>فيصل العدواني</p>
                                </div>

                                <div className="S_CARD1">
                                   <div>
                                        <audio ref={Audio6} className="Audio6" src="mp3/06.ogg" type='audio/ogg'/>
                                        <div className="s_box6">
                                            <div className="s_visualizer6"></div>
                                        </div>
                                        <div className="s_play6" onClick={CLICK_BTN_6}>
                                            <div className={Btn6}></div>
                                        </div>
                                   </div>
                                   <p>محمد خاجه</p>
                                </div>
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
  );
}

export default Stories;
