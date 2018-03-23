import * as React from "react";
import {connect} from "react-redux";
// Router
import {BrowserRouter, HashRouter} from "react-router-dom";
import initRoutes from "../routes";
// Application
import Header from "./common/Header";
import ErrorBoundary from "./ErrorBoundary";

interface IProps {
    loading: boolean
}

class App extends React.Component<IProps, {}> {
    render() {
        return (
            <ErrorBoundary>
                <HashRouter>
                    <div className="container-fluid">
                        <Header loading={this.props.loading}/>

                        <hr/>

                        {initRoutes()}

                    </div>
                </HashRouter>
            </ErrorBoundary>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
