import React, { useEffect, useState } from "react";
import { updatePost } from "../../actions/posts-actions";
import { useDispatch } from 'react-redux';
import { updateUser } from "../../actions/users-actions";

const PostItem = ({
    post = {
        username: 'standInUsername',
        caption: 'stand in caption',
        likes: "stand in likes",
        timestamp: "stand in timestamp",
        image: "stand in image",
        _id: "stand in ID"
    }, like,
    userFound = {
        _id: "stand in ID",
        username: "stand in username",
        password: "stand in password",
        following: ["stand in following"],
        bio: "stand in bio",
        pfp: "stand in pfp",
        userType: "stand in userType",
        likes: ["stand in likes"],
        comments: ["stand in comments"],
    },
}
) => {

    let username = localStorage.username;

    const dispatchP = useDispatch();
    const dispatchU = useDispatch();

    const [liked, setLiked] = useState(like);
    const colorInit = liked ? "red" : "black"
    const [color, setColor] = useState(colorInit);

    function likeClicked() {
        const nextColor = color === "black" ? "red" : "black";
        if (color === "black") {
            updatePost(dispatchP, { ...post, likes: post.likes + 1 });
            let newLikes = userFound.likes.concat({pid:post._id});
            updateUser(dispatchU, {...userFound, likes: newLikes});
        } else {
            updatePost(dispatchP, { ...post, likes: post.likes - 1 });
            let newLikes = userFound.likes.filter(l => l.pid !== post._id)
            updateUser(dispatchU, {...userFound, likes: newLikes});
        }

        setColor(nextColor);
        setLiked(!liked)
    }


    let link = "post/" + post._id;

    return (<>
        <div class="col border border-dark">
            {post.username}
            <a href={link}><img className="postImage" src={post.image} /></a>
            {post.caption}
            <br />
            <div className="row">
                <div className="col"><i class="fas fa-heart" style={{ color: color }} onClick={() => { (username == undefined || username == "undefined") ? window.location = './signin' : likeClicked() }}>{post.likes}</i></div>
                <div className="col"><p>{post.timestamp.substring(0, 10)}</p></div>
            </div>

        </div>
    </>);
}
export default PostItem;