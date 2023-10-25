import RouterList from "./router-list.jsx";
import { RouterProvider } from "react-router-dom";

function Router() {
  return (
    <>
      <RouterProvider router={RouterList} />
    </>
  );
}

export default Router;
