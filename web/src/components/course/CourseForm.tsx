import * as React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import {Form} from "reactstrap";

interface IProps {
    course: { title, authorId, category, length }
    allAuthors: Array<any>
    onSave: Function
    onChange: Function
    saving: boolean
    errors: { title, authorId, category, length }
}

// const CourseForm:React.SFC<IProps> = ({course, allAuthors, onSave, onChange, saving, errors}) => {
const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <Form>
            <h3>Manage Course</h3>

            <TextInput
                name="title"
                label="Title"
                value={course.title}
                placeholder="title"
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                placeholder="category"
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                placeholder="length"
                onChange={onChange}
                error={errors.length}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? "Saving..." : "Save"}
                className="btn btn-primary"
                onClick={onSave}/>

        </Form>
    );
};


export default CourseForm;