// authReducer.js
import { loadState, saveState } from "./sessionStorage";
const user = "user";
const isAuthenticated = "isAuthenticated";
const initialState = {
  user: loadState(user,null),
  isAuthenticated: loadState(isAuthenticated,false),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
        saveState(user,action.payload)
        saveState(isAuthenticated,true)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT_SUCCESS':
        saveState(user,null)
        saveState(isAuthenticated,false)
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
