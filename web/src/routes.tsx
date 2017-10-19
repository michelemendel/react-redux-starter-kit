import * as React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage"; //eslint-disable-line import/no-named-as-default

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path: "/courses", component: CoursesPage, exact: false},
    {path: "/course", component: ManageCoursePage, exact: true},
    {path: "/course/:id", component: ManageCoursePage, exact: false},
    {path: "/about", component: AboutPage, exact: false},
    {component: NoMatch, exact: false}
];

export default function initRoutes() {
    return <Switch>
        {routes.map((route, i) =>
            <RouteWithSubRoutes
                key={i}
                {...route}
            />
        )}
    </Switch>;
}

function RouteWithSubRoutes(route) {
    return <Route
        exact={route.exact}
        path={route.path}
        render={(props) => (
            <route.component {...props} routes={route.routes}/>
        )}
    />;
}

function NoMatch({location}) {
    return <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>;
}
