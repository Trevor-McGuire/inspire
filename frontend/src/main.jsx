import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Item from "./pages/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":groupId/:itemId",
        element: <Item />,
      },
      {
        path: ":groupId",
        element: <Group />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
