import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPostById } from '../../actions/posts-actions';
import { deleteComment, findCommentsByPost } from "../../actions/comments-actions";


const Comments = ({
    comment = {
        uid: 'standInUsername',
        pid: 'stand in caption',
        text: "stand in likes",
    },
    user = {
        uid: "stand in"
    }
}
) => {

    const dispatchC = useDispatch();
    function deleteClicked() {
        deleteComment(dispatchC, comment);
    }


    const deleteButton = (<button className="deleteCommentButton btn-danger btn" onClick={() => { deleteClicked(); }}><i class="fas fa-trash-alt"></i></button>)
    return (<div>
        {comment.text}
        {comment.uid == user.uid ? deleteButton : <></>}
    </div>)
}
export default Comments;