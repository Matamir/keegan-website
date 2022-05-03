import axios from 'axios';
const POSTS_API = 'https://plartsta.herokuapp.com/api/posts'

export const findAllPosts = async () => {
    const res = await axios.get(POSTS_API);
    const posts = res.data;
    return posts;
}


export const createPost = async (post) => { 
    const res = await axios.post(POSTS_API, post);
    return res.data;
}

export const updatePost = async (post) => {
    const res = await axios.put(`${POSTS_API}/${post._id}`, post);
    return res.data;
}

export const findPostById = async (pid) => {
    const res = await axios.get(`${POSTS_API}/${pid}`);
    return res.data;
}