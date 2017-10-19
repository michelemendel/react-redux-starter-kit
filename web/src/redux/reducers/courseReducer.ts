import {actionTypes as types} from "../../common/constants";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    let otherCourses;
    let updatedCourse;

    switch (action.type) {

    case types.UPDATE_FIELD:
        const currCourse = state.filter(course => course.id === action.id)[0];
        updatedCourse = Object.assign({}, currCourse, {[action.field]: action.value});
        otherCourses = state.filter(course => course.id !== action.id);

        return [...otherCourses, updatedCourse];

    case types.COURSES_LOAD_SUCCESS:
        return action.courses;

    case types.COURSE_CREATE_SUCCESS:
        otherCourses = state;
        const newCourse = Object.assign({}, action.course);

        return [...otherCourses, newCourse];

    case types.COURSE_UPDATE_SUCCESS:
        otherCourses = state.filter(course => course.id !== action.course.id);
        updatedCourse = Object.assign({}, action.course);

        return [...otherCourses, updatedCourse];

    default:
        return state;
    }

}
