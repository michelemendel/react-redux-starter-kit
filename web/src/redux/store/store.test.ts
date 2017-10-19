import expect from "expect";
import {createStore} from "redux";
import rootReducer from "../reducers";
import initialState, {emptyCourse} from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";
import {IState} from "../../data/interfaces";

describe("Store", function () {
    it("Should handle creating courses", function () {

        // Arrange
        const store = createStore(rootReducer, initialState as IState);
        const expectedCourse = Object.assign({}, emptyCourse, {
            title: "Clean Code"
        });

        // Action
        const action = courseActions.createCourseSuccess(expectedCourse);
        store.dispatch(action);

        // Assert
        const actualCourse = (store.getState() as IState).courses[0];

        expect(actualCourse).toEqual(expectedCourse);
    });
});
