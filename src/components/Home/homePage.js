import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../Posts/PostList';

const HomePage = () => {

    let { id } = useParams();

    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <div className="mt-2 homePageCustom text-monospace">
            <PostList input={id} />
        </div>
    )

}
export default HomePage;