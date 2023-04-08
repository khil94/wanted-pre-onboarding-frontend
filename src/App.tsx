import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommonLayout } from "./components/CommonLayout";
import Gate from "./pages/Gate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <CommonLayout>
        <Routes>
          <Route path="/*" element={<Gate />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
}

export default App;
