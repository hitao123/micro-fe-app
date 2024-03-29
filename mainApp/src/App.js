import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home/index.jsx'
import Setting from './components/setting/index.jsx'
import SubApp from "./components/subApp/index.jsx";

const App = () => {
  return (
    <Home>
        <Routes>
          <Route exact path="/" element={<p>index</p>} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/vue-app" element={<SubApp />} />
          <Route path="/react-app/form" element={<SubApp />} />
          <Route path="/react-app/table" element={<SubApp />} />
        </Routes>
    </Home>
  )
}

export default App;
