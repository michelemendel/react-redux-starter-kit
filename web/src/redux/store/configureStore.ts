/* eslint-disable no-underscore-dangle */
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {routerMiddleware} from "react-router-redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(history, initialState?) {

    const windowIfDefined = typeof window === "undefined" ? null : window as any;
    const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middleWare = process.env.PRODUCTION
        ? [thunk, routerMiddleware(history)]
        : [thunk, routerMiddleware(history), reduxImmutableStateInvariant(), createLogger()];

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleWare))
    );

}

