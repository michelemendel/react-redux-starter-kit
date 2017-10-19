import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import {Button, ButtonToolbar} from "reactstrap";
import CourseList from "./CourseList";


interface IProps {
    history: {push}
    courses: Array<any>
    actions: object
}

class CoursesPage extends React.Component<IProps, any> {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        this.props.history.push("/course");
    }

    render() {
        const {courses} = this.props;

        return (
            <div className="courses">
                <h3>Courses</h3>

                <ButtonToolbar>
                    <Button
                        className="mr-1"
                        color="primary"
                        onClick={this.redirectToAddCoursePage}
                    >Add Course</Button>
                </ButtonToolbar>

                <CourseList courses={courses}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

//ActionCreatorsMapObject

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
