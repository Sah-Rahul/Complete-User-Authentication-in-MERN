import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Verify from "./pages/Verify";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyOTP from "./pages/VerifyOTP";
import ChangePassword from "./pages/ChangePassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <ProtectedRoute>
                  <Navbar /> <Home />
                </ProtectedRoute>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp/:email" element={<VerifyOTP />} />
          <Route path="/change-password/:email" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
