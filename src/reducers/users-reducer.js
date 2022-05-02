import { FIND_ALL_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, FIND_USER_CREDENTIALS, FIND_USER_USERNAME, FIND_USER_ID } from "../actions/users-actions.js";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_CREDENTIALS:
            return action.user;
        case FIND_USER_USERNAME:
            return action.user;
        case FIND_ALL_USERS:
            return action.users;
        case CREATE_USER:
            return action.newUser;
        case DELETE_USER:
            return state.filter(user => user._id !== action.user._id);
        case UPDATE_USER:
            return state.map(user => user._id === action.user._id ?
                action.user : user);
        case FIND_USER_ID:
            return action.user;
        default:
            return state;
    }
}
export default usersReducer;