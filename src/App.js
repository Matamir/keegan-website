import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import NavBar from './components/NavBar/navBar';
import HomePage from './components/Home/homePage';
import LoginPage from './components/LoginPage/loginPage'
import SearchPage from './components/Search/searchPage';
import ProfilePage from './components/profile/profile';
import PostPage from './components/PostPage/PostPage';

function App() {
  return (
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

              <Route path="login"
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
  );
}
export default App;
