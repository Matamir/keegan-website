import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findUserbyCredentials } from "../../actions/users-actions";

const LoginPage = () => {
    useEffect(() => {
        document.title = "Login"
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    async function loginClicked() {
        if (username !== "" && password !== "") {
            const user2 = await tryLogin();
            if (user2 !== undefined) {
                alert(new Error('Success!'))
            } else {
                alert(new Error('User Not Found.'))
            }
        } else {
            alert(new Error('Please fill in both username and password fields.'))
        }
    }

    async function tryLogin() {
        const loginUser = await findUserbyCredentials(dispatchU, username, password);
        return loginUser;
    }

    console.log(user);

    return (
        <div className="mt-2 homePageCustom text-monospace">
            Username
            <input type="text" className="signinInput" onChange={(e) => setUsername(e.target.value)}></input>
            Password
            <input type="text" className="signinInput" onChange={(e) => setPassword(e.target.value)}></input>

            <button className="commentButton btn-primary btn" onClick={() => { loginClicked() }}>Comment</button>
        </div>
    )
}
export default LoginPage;