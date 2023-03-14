import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home/index.jsx'
import Setting from './components/setting/index.jsx'
import SubApp from "./components/subApp/index.jsx";

const App = () => {
  return (
      <div>
        1222
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/sub/vue-app" element={<SubApp />} />
        </Routes>
      </div>
  )
}

export default App;
