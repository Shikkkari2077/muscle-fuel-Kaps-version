import { 
  SET_REGISTER,
  SET_PACKAGE_LIST,
  SET_PACKAGE_DETAILS,
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

      
        window.location.href = '#/'
        window.location.reload()
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};


export const onLogin = (data) => (dispatch)=>{

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

        window.location.href = '#/'
        window.location.reload()
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
