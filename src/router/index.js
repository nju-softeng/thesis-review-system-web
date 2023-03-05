import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Submit from "@/pages/home/subPages/submit";
import Review from "@/pages/home/subPages/review";
import Space from "@/pages/home/subPages/space";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    exact: true,
  },
  {
    path: "/home",
    element: <Home />,
    exact: true,
    children: [
      {
        path: "space",
        element: <Space></Space>,
        exact: true,
      },
      {
        path: "submit",
        element: <Submit></Submit>,
        exact: true,
      },
      {
        path: "review",
        element: <Review></Review>,
        exact: true,
      },
      {
        path: "",
        element: <Navigate to="/home/space"></Navigate>,
      },
    ],
  },
]);

export default router;
