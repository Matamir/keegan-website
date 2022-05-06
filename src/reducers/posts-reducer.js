import { FIND_ALL_POSTS, FIND_POST_BY_ID, UPDATE_POSTS, CREATE_POST } from "../actions/posts-actions";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_POSTS:
            return action.posts;
        case UPDATE_POSTS:
            return state.map(post => post._id === action.post._id ?
                action.post : post);
        case FIND_POST_BY_ID:
            return action.post;
        case CREATE_POST:
            // Don't change state when creating post
            return [...state, action.newPost];
        default:
            return state;
    }
}
export default postsReducer;