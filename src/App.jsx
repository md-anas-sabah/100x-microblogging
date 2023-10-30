import AcceptedAccount from "./pages/Signup/AcceptedAccount";
import AccountInfo from "./pages/Signup/AccountInfo";
import Signup from "./pages/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/signup/account-info",
      element: <AccountInfo />,
    },
    {
      path: "/signup/accepted-info",
      element: <AcceptedAccount />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
