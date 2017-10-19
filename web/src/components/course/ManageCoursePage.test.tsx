import * as React from "react";
import expect from "expect";
import {mount, shallow} from "enzyme";
import {noOpRetVoid} from "../../common/utils";
import {ManageCoursePage} from "./ManageCoursePage";

describe("Manage Course Page", () => {
    it("sets error message when trying to save empty title", () => {
        const props = {
            history: {push: noOpRetVoid},
            course: {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""},
            authors: [],
            actions: {
                updateField: noOpRetVoid,
                saveCourse: noOpRetVoid
            },
        };

        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find("input").last();
        expect(saveButton.prop("type")).toBe("submit");
        saveButton.simulate("click");
        expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.");
    });
});
