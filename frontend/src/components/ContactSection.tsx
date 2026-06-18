import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  //   FaWhatsapp,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("contact_leads").insert([formData]);

    setLoading(false);

    if (error) {
      toast.error("Something went wrong");
      // alert("Something went wrong");
      console.log(error);
      return;
    }
    toast.success("Form Submitted Sucessfully")
    // alert("Form submitted successfully!");

    setFormData({
      full_name: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#14B8A6]">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0F3D5E] sm:text-4xl md:text-5xl">
            Let's Discuss Your Career Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Connect with our expert admission mentors for personalized
            counselling, course selection, and admission guidance.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_25px_80px_rgba(15,61,94,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
            {/* LEFT SIDE */}
            <div className="bg-[#0F3D5E] px-8 py-12 text-white md:px-10">
              {/* Heading */}
              <h2 className="text-3xl font-bold leading-tight">Get In Touch</h2>

              {/* Description */}
              <p className="mt-5 text-base leading-8 text-white/70">
                Have questions about colleges, admissions, or cutoffs? Reach out
                to our expert counselling team today.
              </p>

              {/* CONTACT ITEMS */}
              <div className="mt-10 space-y-7">
                {/* ITEM */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#14B8A6]">
                    <HiOutlinePhone />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[2px] text-[#14B8A6]">
                      PHONE
                    </p>

                    <div className="mt-2 space-y-1">
                      <a
                        href="tel:+919111536111"
                        className="block text-base font-semibold text-white transition hover:text-[#14B8A6]"
                      >
                        +91 9111536111
                      </a>

                      <a
                        href="tel:+919561193111"
                        className="block text-base font-semibold text-white transition hover:text-[#14B8A6]"
                      >
                        +91 9561193111
                      </a>
                    </div>

                    {/* WhatsApp */}
                    {/* <a
                      href="https://wa.me/919111536111"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaWhatsapp />
                      Chat on WhatsApp
                    </a> */}
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#14B8A6]">
                    <HiOutlineMail />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[2px] text-[#14B8A6]">
                      EMAIL
                    </p>

                    <a
                      href="mailto:futurestarfoundation2025@gmail.com"
                      className="mt-2 block text-base font-semibold leading-7 text-white transition hover:text-[#14B8A6]"
                    >
                      futurestarfoundation2025@gmail.com
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#14B8A6]">
                    <HiOutlineLocationMarker />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[2px] text-[#14B8A6]">
                      ADDRESS
                    </p>

                    <p className="mt-2 max-w-xs text-base font-semibold leading-8 text-white/90">
                      Chatrapati Square, Near Sai Mandir, Sawarkar Nagar,
                      Vivekanand Nagar, Nagpur, Maharashtra 440015
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-12 border-t border-white/10" />

              {/* SOCIALS */}
              <div className="mt-10 flex items-center gap-4">
                {[
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaTwitter />,
                  <FaYoutube />,
                ].map((icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="px-8 py-12 md:px-12">
              {/* Heading */}
              <h3 className="text-3xl font-bold text-[#0F3D5E]">
                Book A Consultation
              </h3>

              <p className="mt-3 text-gray-500">
                Fill out the form and our admission experts will contact you
                shortly.
              </p>

              {/* FORM */}
              <form className="mt-10" onSubmit={handleSubmit}>
                {/* ROW */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-600">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10"
                    />
                  </div>
                </div>

                {/* COURSE */}
                <div className="mt-6">
                  <label className="mb-3 block text-sm font-medium text-gray-600">
                    Interested Course
                  </label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10"
                  >
                    <option>Select a course</option>
                    <option>MBBS</option>
                    <option>BAMS</option>
                    <option>MBA</option>
                    <option>B.Tech</option>
                    <option>BPT</option>
                    <option>B.Sc</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-6">
                  <label className="mb-3 block text-sm font-medium text-gray-600">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10"
                  />
                </div>

                {/* BUTTON */}
                <button type="submit" className="mt-8 h-14 w-full rounded-2xl bg-[#F97316] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#ea580c] hover:shadow-xl">
                   {loading ? "Submitting..." : "Submit Request"}
                </button>

                {/* TRUST TEXT */}
                <p className="mt-4 text-center text-sm text-gray-400">
                  We usually respond within 15 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
