import * as React from "react";
import {connect} from "react-redux";
// Router
import {BrowserRouter, HashRouter, ConnectedRouter} from "react-router-dom";
import initRoutes from "../routes";
// Application
import Header from "./common/Header";

interface IProps {
    loading: boolean
}

class App extends React.Component<IProps, {}> {
    render() {
        return (
            <HashRouter>
                <div className="container-fluid">
                    <Header loading={this.props.loading}/>

                    <hr/>

                    {initRoutes()}

                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
