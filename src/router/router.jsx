import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllNews from "../pages/AllNews";
import NewsDetails from "../components/NewsDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'all-news',
        element: <AllNews/>
      },
      {
        path: '/news/:slug',
        element: <NewsDetails/>
      }
    ]
  }
])

export default router;