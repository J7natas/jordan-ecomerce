import * as React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.scss'

import Home from './views/Home/Home.jsx';
import PageProduct from './views/pageProducts/pageProduct.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/products",
        element: <PageProduct />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
