import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;