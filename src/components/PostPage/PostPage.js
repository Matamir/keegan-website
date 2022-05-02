import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPostById } from '../../actions/posts-actions';
import { createComment, findCommentsByPost } from "../../actions/comments-actions";
import Comments from "./PostComments.js";


const PostPage = () => {
    const USER_ID = localStorage._id;

    let { id } = useParams();
    const user = useSelector((state) => state.users);
    console.log(user);

    const comments = useSelector((state) => state.comments);
    const dispatchC = useDispatch();

    const postByID = useSelector((state) => state.posts);
    const dispatchP = useDispatch();
    useEffect(() => {
        findCommentsByPost(dispatchC, id);
        findPostById(dispatchP, id);
    }, []);


    const [newComment, setNewComment] = useState({ pid: id, uid: USER_ID, text: "" });

    function postClicked() {
        if (newComment.text !== "") {
            createComment(dispatchC, newComment);
        }
    }

    console.log(id);
    console.log(comments);
    console.log(postByID);

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
                    <div>
                        <input className="commentText" onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}></input>
                        <button className="commentButton btn-primary btn" onClick={() => { postClicked(); }}>Comment</button>
                    </div>
                    <ul>{comments.map(comment => { return (<Comments comment={comment} user={{ uid: USER_ID }} />) })}</ul>
                </div>
            </div>

        )
    }
    // onClick={   createComment(dispatchC, {text:}  }
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