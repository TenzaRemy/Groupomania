import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; // React router v6 app
import Home from './pages/Home'
import GlobalStyle from './utils/style/GlobalStyle'
import Error from './components/Error'


const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
