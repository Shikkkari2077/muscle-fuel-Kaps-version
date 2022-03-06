import { 
  SET_REGISTER,
  SET_PACKAGE_LIST,
  SET_PACKAGE_DETAILS,
  SET_DELIVERY_TIME,
  SET_DELIVERY_METHOD,
  SET_ADDRESS,
  SET_AREA_LIST,
  SET_REFRESH,
  SET_DISLIKE_ITEMS,
  SET_READ_MORE,
 } from "./types";

import Constant from "../Constant";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("es_token")}`,
    "Content-Type": "multipart/form-data",
  },
};

export const onRegister = (data) => (dispatch)=>{
  dispatch({
    type:SET_REFRESH,
    payload:true
  })  
  axios
    .post(Constant.getAPI() + `/userregistration`, data, config)
    .then((res) => {
      if(res.data.data){

        toast.success("Registered Successfully!", {
          position: toast.POSITION.TOP_RIGHT
        });

        localStorage.setItem('user_id',res.data.data.user_id)
        localStorage.setItem('first_name',res.data.data.first_name)
        localStorage.setItem('last_name',res.data.data.last_name)
        localStorage.setItem('email',res.data.data.email)
        localStorage.setItem('mobile_no',res.data.data.mobile_no)

        dispatch({
          type:SET_REFRESH,
          payload:false
        })  
        window.location.href = '#/'
        window.location.reload()
      }else if(res.data.error_msg=='Referral code not found'){
        toast.success('Referral code is Wrong or Expired', {
          position: toast.POSITION.TOP_RIGHT
        });

        dispatch({
          type:SET_REFRESH,
          payload:false
        })  
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};


export const onLogin = (data) => (dispatch)=>{
  dispatch({
    type:SET_REFRESH,
    payload:true
  })  
  axios
    .post(Constant.getAPI() + `/userlogin`, data, config)
    .then((res) => {
      if(res.data.data){

        toast.success("Logged In Successfully!", {
          position: toast.POSITION.TOP_RIGHT
        });

        localStorage.setItem('user_id',res.data.data.user_id)
        localStorage.setItem('first_name',res.data.data.first_name)
        localStorage.setItem('last_name',res.data.data.last_name)
        localStorage.setItem('email',res.data.data.email)
        localStorage.setItem('mobile_no',res.data.data.mobile_no)

        dispatch({
          type:SET_REFRESH,
          payload:false
        })  

        window.location.href = '#/'
        window.location.reload()
      }else{
        dispatch({
          type:SET_REFRESH,
          payload:false
        })  
        toast.success("User Not Exist!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const onLogOut = (data) => (dispatch)=>{
      localStorage.clear()

      toast.success("Logged Out Successfully!", {
          position: toast.POSITION.TOP_RIGHT
        });

        window.location.href = '#/'
};

export const getPackageList = (data) => (dispatch)=>{

  axios
    .post(Constant.getAPI() + `/packagetypelist`, data, config)
    .then((res) => {

          if(res.data){

            dispatch({
              type:SET_PACKAGE_LIST,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getPackageDetails = (data) => (dispatch)=>{

  axios
    .post(Constant.getAPI() + `/packagelistV2`, data, config)
    .then((res) => {
      
          if(res.data){
              // console.log('res.data',res.data.data);
            dispatch({
              type:SET_PACKAGE_DETAILS,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getDeliveryTime = (data) => (dispatch)=>{

  axios
    .post(Constant.getAPI() + `/DeliveryTime`, data, config)
    .then((res) => {
      
          if(res.data){
              console.log('res.data',res.data.data);
            dispatch({
              type:SET_DELIVERY_TIME,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getDeliveryMethod = (data) => (dispatch)=>{

  axios
    .post(Constant.getAPI() + `/DeliveryMethod`, data, config)
    .then((res) => {
      
          if(res.data){
              console.log('res.data',res.data.data);
            dispatch({
              type:SET_DELIVERY_METHOD,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getDislikeItems = (data) => (dispatch)=>{
  axios
    .post(Constant.getAPI() + `/ingredientlist`, data, config)
    .then((res) => {
      
          if(res.data){
            dispatch({
              type:SET_DISLIKE_ITEMS,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getReadMore = (data) => (dispatch)=>{
  axios
    .post(Constant.getAPI() + `/generalnote`, data, config)
    .then((res) => {
      
          if(res.data){
            dispatch({
              type:SET_READ_MORE,
              payload:res.data.data
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getUserAddress = (data) => (dispatch)=>{
  
  var formData =new FormData
      formData.append('user_id',localStorage.getItem('user_id'))
  var DATA = formData

  axios
    .post(Constant.getAPI() + `/getuserprofile`, DATA, config)
    .then((res) => {
      
          if(res.data){
              console.log('res.data',res.data.data.address);
            dispatch({
              type:SET_ADDRESS,
              payload:res.data.data.address
            })
            
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getAreaList = (data) => (dispatch)=>{
  
  var formData =new FormData
      formData.append('language_id',1)

  var DATA = formData

  axios
    .post(Constant.getAPI() + `/arealist`, DATA, config)
    .then((res) => {
      
          if(res.data){
              var areaList = []
              var areas = res.data.data.map((area)=>{
                areaList = areaList.concat(area.areas)
              })
              dispatch({
                type:SET_AREA_LIST,
                payload:areaList
              })
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addAddress = (data) => (dispatch)=>{
  dispatch({
    type:SET_REFRESH,
    payload:true
  })  
  axios
    .post(Constant.getAPI() + `/addaddress`, data, config)
    .then((res) => {
      
          if(res.data.data){
              toast.success("Address Updated", {
                position: toast.POSITION.TOP_RIGHT
              });
              dispatch({
                type:SET_REFRESH,
                payload:false
              })  
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const purchasePackage = (data,payData) => (dispatch)=>{
  console.log('payData',payData);

  dispatch({
      type:SET_REFRESH,
      payload:true
  })  
  axios
    .post(Constant.getAPI() + `/purchasepackage`, data, config)
    .then((res) => {
      
          if(res.data.data){
           
              dispatch({
                type:SET_REFRESH,
                payload:false
              })  

              toast.success("Proceed To Payment", {
                position: toast.POSITION.TOP_RIGHT
              });
              
              
                window.open(`${Constant.getPaymentAPI()}payment/index.php?custname=${
                  localStorage.getItem('first_name')+localStorage.getItem('last_name')
                }&custemail=${localStorage.getItem('email')}&phone=${localStorage.getItem('mobile_no')}&totAmount=${
                  payData.totalAmount
                }&productnames=testProduct&order_id_app=${res.data.data.purchase_id}&user_id=${
                  localStorage.getItem('user_id')
                }`,"_blank")
              
              

              // window.location.href = '#/ThankYou'
          }else{
            dispatch({
              type:SET_REFRESH,
              payload:false
            })  
            toast.error(`You Already Have a Package`,{
              position: toast.POSITION.TOP_RIGHT
            });
          }
    })
    .catch((err) => {
      console.log(err.message);
    });
};