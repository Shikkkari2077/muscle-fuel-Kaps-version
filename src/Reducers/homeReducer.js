import { SET_REGISTER, SET_PACKAGE_LIST, SET_PACKAGE_DETAILS } from "../Actions/types";

const initialState = {
  user: [],
  PackageList:false,
  PackageDetails:false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_PACKAGE_LIST:
      return {
        ...state,
        PackageList: action.payload,
      };
    case SET_PACKAGE_DETAILS:
        return {
          ...state,
          PackageDetails: action.payload,
        };
    default:
			return state;
  }
};

export default homeReducer;
