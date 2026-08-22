import { Navigate, Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";

import LoginPage from "../pages/admin/LoginPage";
import DashboardPage from "../pages/admin/Dashboard";
// import CoursesPage from "../pages/admin/Courses";
// import UpdatesPage from "../pages/admin/Updates";
// import SettingsPage from "../pages/admin/Settings";
// import HeroBannerPage from "../pages/admin/Hero";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="login" replace />} />

      {/* Login (No Layout) */}
      <Route path="login" element={<LoginPage />} />

      {/* Admin Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
      {/* <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="updates" element={<UpdatesPage />} />
        <Route path="hero-banner" element={<HeroBannerPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      */}
    </Routes>
  );
};

export default AdminRoutes;