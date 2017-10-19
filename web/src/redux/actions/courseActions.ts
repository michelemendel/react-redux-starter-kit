/* eslint-disable no-console */

import {actionTypes as types} from "../../common/constants";
import courseApi from "../../api/restApiCourseConfig";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import {ICourse} from "../../data/interfaces";

export function updateField(id, field, value) {
    return {type: types.UPDATE_FIELD, id, field, value};
}

export function loadCoursesSuccess(courses) {
    return {type: types.COURSES_LOAD_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.COURSE_CREATE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.COURSE_UPDATE_SUCCESS, course};
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    };
}

export function saveCourse(course: ICourse) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
            .then((course: ICourse) => {
                course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
            })
            .catch(error => {
                dispatch(ajaxCallError());
                throw(error);
            });
    };
}
