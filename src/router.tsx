import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Index from "./view/Index";
import About from "./view/About";
import Projects from "./view/Projects";
import Sponsors from "./view/Sponsors";
import Team from "./view/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/sponsors", element: <Sponsors /> },
      { path: "/team", element: <Team /> },
    ],
  },
]);

export default router;
