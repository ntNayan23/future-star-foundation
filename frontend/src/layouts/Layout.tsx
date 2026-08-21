import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;