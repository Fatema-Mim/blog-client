import { useContext } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import TopBar from "./components/topbar/TopBar.jsx";
import { Context } from "./context/Context.js";
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Settings from './pages/settings/Settings.jsx';
import SinglePage from "./pages/singlePage/SinglePage.jsx";
import Write from './pages/write/Write.jsx';


function App() {
  const {user} = useContext(Context);
  return (
    <>
      <BrowserRouter>
      <TopBar/>

        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login /> } />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<SinglePage/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
