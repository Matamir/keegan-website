import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import posts from "../Posts/posts.json";

const PostPage = () => {
    useEffect(() => {
        document.title = "Post"
    }, []);
    
    let {id} = useParams();

    let postByID = posts.filter(p => p.id == id)[0];

    if (id !== undefined && postByID !== undefined) {
        console.log(postByID);


        return(
            <div className="mt-2 homePageCustom text-monospace">
                <p>Hello there</p>Welcome to post {id}.
                <img className="postImage" src={postByID.image} />
                {postByID.caption}
            </div>
        )
    }
}
export default PostPage;