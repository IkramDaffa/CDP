import Login from "src/module/Login";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "src/module/Dashboard";

const RouterList = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default RouterList;
