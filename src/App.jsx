import Login1 from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tweet from "./pages/Tweet/Tweet";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login1 />,
    },
    {
      path: "/tweet",
      element: <Tweet />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
