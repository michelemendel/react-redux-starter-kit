import * as React from "react";
import {Link} from "react-router-dom";
import {Jumbotron, Button} from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// FA Regular
import faQuestionCircle from "@fortawesome/fontawesome-free-regular/faQuestionCircle";

// FA Solid
import faCoffeeSolid from "@fortawesome/fontawesome-free-solid/faCoffee";
import faQuestionCircleSolid from "@fortawesome/fontawesome-free-solid/faQuestionCircle";
import faUploadSolid from "@fortawesome/fontawesome-free-solid/faUpload";
import faSpinnerSolid from "@fortawesome/fontawesome-free-solid/faSpinner";
import faCalendarSolid from "@fortawesome/fontawesome-free-solid/faCalendar";


const icons = [faQuestionCircle, faQuestionCircleSolid, faUploadSolid];

const styleFa = {
    marginBottom: "1rem",
};

function cal(date) {
    const dx = date < 10 ? "3px" : "-6px";
    const dy = "0px";

    return (
        <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCalendarSolid} size="3x" transform="down-2"/>

        <span className="fa-layers-text fa-inverse" style={
            {
                fontWeight: 900,
                fontSize: "1.5em",
                transform: `translate(${dx}, ${dy})`,
            }
        }>{date}</span>
        </span>
    );
}

const HomePage = () => {
    return (
        <div>

            <Jumbotron className="home">
                <h1>React-Redux Starter Kit</h1>

                <FontAwesomeIcon size="3x" icon={faCoffeeSolid}/>

                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </Jumbotron>

            <h5>Fontawesome 5</h5>

            <div style={styleFa}>
                <h6>Regular and Solid</h6>
                {
                    icons.map((font, i) =>
                        <span key={i}><FontAwesomeIcon icon={font}/>{" "}</span>
                    )
                }
            </div>

            <div style={styleFa}>
                <h6>Large</h6>
                {
                    icons.map((font, i) =>
                        <span key={i}><FontAwesomeIcon icon={font} size="lg"/>{" "}</span>
                    )
                }
            </div>

            <div style={styleFa}>
                <h6>Larger</h6>
                {
                    icons.map((font, i) =>
                        <span key={i}><FontAwesomeIcon icon={font} size="4x"/>{" "}</span>
                    )
                }
            </div>

            <div style={styleFa}>
                <h6>Spinner</h6>
                <span><FontAwesomeIcon icon={faSpinnerSolid} spin size="6x"/>{" "}</span>
                <span><FontAwesomeIcon icon={faSpinnerSolid} pulse size="6x"/>{" "}</span>
                <span><FontAwesomeIcon icon={faCoffeeSolid} spin size="6x"/>{" "}</span>
            </div>

            <div style={styleFa}>
                <h6>Layers</h6>
                <div>{cal(1)}</div>
            </div>

        </div>
    );
};

export default HomePage;
