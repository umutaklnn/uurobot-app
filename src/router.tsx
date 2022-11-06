import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Index from "./view/Index";
import About from "./view/About";
import Projects from "./view/Project";
import Sponsors from "./view/Sponsors";
import Team from "./view/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      {
        path: "/projects",
        children: [
          { index: true, element: <Projects /> },
          { path: ":id", element: <Projects /> },
        ],
      },
      { path: "/sponsors", element: <Sponsors /> },
    ],
  },
]);

export default router;
