/*eslint-disable import/default */

import "./style/main.scss";
import "babel-polyfill";

// React
import * as React from "react";
import {render} from "react-dom";

// Redux
import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";

// Router
import createHistory from "history/createBrowserHistory";

// Application
import {loadCourses} from "./redux/actions/courseActions";
import {loadAuthors} from "./redux/actions/authorActions";

// Application pages
import App from "./components/App";
import {HexBase64Latin1Encoding} from "crypto";

const history = createHistory();
const store = configureStore(history);

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);

