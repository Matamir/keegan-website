import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { findAllPosts } from "../../actions/posts-actions";
import { findAllUsers } from "../../actions/users-actions";

import PostItem from "./PostItem";

const PostList = () => {

    let { id } = useParams();

    let posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();



    let username = localStorage.username;
    const users = useSelector((state) => state.users);
    const dispatchU = useDispatch();


    useEffect(() => {
        findAllUsers(dispatchU);
        findAllPosts(dispatch)
    }, []);


    const userFiltered = users.filter(user => user.username === username);
    let userFound;
    if (userFiltered.length > 0) {
        userFound = userFiltered[0];
    }

    // filter by search parameter if one is given.
    if (id !== undefined) {
        posts = posts.filter(p => p.caption.includes(id))
    }

    // Create the post grouping, three wide.
    let groupedPosts = [[]];
    let group = 0;
    posts.map((post, index) => {
        if (index % 3 === 0) {
            group += 1;
            groupedPosts.push([])
        }
        let groupArray = groupedPosts[group]
        groupArray.push(post);
    })

    if (posts.length === 0 && id !== undefined) {
        return (
            <div className="text-center mt-5">
                <h1>Could not find post</h1>
                <a href="../">Go Back</a>
            </div>
        )
    } else {
        if (userFound !== undefined) {
            return (<div className="container">
                {groupedPosts.map(group => {
                    return (
                        <div className="row">
                            {group.map(post => {
                                let likeInit = false;
                                let likedPosts = userFound.likes
                                likedPosts = likedPosts.filter(l => l !== "");
                                likedPosts = likedPosts.filter(l => l.pid == post._id);
                                if (likedPosts.length !== 0) {
                                    likeInit = true;
                                }
                                return (<PostItem post={post} like={likeInit} userFound={userFound} />)
                            })}
                        </div>
                    )
                })}


            </div>);
        } else {
            return (<div className="container">
                {groupedPosts.map(group => {
                    return (
                        <div className="row">
                            {group.map(post => {
                                let likeInit = false;
                                return (<PostItem post={post} liked={likeInit} />)
                            })}
                        </div>
                    )
                })}


            </div>);
        }
    }
}
export default PostList;