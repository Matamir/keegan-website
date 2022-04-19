import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './components/Home/homePage';
import NavBar from './components/NavBar/navBar';

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
                element={<loginPage />} />
              <Route path="hello"
                element={null} />
              <Route path="tuiter"
                element={null}>
                <Route index
                  element={null} />
                <Route home
                  element={null} />
                <Route path="explore"
                  element={null} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
