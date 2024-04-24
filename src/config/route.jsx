import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function appRouter() {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/swap/:id",
      element: <Details />,
    },
  ];
}
