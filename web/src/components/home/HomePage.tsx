import * as React from "react";
import {Link} from "react-router-dom";
import {Jumbotron, Button} from "reactstrap";

const HomePage = () => {
    return (
        <Jumbotron className="home">
            <h1>React-Redux Starter Kit</h1>
            <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </Jumbotron>
    );
};

export default HomePage;