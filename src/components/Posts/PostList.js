import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { findAllPosts } from "../../actions/posts-actions";

import PostItem from "./PostItem";

const PostList = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        findAllPosts(dispatch)
    }, []);

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

    return (<div className="container">
        {groupedPosts.map(group => {
            return (
                <div className="row">
                    {group.map(post => { return (<PostItem post={post} />) })}
                </div>
            )
        })}


    </div>);
}
export default PostList;