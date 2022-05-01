import { useEffect } from 'react';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import postsReducer from '../../reducers/posts-reducer';
import PostList from '../Posts/PostList';
const reducer = combineReducers({posts: postsReducer})
const store = createStore(reducer);

const HomePage = () => {

    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <Provider store={store}>
            <div className="mt-2 homePageCustom text-monospace">
                <PostList />
            </div>
        </Provider>
    )
}
export default HomePage;