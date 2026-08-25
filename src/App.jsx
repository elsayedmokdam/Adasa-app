import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import ShowArticleDetails from "./Components/ShowArticleDetails/ShowArticleDetails";

const myRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
        children: [{ path: "details/:slug", element: <ShowArticleDetails /> }],
      },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <>
        <RouterProvider router={myRouter} />
      </>
    </>
  );
}
