import {actionTypes as types} from "../../common/constants";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
    case types.AUTHORS_LOAD_SUCCESS:
        return action.authors;

    default:
        return state;
    }
}
