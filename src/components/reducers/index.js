import { combineReducers } from "redux";
import auth from "./auth";
import question from "./question";
import userDetails from "./userDetails";

export default combineReducers({
    auth,
    question,
    userDetails
});