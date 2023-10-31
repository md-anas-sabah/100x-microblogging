import AcceptedAccount from "./pages/Signup/AcceptedAccount";
import AccountInfo from "./pages/Signup/AccountInfo";
import Signup from "./pages/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from "./pages/Signup/Verification";

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
    {
      path: "/signup/verify-account",
      element: <Verification />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
