import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<p>react-app</p>} />
        <Route path="react-app/table" element={<Table />} />
        <Route path="react-app/form" element={<Form />} />
      </Routes>
  )
}

export default App;
