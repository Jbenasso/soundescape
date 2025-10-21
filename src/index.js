import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

