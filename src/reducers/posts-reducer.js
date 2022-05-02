import { FIND_ALL_POSTS, FIND_POST_BY_ID, UPDATE_POSTS } from "../actions/posts-actions";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_POSTS:
            return action.posts;
        case UPDATE_POSTS:
            return state.map(post => post._id === action.post._id ?
                action.post : post);
        case FIND_POST_BY_ID:
            return action.post;
        default:
            return state;
    }
}
export default postsReducer;