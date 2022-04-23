import { useEffect } from 'react';
import PostList from '../Posts/PostList';

const HomePage = () => {
    
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <div className="mt-2 homePageCustom text-monospace">
            <PostList/>
        </div>
    )
}
export default HomePage;