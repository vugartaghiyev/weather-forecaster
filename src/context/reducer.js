import { SET_CITY_NAME } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CITY_NAME:
      return { ...state, cityName: action.payload };
    default:
      return state;
  }
};
