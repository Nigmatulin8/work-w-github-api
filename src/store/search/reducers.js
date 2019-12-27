import { USER_SEARCH_REQUEST } from "./actions.js";

const defaultState = {
    search: '',
};

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_SEARCH_REQUEST:
            return {
                ...state,
                search: action.payload
            }
    }

    return state;
}