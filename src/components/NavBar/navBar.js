import { useEffect } from 'react';
import { logUserOut } from '../../USER';

const NavBar = () => {
    let username = localStorage.username;

    let Login_Username = (
        (username == "undefined") ?
            (
                <a href="/signin" className="text-dark p-1">
                    <i class="fas fa-sign-in-alt"></i>
                </a>
            ) :
            (<>
                <i class="fas fa-sign-out-alt pt-3" onClick={() => {logUserOut(); window.location = '../'}}></i>
                <p className='text-dark p-1'>{username}</p>
            </>)
    )

    useEffect(() => { });


    console.log(Login_Username);
    console.log(username);

    let profileLink = '/profile/' + localStorage._id;
    return (
        <div className="navbar navBarCustom">
            <div className="d-flex">
                <a href="/" className="text-dark">
                    Keegan P. Lanzillotta
                </a>
            </div>
            <div className='d-flex justify-content-center'>
                <input type="text" placeholder='Search Here' onKeyDown={(e) => {if(e.key == 'Enter') {let linkSearch = '../' + e.currentTarget.value.toString(); window.location=linkSearch}}}></input>
            </div>
            <div className="d-flex justify-content-end">
                {Login_Username}
                <a href={profileLink} className="text-dark p-1">
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