/****************************************************************
 * HTTP
 */

// HTTP methods
export const httpMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
};

// HTTP status codes
export const HTTP_STATUS = {
    R200: {status: 200, message: "OK"},
    R201: {status: 201, message: "Created"},
    R204: {status: 204, message: "No Content"},
    R400: {status: 400, message: "Bad Request"},
    R401: {status: 401, message: "Unauthorized"},
    R404: {status: 404, message: "Not Found", httpStatusText: "NOT_FOUND"},
    R403: {status: 403, message: "Forbidden", httpStatusText: "FORBIDDEN"},
    R409: {status: 409, message: "Conflict"},
    R422: {status: 422, message: "Unprocessable Entity", httpStatusText: "UNPROCESSABLE_ENTITY"},
    R429: {status: 429, message: "To Many Requests"},
    R500: {status: 500, message: "Internal Server Error", httpStatusText: "SERVER_ERROR"},
    R501: {status: 501, message: "Not Implemented", httpStatusText: "NOT_IMPLEMENTED"}
};

/****************************************************************
 * REST API
 */
export const REST = {
    ROOT: "kjoreseddel",
    VERSION: "v1.0",
};

/****************************************************************
 * Redux action types
 */
export const actionTypes = {
    AJAX_CALL_BEGIN: "BEGIN_AJAX_CALL",
    AJAX_CALL_ERROR: "AJAX_CALL_ERROR",
    RESPONSE_TYPE_ERROR: "error",
    RESPONSE_TYPE_WARNING: "warning",
    RESPONSE_TYPE_INFO: "info",
    RESPONSE_TYPE_SUCCESS: "success",

    COURSES_LOAD_SUCCESS: "COURSES_LOAD_SUCCESS",
    AUTHORS_LOAD_SUCCESS: "AUTHORS_LOAD_SUCCESS",
    COURSE_CREATE_SUCCESS: "COURSE_CREATE_SUCCESS",
    COURSE_UPDATE_SUCCESS: "COURSE_UPDATE_SUCCESS",

    UPDATE_FIELD: "UPDATE_FIELD"
};

