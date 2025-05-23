import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} id="contact" className="bg-slate-200 text-black px-6 md:px-20 py-14">
      <div className="flex flex-col md:flex-row justify-between bg-white p-10 items-start gap-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6 fade-up">
          <h2 className="text-2xl font-semibold text-[#de5b38]">Get in touch</h2>
          <p className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-[#de5b38]" />
            Karsewakpuram, Vasudev Gath, Ayodhya, Uttar Pradesh 224123
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaPhoneAlt className="text-[#de5b38]" />
            +919358113480
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-[#de5b38]" />
            jankitrust7484@gmail.com
          </p>
        </div>

        {/* Embedded Map */}
        <div className="w-full md:w-1/2 fade-up">
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg border-2 border-[#de5b38]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28489.05506789128!2d82.210943!3d26.803929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a0788e791a125%3A0xb699c999e6e42610!2sSri%20Janaki%20Mahal%20Trust!5e0!3m2!1sen!2sin!4v1748023397103!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm fade-up">
        <p>All Rights Reserved © 2024 Sri Janaki Mahal Trust</p>
      </div>
    </footer>
  );
};

export default ContactSection;
