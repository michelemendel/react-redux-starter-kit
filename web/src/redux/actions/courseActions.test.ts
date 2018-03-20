import * as courseActions from "./courseActions";
import {actionTypes as types} from "../../common/constants";

import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

// Test a sync action
describe("CourseActions: Sync", () => {
    describe("createCourseSuccess", () => {
        it("should create a CREATE_COURSE_SUCCESS action", () => {
            // Arrange
            const course = {id: "clean-code", title: "Clean Code"};
            const expectedAction = {
                type: types.COURSE_CREATE_SUCCESS,
                course: course
            };

            // Action
            const action = courseActions.createCourseSuccess(course);

            // Assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("CourseActions: Async", () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {
        // Here"s an example call to nock.
        // nock("http://example.com/")
        //   .get("/courses")
        //   .reply(200, { body: { course: [{ id: 1, firstName: "Cory", lastName: "House"}] }});

        const expectedActions = [
            {type: types.AJAX_CALL_BEGIN},
            {type: types.COURSES_LOAD_SUCCESS, body: {courses: [{id: "clean-code", title: "Clean Code"}]}}
        ];

        const store = mockStore({courses: []}, expectedActions, done);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.AJAX_CALL_BEGIN);
            expect(actions[1].type).toEqual(types.COURSES_LOAD_SUCCESS);
            done();
        });
    });
});
