import * as restApi from "./restApi";
import * as restApiCourseMocked from "./restApiCourseMocked";

export default process.env.MOCKED ? restApiCourseMocked : restApi;
