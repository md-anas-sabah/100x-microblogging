import PropTypes from "prop-types";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AcceptedAccount from "./pages/Signup/AcceptedAccount";
import AccountInfo from "./pages/Signup/AccountInfo";
import Signup from "./pages/Signup/Signup";
import Verification from "./pages/Signup/Verification";
import CreatePassword from "./pages/Signup/CreatePassword";
import Home from "./pages/Home/Home";
import ComposeTweet from "./pages/ComposeTweet/ComposeTweet";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import FormContextProvider from "./context/FormContext";
import { TweetProvider } from "./context/TweetContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to="/" />;
};

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
    {
      path: "/signup/create-password",
      element: <CreatePassword />,
    },
    {
      path: "/homefeed",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/compose-tweet",
      element: <ComposeTweet />,
    },
    {
      path: "/userprofile",
      element: <Profile />,
    },
    {
      path: "/edit-userprofile",
      element: <EditProfile />,
    },
  ]);
  return (
    <AuthProvider>
      <TweetProvider>
        <FormContextProvider>
          <RouterProvider router={router} />
        </FormContextProvider>
      </TweetProvider>
    </AuthProvider>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
