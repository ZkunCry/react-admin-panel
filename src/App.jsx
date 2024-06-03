import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, Wrapper } from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
