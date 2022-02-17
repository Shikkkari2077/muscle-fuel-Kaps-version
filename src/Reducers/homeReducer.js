import { SET_REGISTER } from "../Actions/types";

const initialState = {
  user: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    default:
			return state;
  }
};

export default homeReducer;
