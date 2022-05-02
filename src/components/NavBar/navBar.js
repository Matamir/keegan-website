import { useEffect } from 'react';

const NavBar = () => {
    let username = localStorage.username;
    
    let Login_Username = (
        (username === undefined) ? (
            <a href="/signin" className="text-dark p-1">
                <i class="fas fa-sign-in-alt"></i>
            </a>
        ) : (<p className='text-dark p-1'>{username}</p>)
    )

    useEffect(() => {});
    

    console.log(Login_Username);
    console.log(username);

    return (
        <div className="navbar navBarCustom">
            <div className="d-flex">
                <a href="/" className="text-dark">
                    Keegan P. Lanzillotta
                </a>
            </div>
            <div className="d-flex justify-content-end">
                {Login_Username}
                <a href="/profile" className="text-dark p-1">
                    <i class="fas fa-user"></i>
                </a>
                <a href="https://www.instagram.com/plartsta/" className="text-dark p-1" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>



        </div>
    )
}
export default NavBar;