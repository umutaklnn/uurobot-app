import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/Content.css";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
