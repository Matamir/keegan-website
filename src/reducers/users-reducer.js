import { FIND_ALL_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from "../actions/users-actions.js";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            return action.posts;
        case CREATE_USER:
            return [...state, action.newUser];
        case DELETE_USER:
            return state.filter(user => user._id !== action.user._id);
        case UPDATE_USER:
            return state.map(user => user._id === action.user._id ? 
                action.user : user);
        default:
            return state;
    }
}
export default usersReducer;