import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Team from "../Pages/Team";
import About from "../Pages/About";
import Works from "../Pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-team",
        element: <Team />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
    ],
  },
]);

export default router;
