import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPost, findAllPosts } from '../../actions/posts-actions';
import { findAllUsers, findUserById } from '../../actions/users-actions';

const ProfilePage = () => {

    let { id } = useParams();

    const users = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    const posts = useSelector((state) => state.posts);
    const dispatchP = useDispatch();

    console.log(id)
    useEffect(() => {
        document.title = "Profile";
        if (id != undefined && id != 'undefined') {
            findAllUsers(dispatchU);
        }
        findAllPosts(dispatchP);
    }, []);

    const userFiltered = users.filter(user => user._id === id);
    let userFound;
    if (userFiltered.length > 0) {
        userFound = userFiltered[0];
    }


    console.log(userFound)

    async function reloadFromInstaAPI() {
        console.log('reloading website');
        let res = await axios.get('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQVJWSF9mYVpCT1A0ZAGR2TG8wUTdpal83blZAOSmRpam15ck5PcGlCYWN4ZAFozMTh0SHJPR0ktUFVwNTJ5UWhIZAGxZAdWdPcHdLaU1JQ3BHLXNEaFh3Smg3V2U0a29scjlvb3I0ZA2N3')
        let accessToken = res.data.access_token;
        let instaAPI = 'https://graph.instagram.com/7509095509130541/media?fields=id,media_url,username,timestamp,caption&access_token=' + accessToken;

        let response = await axios.get(instaAPI);
        let list = response.data.data;
        console.log('reload 1')

        while (instaAPI != undefined) {
            let next = response.data.paging.next;
            console.log('reload 3')
            response = await axios.get(instaAPI);
            list = response.data.data;
            for (let key in list) {
                let post = list[key];
                console.log(post);
                console.log(posts);
                let filteredPost = posts.filter(p => p.pid == post.id)
                console.log(filteredPost);
                if (filteredPost.length === 0) {
                    let newPost = {
                        pid: post.id,
                        username: post.username,
                        caption: post.caption,
                        likes: 0,
                        timestamp: post.timestamp,
                        image: post.media_url,
                    }
                    createPost(dispatchU, newPost);
                }
            }
            instaAPI = next;
        }
        console.log('reload done')
    }

    if (id !== undefined && userFound !== undefined) {
        return (
            <div className="mt-2 homePageCustom text-monospace">
                <p>Hello there</p>Welcome to your profile user {userFound.username}.
                {(userFound.userType === 'admin' && userFound._id == localStorage._id) ? (<button onClick={() => { reloadFromInstaAPI(); }}>Reload</button>) : (<>notAdmin</>)}
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
                    <h3>Could not find Profile</h3>
                    <a href="../">Go Back</a>
                </div>

            </div>
        )
    }
}
export default ProfilePage;