import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { HiOutlinePhone } from "react-icons/hi";

import logo from "../assets/future-star-foundation-logo.png";
import { useSiteSettings } from "../context/SiteSettingsContext";

const Footer = () => {
  const { settings, loading } = useSiteSettings();
  if (loading) return null;
  const contacts = [
    {
      name: "Harshal Sir",
      phone: settings?.phone_1 || "null",
    },
    {
      name: "Nikhil Sir",
      phone: settings?.phone_2 || "null",
    },
  ];

  return (
    <footer className="bg-[#0F3D5E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Future Star Foundation"
                className="h-30 w-auto object-contain"
              />

              <div>
                {/* <h2 className="text-2xl font-bold tracking-tight">

                  <span className="text-[#F97316]">
                    Future Star
                  </span>{" "}

                  <span className="text-white">
                    Foundation
                  </span>

                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
                  Admission Consultancy
                </p> */}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-sm text-base leading-7 text-white/70">
              {settings?.footer_description ||
                "Dedicated to excellence in educational consultancy and student mentorship across Nagpur & Maharashtra."}
            </p>

            {/* Socials */}
            {/* <div className="mt-8 flex items-center gap-4">
              {[<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />].map(
                (icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]"
                  >
                    {icon}
                  </button>
                ),
              )}
            </div> */}

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: settings?.facebook_url || "Null",
                },
                {
                  icon: <FaInstagram />,
                  link: settings?.instagram_url || "Null",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: settings?.linkedin_url || "Null",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {[
                "Home",
                "Courses",
                "Admission Updates",
                "Success Stories",
                "Contact Us",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-all duration-300 hover:text-[#14B8A6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-lg font-bold">Popular Courses</h3>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {[
                "MBBS Admissions",
                "B.Tech Admissions",
                "MBA Admissions",
                "BAMS Admissions",
                "BPT Admissions",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-all duration-300 hover:text-[#14B8A6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-bold">Support</h3>

            <p className="mt-6 max-w-xs text-sm leading-[1.6] text-white/70">
              Available 24/7 for student counselling and admission assistance.
            </p>

            {/* WhatsApp CTA */}
            {/* <a
              href="https://wa.me/919111596111"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <button
              className="mt-8 flex items-center gap-3 rounded-2xl border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-5 py-4 font-medium text-[#14B8A6] transition-all duration-300 hover:bg-[#14B8A6] hover:text-white"
              onClick={() => {
                const phone = settings?.whatsapp_number?.replace(/\D/g, "");

                if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                  window.location.href = `whatsapp://send?phone=${phone}`;
                } else {
                  window.open(
                    `https://web.whatsapp.com/send?phone=${phone}`,
                    "_blank",
                  );
                }
              }}
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </button>
            {/* </a> */}
            {/* Phone */}
            {/* <div className="mt-6 flex items-center gap-3 text-white">

              <HiOutlinePhone className="text-xl text-[#14B8A6]" />

              <span className="font-medium">
                +91 98765 43210
              </span>

            </div> */}
            {/* Contact Numbers */}
            <div className="mt-6 flex items-start gap-3 text-white">
              <HiOutlinePhone className="mt-1 text-xl text-[#14B8A6]" />

              <ul className="space-y-2">
                {contacts
                  .filter((contact) => contact.phone)
                  .map((contact, index) => (
                    <li key={index}>
                      <span className="font-medium text-white">
                        {contact.name}:
                      </span>{" "}
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-white/70 hover:text-[#14B8A6]"
                      >
                        {contact.phone}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-white/50 md:flex-row">
          <p>© 2026 Future Star Foundation. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button className="transition-all duration-300 hover:text-[#14B8A6]">
              Privacy Policy
            </button>

            <button className="transition-all duration-300 hover:text-[#14B8A6]">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
