import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findAllComments } from '../../actions/comments-actions';
import { createPost, findAllPosts } from '../../actions/posts-actions';
import { findAllUsers, findUserById } from '../../actions/users-actions';

const ProfilePage = () => {

    let { id } = useParams();

    if (id == "undefined") {
        window.location = '../signin';
    }

    const users = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    const posts = useSelector((state) => state.posts);
    const dispatchP = useDispatch();

    const comments = useSelector((state) => state.comments);
    const dispatchC = useDispatch();

    console.log(id)
    useEffect(() => {
        document.title = "Profile";
        if (id != undefined && id != 'undefined') {
            findAllUsers(dispatchU);
        }
        findAllPosts(dispatchP);
        findAllComments(dispatchC);
    }, []);



    const userFiltered = users.filter(user => user._id === id);
    let userFound;
    if (userFiltered.length > 0) {
        userFound = userFiltered[0];
    }

    console.log(comments);

    let commentsFiltered = comments.filter(c => c.uid == userFound._id);


    console.log(userFound);
    console.log(commentsFiltered);

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
                    createPost(dispatchP, newPost);
                }
            }
            instaAPI = next;
        }
        console.log('reload done')
    }



    let commentsList = [];
    for (let key in commentsFiltered) {
        commentsList.push(commentsFiltered[key]);
    }

    console.log(commentsList);


    function getLink(pid) {
        return "../post/" + pid;
    }

    if (id !== undefined && userFound !== undefined) {
        return (
            <div className="mt-2 homePageCustom text-monospace">
                <h1>{userFound.username}</h1>
                <div className='row'>
                    <div className='ml-3'>Bio: {(userFound.bio != 'empty') ? (<input placeholder={userFound.bio}/>) : (<input placeholder='No Bio Yet'/>)}</div>

                    {(userFound.userType === 'admin' && userFound._id == localStorage._id) ? (<button className='reloadButton' onClick={() => { reloadFromInstaAPI(); }}>Reload</button>) : (<></>)}
                </div>
                Comments:
                {commentsList.map(c => { let link = getLink(c.pid); return <div><a href={link} className="text-dark font-weight-bold">{c.text}</a></div> })}
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