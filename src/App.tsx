import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { CommonLayout } from "./components/CommonLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <CommonLayout>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  );
}

export default App;
