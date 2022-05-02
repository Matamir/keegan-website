import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findAllUsers, findUserById } from '../../actions/users-actions';

const ProfilePage = () => {

    let { id } = useParams();

    const users = useSelector((state) => state.users);
    const dispatchU = useDispatch();

    console.log(id)
    useEffect(() => {
        document.title = "Profile";
        if (id != undefined && id != 'undefined') {
            findAllUsers(dispatchU)
        }
    }, []);

    const userFiltered = users.filter(user => user._id === id);
    let userFound;
    if (userFiltered.length > 0) {
        userFound = userFiltered[0];
    }


    console.log(userFound)

    function reloadFromInstaAPI() {
        console.log('reloading website');
    }

    if (id !== undefined && userFound !== undefined) {
        return (
            <div className="mt-2 homePageCustom text-monospace">
                <p>Hello there</p>Welcome to your profile user {userFound.username}.
                {(userFound.userType === 'admin' && userFound._id == localStorage._id) ? (<button onClick={() => { reloadFromInstaAPI() }}>Reload</button>) : (<>notAdmin</>)}
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