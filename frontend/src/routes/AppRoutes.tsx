import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import AdmissionUpdatesPage from "../pages/AdmissionUpdatesPage";
import SuccessStoriesPage from "../pages/SuccessStoriesPage";
import ContactPage from "../pages/ContactPage";
import AdminRoutes from "./AdminRoutes";
import Layout from "../layouts/Layout";
import ScrollToTop from "../ScrollToTop";

const PublicLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admission-updates" element={<AdmissionUpdatesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes;