import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />            
    </div>
  );
}

export default App;
