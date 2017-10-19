import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
