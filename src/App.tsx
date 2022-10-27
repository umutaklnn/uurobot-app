import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./assets/css/App.css";
import "./assets/css/index.css";
import "./assets/css/Content.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
