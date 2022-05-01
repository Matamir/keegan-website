import * as service from '../services/posts-service';

export const FIND_ALL_POSTS = 'FIND_ALL_POSTS';

export const findAllPosts = async (dispatch) => {
    const posts = await service.findAllPosts();
    dispatch({
        type: FIND_ALL_POSTS,
        posts
    });
}