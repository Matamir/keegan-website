import axios from 'axios';
const COMMENTS_API = 'https://plartsta.herokuapp.com/api/comments'

export const createComment = async (comment) => { 
    const res = await axios.post(COMMENTS_API, comment);
    return res.data;
}

export const findAllComments = async () => {
    const res = await axios.get(COMMENTS_API);
    const comments = res.data;
    return comments;
}

export const deleteComment = async (comment) => {
    const res = await axios.delete(`${COMMENTS_API}/${comment.id}`);
    return res.data;
}

export const updateComment = async (comment) => {
    const res = await axios.put(`${COMMENTS_API}/${comment._id}`, comment);
    return res.data;
}