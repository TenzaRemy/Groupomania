import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; // React router v6 app
import Home from './pages/Home'
import GlobalStyle from './utils/style/GlobalStyle'
import Error from './components/Error'
import SignUp from './pages/SignUp'
import Blog from './pages/Blog';
import Profil from './pages/Profil';
import Logout from './pages/Logout';
import Unauthorized from './components/Unauthorized';



const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/Unauthorized" element={<Unauthorized/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/SignUp" element={<SignUp/>}/> 
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Profil" element={<Profil/>}/>
          <Route path="/Logout" element={<Logout/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
