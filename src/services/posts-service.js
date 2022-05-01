import axios from 'axios';
const POSTS_API = 'http://localhost:4000/api/posts'

export const findAllPosts = async () => {
    const res = await axios.get(POSTS_API);
    const posts = res.data;
    return posts;
}