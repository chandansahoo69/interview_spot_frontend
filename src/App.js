import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UnAuthRoute from "screens/routes/un-auth-route/UnAuthRoute";
import ProtectedRoute from "screens/routes/protected-route/ProtectedRoute";
import Dashboard from "screens/dashboard/Dashboard";
import Layout from "screens/layout/Layout";
import LoginPage from "screens/login/LoginPage";
import SignupPage from "screens/signup/SignupPage";
import Profile from "screens/profile/Profile";
import CompletedInterview from "screens/completed-interview/CompletedInterview";
import ScheduleInterview from "screens/schedule-interview/ScheduleInterview";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UnAuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule-interview" element={<ScheduleInterview />} />
            <Route
              path="/completed-interview"
              element={<CompletedInterview />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
