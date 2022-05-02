import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import NavBar from './components/NavBar/navBar';
import HomePage from './components/Home/homePage';
import LoginPage from './components/LoginPage/loginPage'
import SearchPage from './components/Search/searchPage';
import ProfilePage from './components/profile/profile';
import PostPage from './components/PostPage/PostPage';


import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import postsReducer from './reducers/posts-reducer';
import commentsReducer from './reducers/comments-reducer';
import usersReducer from './reducers/users-reducer';

const reducer = combineReducers({posts: postsReducer, users: usersReducer, comments: commentsReducer})
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route index
                element={<HomePage />} />
              <Route path="/">

                <Route path="home"
                  element={<HomePage />} />

                <Route path="signin"
                  element={<LoginPage />} />

                <Route path="search"
                  element={<SearchPage />} />

                <Route path="profile"
                  element={<ProfilePage />}>
                  <Route path=":id"
                    element={<ProfilePage />} />
                </Route>

                <Route path="post"
                  element={<PostPage />}>
                  <Route path=":id"
                    element={<PostPage />} />
                </Route>

                <Route path="details"
                  element={null} />

              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
