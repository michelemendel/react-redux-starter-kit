import * as React from "react";
import {NavLink} from "react-router-dom";
import LoadingDots from "./LoadingDots";

interface IProps {
    loading: boolean
}

const Header = ({loading}) => {
    return (
        <nav className="header__nav">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>

            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

export default Header;
