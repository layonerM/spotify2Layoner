import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login_page.jsx";
import SignUpPage from "./pages/signup-page.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { RecoilRoot } from "recoil";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import LoggedRoute from "./utils/LoggedRoute.jsx";
import Playlist from "./pages/Playlist.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/create-playlist",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/liked-songs",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/library",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/playlist/:id",
        element: <Playlist />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUpPage />
      </ProtectedRoute>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
