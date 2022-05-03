import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPostById } from '../../actions/posts-actions';
import { createComment, findCommentsByPost } from "../../actions/comments-actions";
import Comments from "./PostComments.js";
import { findAllUsers, findUserbyUsername, updateUser } from "../../actions/users-actions";


const PostPage = () => {
    const USER_ID = localStorage._id;
    const USER_USERNAME = localStorage.username;

    let { id } = useParams();
    // const users = useSelector((state) => state.users);
    // const dispatchU = useDispatch();
    // console.log(user);

    const comments = useSelector((state) => state.comments);
    const dispatchC = useDispatch();

    const postByID = useSelector((state) => state.posts);
    const dispatchP = useDispatch();

    useEffect(() => {
        findCommentsByPost(dispatchC, id);
        findPostById(dispatchP, id);
        // findAllUsers(dispatchU);
    }, []);


    // let user = users.filter(u => u.username === USER_USERNAME)
    // if (user.length != 0) {
    //     user = user[0];
    // }

    const [newComment, setNewComment] = useState({ pid: id, uid: USER_ID, text: "" });

    function commentClicked() {
        if (newComment.text !== "") {
            createComment(dispatchC, newComment);
            // let updateComments = [].concat(user.comments);
            // updateComments.push(newComment.uid);

            // console.log(user);
            // console.log(updateComments);
            // let newUser = { ...user, "comments": updateComments }
            // console.log(newUser);
            // updateUser(dispatchU, newUser)
        }
    }

    // console.log(id);
    // console.log(comments);
    // console.log(postByID);

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
                        <button className="commentButton btn-primary btn" onClick={() => { commentClicked(); }}>Comment</button>
                    </div>
                    <ul>{comments.map(comment => { return (<Comments comment={comment} user={{ uid: USER_ID }} />) })}</ul>
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