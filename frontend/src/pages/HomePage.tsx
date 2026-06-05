import Hero from "../components/hero/Hero";
import UpdatesSection from "../components/updates/UpdatesSection";
import Regions from "../components/regions/RegionsSection";     
import GuidanceSection from "../components/guidance/GuidanceSection";
import CoursesSection from "../components/courses/CoursesSection";
import ProcessSection from "../components/process/ProcessSection";
import SuccessStoriesSection from "../components/testimonials/SuccessStoriesSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";






const HomePage = () => {
  return (
    <>
      <Hero />
      <UpdatesSection />
      <Regions />
      <GuidanceSection />
      <CoursesSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default HomePage;