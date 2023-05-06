import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "styles/room.css";
import UnAuthRoute from "screens/routes/un-auth-route/UnAuthRoute";
import ProtectedRoute from "screens/routes/protected-route/ProtectedRoute";
import IntervieweeDashboard from "screens/interviewee-dashboard/IntervieweeDashboard";
import Layout from "screens/layout/Layout";
import LoginPage from "screens/login/LoginPage";
import SignupPage from "screens/signup/SignupPage";
import IntervieweeProfile from "screens/interviewee-profile/IntervieweeProfile";
import InterviewerCompletedInterview from "screens/interviewer-completed-interview/InterviewerCompletedInterview";
import InterviewerScheduleInterview from "screens/interviewer-schedule-interview/InterviewerScheduleInterview";
import InterviewerDashboard from "screens/interviewer-dashboard/InterviewerDashboard";
import { useSelector } from "react-redux";
import lodash from "lodash";
import InterviewerProfile from "screens/interviewer-profile/InterviewerProfile";
import IntervieweeScheduleInterview from "screens/interviewee-schedule-interview/IntervieweeScheduleInterview";
import IntervieweeCompletedInterview from "screens/interviewee-completed-interview/IntervieweeCompletedInterview";
import Feedback from "screens/feedback/Feedback";
import ViewInterview from "screens/view-interview/ViewInterview";
import TestingRoom from "screens/room/TestingRoom";
import Room from "screens/room/Room";

function App() {
  const { userResponse } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route element={<UnAuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/interviewer/dashboard"
              element={<InterviewerDashboard />}
            />
            <Route
              path="/interviewee/dashboard"
              element={<IntervieweeDashboard />}
            />
            <Route
              path="interviewer/schedule-interview"
              element={<InterviewerScheduleInterview />}
            />
            <Route
              path="interviewer/completed-interview"
              element={<InterviewerCompletedInterview />}
            />
            <Route path="interviewer/feedback" element={<Feedback />} />
            <Route
              path="interviewer/view-interview"
              element={<ViewInterview />}
            />
            <Route
              path="interviewee/view-interview"
              element={<ViewInterview />}
            />
            <Route
              path="interviewer/profile/:id"
              element={<InterviewerProfile />}
            />
            <Route
              path="interviewee/profile/:id"
              element={<IntervieweeProfile />}
            />
            <Route
              path="/interviewee/dashboard"
              element={<IntervieweeDashboard />}
            />
            <Route
              path="interviewee/schedule-interview"
              element={<IntervieweeScheduleInterview />}
            />
            <Route
              path="interviewee/completed-interview"
              element={<IntervieweeCompletedInterview />}
            />
            {/* agora room testing */}
            <Route path="/room/:id" element={<Room />} />

            {lodash.isEmpty(userResponse) && (
              <Route
                path="/"
                element={<Navigate replace to="/interviewer/dashboard" />}
              />
            )}
            <Route
              path="/"
              element={
                <Navigate replace to={`/${userResponse.role}/dashboard`} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
