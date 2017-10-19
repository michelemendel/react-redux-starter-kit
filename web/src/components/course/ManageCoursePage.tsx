/* eslint-disable no-console */

import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import CourseForm from "./CourseForm";
import {authorsFormattedForDropdown} from "../selectors/selectors";
import toastr from "toastr";
import {emptyCourse} from "../../redux/reducers/initialState";
import {ICourse} from "../../data/interfaces";

interface IProps {
    history: { push }
    course: ICourse
    authors: Array<any>
    actions: {
        updateField: Function,
        saveCourse: Function
    }
}

interface IState {
    course: ICourse
    errors: { title: string }
    saving: boolean
}

export class ManageCoursePage extends React.Component<IProps, IState> {

    constructor(props, context) {
        super(props, context);

        toastr.options = {
            progressBar: true,
            preventDuplicates: true,
            newestOnTop: true,
            closeButton: false,
            showDuration: 200,
            hideDuration: 1000,
            timeOut: 3000,
            extendedTimeOut: 6000,
            positionClass: "toast-top-right"
        };

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        } as IState;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState() {
        return (event) => {
            const field = event.target.name;
            const value = event.target.value;

            // This or...
            // this.props.actions.updateField(this.state.course.id, field, value);

            // ...this
            let course = Object.assign({}, this.state.course);
            course[field] = value;
            return this.setState({course: course});
        };
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {title: ""};

        if (this.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters.";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }


    saveCourse() {
        return (event) => {
            event.preventDefault();

            if (!this.courseFormIsValid()) {
                return;
            }

            this.setState({saving: true});

            this.props.actions.saveCourse(this.state.course)
                .then(() => this.redirect())
                .catch(error => {
                    toastr.error(error);
                    this.setState({saving: false});
                });
        };
    }

    redirect() {
        this.setState({saving: false});
        toastr.success("Course saved");
        // this.props.history.push("/courses");
    }

    render() {
        return (
            <div className="course-form">
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState()}
                    onSave={this.saveCourse()}
                    course={this.state.course}
                    errors={this.state.errors}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}


function getCourseById(courses, id) {
    const course = courses.filter((course) => course.id == id);

    return course.length > 0 ? course[0] : emptyCourse;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.location.pathname.replace(/^\/\w+\//, "");

    return {
        course: getCourseById(state.courses, courseId),
        authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
