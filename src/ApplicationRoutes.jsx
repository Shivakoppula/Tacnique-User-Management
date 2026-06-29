import { Navigate, Route, Routes } from "react-router-dom";
import UserManagementDashboard from "./UserManagementDashboard";
import AdministratorLoginPage from "./components/AdministratorLoginPage";
import AuthenticationGuard from "./components/AuthenticationGuard";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdministratorLoginPage />} />
      <Route element={<AuthenticationGuard />}>
        <Route path="/" element={<UserManagementDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default ApplicationRoutes;
