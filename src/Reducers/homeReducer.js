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
  SET_MEAL_LIST,
  SET_SNACK_LIST,
  SET_SOUP_LIST,
  SET_COUPON,
  SET_WALLET,
} from "../Actions/types";

const initialState = {
  user: [],
  PackageList:false,
  PackageDetails:false,
  DeliveryTime:false,
  DeliveryMethod:false,
  UserAddress:false,
  UserWallet:false,
  AreaList:false,
  Refresh:false,
  DislikeItems:false,
  ReadMore:false,

  MealsList:false,
  SnacksList:false,
  SoupsList:false,
  
  Coupon:false,
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
    case SET_DELIVERY_TIME:
        return {
          ...state,
          DeliveryTime: action.payload,
        };
    case SET_DELIVERY_METHOD:
        return {
          ...state,
          DeliveryMethod: action.payload,
        };
    case SET_ADDRESS:
        return {
          ...state,
          UserAddress: action.payload,
        };
    case SET_AREA_LIST:
        return {
          ...state,
          AreaList: action.payload,
        };
    case SET_REFRESH:
        return {
          ...state,
          Refresh: action.payload,
        };
    case SET_DISLIKE_ITEMS:
        return {
          ...state,
          DislikeItems: action.payload,
        };
    case SET_READ_MORE:
        return {
          ...state,
          ReadMore: action.payload,
        };
  case SET_MEAL_LIST:
        return {
          ...state,
          MealsList: action.payload,
        };
  case SET_SNACK_LIST:
        return {
          ...state,
          SnacksList: action.payload,
        };
  case SET_SOUP_LIST:
        return {
          ...state,
          SoupsList: action.payload,
        };
  case SET_COUPON:
          return {
            ...state,
            Coupon: action.payload,
          };
  case SET_WALLET:
          return {
            ...state,
            UserWallet: action.payload,
          };
        
    default:
			return state;
  }
};

export default homeReducer;
