import { FIND_ALL_POSTS, UPDATE_POSTS } from "../actions/posts-actions";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_POSTS:
            return action.posts;
        case UPDATE_POSTS:
            return state.map(post => post._id === action.post._id ?
                action.post : post);
        default:
            return state;
    }
}
export default postsReducer;