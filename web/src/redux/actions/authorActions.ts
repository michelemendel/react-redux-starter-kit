import authorApi from "../../api/restApiAuthorConfig";
import {actionTypes as types} from "../../common/constants";
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
    return {type: types.AUTHORS_LOAD_SUCCESS, authors};
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            }).catch(error => {
                throw(error);
            });
    };
}
