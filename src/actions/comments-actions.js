import * as service from '../services/comments-service.js';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FIND_ALL_COMMENTS = 'FIND_ALL_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export const createComment = async (dispatch, comment) => {
    const newComment = await service.createComment(comment);
    dispatch({
        type: CREATE_COMMENT,
        newComment
    });
}

export const findAllComments = async (dispatch) => {
    const comments = await service.findAllComments();
    dispatch({
        type: FIND_ALL_COMMENTS,
        comments
    });
}

export const updateComment = async (dispatch, comment) => {
    const status = await service.updateComment(comment);
    dispatch({
        type: UPDATE_COMMENT,
        comment
    });
}

export const deleteComment = async (dispatch, comment) => {
    const res = await service.deleteComment(comment);
    dispatch({
        type: DELETE_COMMENT,
        comment
    });
}
