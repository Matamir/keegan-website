import { CREATE_COMMENT, DELETE_COMMENT, FIND_ALL_COMMENTS, UPDATE_COMMENT, FIND_COMMENTS_BY_POST, FIND_COMMENTS_BY_USER } from "../actions/comments-actions";

const commentsReducer = (state = [], action) => {
    
    
    switch (action.type) {
        case FIND_COMMENTS_BY_POST:
            return action.comments;
        case FIND_COMMENTS_BY_USER:
            return action.comments;
        case FIND_ALL_COMMENTS:
            return action.comments;
        case CREATE_COMMENT:
            return [...state, action.newComment];
        case DELETE_COMMENT:
            return state.filter(comment => comment._id !== action.comment._id);
        case UPDATE_COMMENT:
            return state.map(comment => comment._id === action.comment._id ?
                action.comment : comment);
        default:
            return state;
    }
}
export default commentsReducer;