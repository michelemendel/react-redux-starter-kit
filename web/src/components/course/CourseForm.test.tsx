import * as React from "react";
import {mount, shallow} from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
    const props = {
        course: {},
        allAuthors: [],
        saving: saving,
        errors: {},
        // onSave: () => {},
        // onChange: () => {}
    };

    return shallow(<CourseForm {...props} />);
}

describe("CourseForm via Enzyme", () => {
    it("renders form and h3", () => {
        const wrapper = setup(false);
        expect(wrapper.find("h3").text()).toEqual("Manage Course");
    });

    it("save button is labeled \"Save\" when not saving", () => {
        const wrapper = setup(false);
        expect(wrapper.find("input").props().value).toEqual("Save");
    });

    it("save button is labeled \"Saving...\" when saving", () => {
        const wrapper = setup(true);
        expect(wrapper.find("input").props().value).toEqual("Saving...");
    });
});
