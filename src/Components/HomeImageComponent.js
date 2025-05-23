import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoLogoWhatsapp } from "react-icons/io";

const HeroAshramSection = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: -100,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(subHeadingRef.current, {
        y: -100,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(buttonsRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[80vh] mt-[100px] flex flex-col justify-end items-center px-4 text-center text-white"
    >
      {/* Background */}
      <div className="absolute z-0 h-full w-full">
        <img src="homeImg.webp" className="h-full w-full object-cover" alt="Ashram" />
      </div>

      {/* Overlay */}
      <div className="absolute z-10 h-full w-full bg-black opacity-30"></div>

      {/* Content */}
      <div className="z-20 flex flex-col justify-center items-center gap-4 pb-6">
        <h1 ref={headingRef} className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Sri Janaki Mahal Trust
        </h1>
        <h2
          ref={subHeadingRef}
          className="text-xl md:text-3xl font-semibold text-white"
        >
          Book AC Non AC Rooms
        </h2>
        <p className="text-sm md:text-lg font-medium text-white">
          Book Your Stay at Sri Janaki Mahal Trust
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a href="tel:+919358113480">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-lg font-semibold shadow-lg transition">
              📞 Call +919358113480
            </button>
          </a>
          <a href="https://wa.me/+919358113480">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-lg font-semibold shadow-lg transition flex items-center gap-2">
              <IoLogoWhatsapp size={18} /> Whatsapp
            </button>
          </a>
        </div>
      </div>

      {/* Side ENQUIRY NOW Banner
      <div className="absolute top-[30%] left-0 z-30 -rotate-90 origin-top-left">
        <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-t-md">
          ENQUIRY NOW
        </button>
      </div> */}
    </section>
  );
};

export default HeroAshramSection;
