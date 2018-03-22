/* eslint-disable no-console */

import * as React from "react";
import {pp} from "../common/utils";

interface Props {
}

interface State {
    error: string
    errorInfo: any
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            errorInfo: {}
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
        console.error("--->Error in React", error, errorInfo, typeof errorInfo);
    }

    render() {
        return (
            <div>
                {
                    this.state.error
                        ? (
                            <div>
                                <h3>Problem med React. Sjekk dev-tools-loggen.</h3>
                                {
                                    this.state.error && (
                                        <p>{this.state.error.toString()}</p>
                                    )
                                }

                                <h4>Component stack error details</h4>
                                <ul>
                                    {this.state.errorInfo.componentStack.split("\n").map((info, i) =>
                                        info && <li key={i}>{info}</li>
                                    )}
                                </ul>
                            </div>
                        )
                        : this.props.children
                }
            </div>
        );
    }
}
