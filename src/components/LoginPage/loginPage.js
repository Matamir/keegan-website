import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createUser, findUserbyCredentials, findUserbyUsername } from "../../actions/users-actions";
import { logUserIn, logUserOut } from "../../USER";

const LoginPage = () => {
    const user = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Login"
        console.log('finding');
        findUserbyUsername(dispatchU, username);
    });



    function loginClicked() {
        if (username !== "" && password !== "") {
            if (user !== null && user.password === password) {
                alert('Success!');
                logUserIn(user);
                window.location = '../'
            } else {
                alert('Invalid Login.');
            }
        } else {
            alert('Please fill in both username and password fields.');
        }
    }

    async function registerClicked() {
        if (username !== "" && password !== "") {
            if (user === null) {
                createUser(dispatchU, { username: username, password: password });
                alert('User created.')
                let newUsername = "";
                newUsername = (username);
                setUsername(newUsername);
            } else {
                alert('Username already taken.')
            }
        } else {
            alert('Please fill in both username and password fields.');
        }
    }

    return (
        <div className="mt-2 homePageCustom text-monospace">
            Username
            <input type="text" className="signinInput" onChange={(e) => setUsername(e.target.value)}></input>
            Password
            <input type="text" className="signinInput" onChange={(e) => setPassword(e.target.value)}></input>

            <button className="commentButton btn-primary btn" onClick={() => { loginClicked();}}>Sign In</button>
            <button className="commentButton btn-primary btn" onClick={() => { registerClicked(); }}>Register</button>

        </div>
    )
}
export default LoginPage;