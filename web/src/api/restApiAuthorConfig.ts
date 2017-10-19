import * as restApi from "./restApi";
import * as restApiAuthorMocked from "./restApiAuthorMocked";

export default process.env.MOCKED ? restApiAuthorMocked : restApi;

