import React, { useState } from "react";

const PostItem = ({
    post = {
        username: 'standInUsername',
        caption: 'stand in caption',
        likes: "stand in likes",
        timestamp: "stand in timestamp",
        image: "stand in image",
    }
}
) => {
    const [liked, setLiked] = useState(null);
    const [color, setColor] = useState("black");

    function likeClicked() {
        const nextColor = color === "black" ? "red" : "black";
        setColor(nextColor);
        setLiked(!liked)
    }

    return (<>
        <div class="col border border-dark">
            {post.username}
            <a href="home/17966818138593040"><img className="postImage" src={post.image} /></a>
            {post.caption}
            <br />
            <i class="fas fa-heart" style={{color:color}} onClick={() => {likeClicked()}}>{post.likes}</i>
        </div>
    </>);
}
export default PostItem;