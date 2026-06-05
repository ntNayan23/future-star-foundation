import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/future-star-foundation-logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Admission Updates", path: "/admission-updates" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/80 shadow-sm backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-wide">
                <span className="text-[#D4AF37]">
                  Future Star
                </span>{" "}
                <span className="text-[#0F3D5E]">
                  Foundation
                </span>
              </h1>

              <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                Admission Consultancy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[15px] transition-all duration-300 ${
                    isActive
                      ? "font-semibold text-[#F97316]"
                      : "text-[#1F2937] hover:text-[#14B8A6]"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#F97316]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#ea580c]">
              Book Free Counselling
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#0F3D5E] lg:hidden"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[75%] max-w-sm flex-col bg-white p-8 shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="mb-12 flex items-center justify-between">
                <img
                  src={logo}
                  alt="Future Star Foundation"
                  className="h-12 w-auto"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-[#0F3D5E]"
                >
                  <HiX />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg border-l-4 px-4 py-3 text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "border-[#F97316] bg-orange-50 text-[#F97316]"
                          : "border-transparent text-[#1F2937] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto">
                <button className="w-full rounded-full bg-[#F97316] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#ea580c]">
                  Book Free Counselling
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;