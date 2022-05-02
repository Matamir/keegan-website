import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findUserbyCredentials } from "../../actions/users-actions";
import { logUserIn, logUserOut } from "../../USER";

const LoginPage = () => {
    const user = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Login"
        console.log('finding');
        findUserbyCredentials(dispatchU, username, password);
    }, [username, password]);



    async function loginClicked() {
        if (username !== "" && password !== "") {
            if (user !== null) {
                alert(new Error('Success!'))
                logUserIn(user);
            } else {
                alert(new Error('User Not Found.'))
            }
        } else {
            alert(new Error('Please fill in both username and password fields.'))
        }
    }

    console.log(user);

    //console.log(user);

    return (
        <div className="mt-2 homePageCustom text-monospace">
            Username
            <input type="text" className="signinInput" onChange={(e) => setUsername(e.target.value)}></input>
            Password
            <input type="text" className="signinInput" onChange={(e) => setPassword(e.target.value)}></input>

            <button className="commentButton btn-primary btn" onClick={() => { loginClicked(); }}>Sign In</button>
        </div>
    )
}
export default LoginPage;