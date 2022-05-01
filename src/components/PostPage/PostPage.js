import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findAllPosts } from '../../actions/posts-actions';
import { findAllComments } from '../../actions/comments-actions';


const PostPage = () => {
    let { id } = useParams();
    const comments = useSelector((state) => state.comments);
    const dispatch1 = useDispatch();

    const posts = useSelector((state) => state.posts);
    const dispatch2 = useDispatch();
    useEffect(() => {
        findAllComments(dispatch1)
        findAllPosts(dispatch2);
    }, []);

    console.log(posts);
    console.log(id);
    let postByID = posts.filter(p => p._id == id)[0];

    if (id !== undefined && postByID !== undefined) {
        return (
            <div className="mt-2 homePageCustom text-monospace">

                <div className="postPage">
                    <a href="https://www.instagram.com/plartsta/" className="text-dark" target="_blank">
                        <div className="postPageUsername">{postByID.username}</div>
                    </a>
                    <img className="postPageImage" src={postByID.image} />
                    <div className="text-center">{postByID.caption}</div>
                </div>
                <div className="postPageComments">
                    postByID.comments
                </div>
            </div>

        )
    }
    else {
        return (
            <div>
                <div className="notFound text-center">
                    404
                </div>
                <div className="text-center">
                    <h3>Could not find post</h3>
                    <a href="../">Go Back</a>
                </div>

            </div>
        )
    }
}
export default PostPage;