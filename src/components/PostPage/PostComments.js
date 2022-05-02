import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPostById } from '../../actions/posts-actions';
import { deleteComment, findCommentsByPost } from "../../actions/comments-actions";
import { findAllUsers, findUserById } from "../../actions/users-actions";


const Comments = ({
    comment = {
        _id: 'stand in cid',
        uid: 'stand in uid',
        pid: 'stand in pid',
        text: "stand in text",
    },
    user = {
        uid: "stand in"
    }
}
) => {

    const users = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    useEffect(() => {
        findAllUsers(dispatchU)
    }, []);

    const userFiltered = users.filter(user => user._id === comment.uid);
    let userFound;
    let link;
    if (userFiltered.length > 0) {
        userFound = userFiltered[0];
        link = `../profile/` + userFound._id;
    }

    const dispatchC = useDispatch();

    function deleteClicked() {
        deleteComment(dispatchC, comment);
    }


    const deleteButton = (<button className="deleteCommentButton btn-danger btn" onClick={() => { deleteClicked(); }}><i class="fas fa-trash-alt"></i></button>)
    return (<div>
        {userFound !== undefined ? <a href={link} className='text-dark font-weight-bold'>{userFound.username}</a> : <></>} -  {comment.text}
        {comment.uid == user.uid ? deleteButton : <></>}
    </div>)
}
export default Comments;