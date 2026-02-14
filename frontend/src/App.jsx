import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Board from "./Pages/Board/Board";
import Contact from "./Pages/Contact/Contact";
import Leadership from "./Pages/Leadership/Leadership";
import Services from "./Pages/Services/Services";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
