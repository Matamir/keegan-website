import React, { useState } from "react";
import { updatePost } from "../../actions/posts-actions";
import { useDispatch, useSelector } from 'react-redux';

const PostItem = ({
    post = {
        username: 'standInUsername',
        caption: 'stand in caption',
        likes: "stand in likes",
        timestamp: "stand in timestamp",
        image: "stand in image",
        id:"stand in ID"
    }
}
) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(null);
    const [color, setColor] = useState("black");

    function likeClicked() {
        const nextColor = color === "black" ? "red" : "black";
        color === "black" ? updatePost(dispatch, {...post, likes: post.likes + 1}) : updatePost(dispatch, {...post, likes: post.likes - 1});
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
                <div className="col"><i class="fas fa-heart" style={{ color: color }} onClick={() => { likeClicked() }}>{post.likes}</i></div>
                <div className="col"><p>{post.timestamp}</p></div>
            </div>

        </div>
    </>);
}
export default PostItem;