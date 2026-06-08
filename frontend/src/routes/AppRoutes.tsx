import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import AdmissionUpdatesPage from "../pages/AdmissionUpdatesPage";
import SuccessStoriesPage from "../pages/SuccessStoriesPage";
import ContactPage from "../pages/ContactPage";

import Layout from "../layouts/Layout";
import ScrollToTop from "../ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/admission-updates" element={<AdmissionUpdatesPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </Layout>
    
    </BrowserRouter>
  );
}


export default AppRoutes;