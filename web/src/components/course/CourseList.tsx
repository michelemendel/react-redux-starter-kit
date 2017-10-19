import * as React from "react";
import CourseListRow from "./CourseListRow";
import {Table} from "reactstrap";

interface IProps {
    courses: Array<any>
}

const CourseList = ({courses}) => {
    return (
        <div className="courses-table">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course}/>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default CourseList;
