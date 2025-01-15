import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Register from "../Pages/Register";
import JobDetails from "../Pages/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import MyPostJob from "../Pages/MyPostJob";
import AddJob from "../Pages/AddJob";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobdetails/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "/myapplications",
        element: (
          <PrivetRoute>
            <MyApplication></MyApplication>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
