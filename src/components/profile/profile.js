import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    useEffect(() => {
        document.title = "Profile";
    }, []);

    let {id} = useParams();

    let yourID = localStorage._id;

    if (id !== undefined) {
        return(
            <div className="mt-2 homePageCustom text-monospace">
                <p>Hello there</p>Welcome to your profile user {id}.
            </div>
        )
    }

    return (
        <div className="mt-2 homePageCustom text-monospace">
            <p>Hello there</p>Welcome to your profile.
        </div>
    )
}
export default ProfilePage;