"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Nav = () => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header className="w-full h-[100px] bg-white shadow-sm flex justify-between items-center fixed top-0 z-50 px-6 ">
        {/* Left: Logo & Heading */}
        <div className="text-left leading-tight h-[70px]">
          <img src="/logo.png" className="h-[70px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden  md:flex justify-around gap-4 text-black font-semibold text-sm">
          {[
            { href: "#about", text: "ABOUT US" },
            { href: "#rooms", text: "SERVICES" },
            { href: "#amenities", text: "HOTEL FACILITIES" },
            { href: "#testimonials", text: "CUSTOMER REVIEWS" },
            { href: "#gallery", text: "GALLERY" },
            { href: "#contact", text: "CONTACT US" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-600 cursor-pointer"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black font-bold text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 h-full w-64 pt-[100px] bg-white shadow-lg z-40 md:hidden px-6 py-10 space-y-6 text-lg font-medium text-black"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold text-black"
          aria-label="Close menu"
        >
          ×
        </button>

        {[
          { href: "#about", text: "ABOUT US" },
          { href: "#rooms", text: "SERVICES" },
          { href: "#amenities", text: "HOTEL FACILITIES" },
          { href: "#testimonials", text: "CUSTOMER REVIEWS" },
          { href: "#gallery", text: "GALLERY" },
          { href: "#contact", text: "CONTACT US" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-600"
          >
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
