"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftDivRef.current, {
        x: "30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightDivRef.current, {
        x: "-30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="w-full py-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/aboutUsBackground.jpg')" }} // Replace with your actual background image path
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-6  rounded-md p-4 md:p-8">
        <div ref={leftDivRef} className="w-full md:w-[40%]">
          <img
            src="/aboutUsImg.png"
            alt="Sri Janki Mahal Trust Ayodhya"
            className="w-full object-contain rounded-md"
          />
        </div>

        <div
          ref={rightDivRef}
          className="flex flex-col w-full md:w-[60%]"
        >
          <h2 className="text-orange-600 font-bold uppercase text-sm">Welcome To</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">
            Sri Janki Mahal Trust Ayodhya
          </h3>
          <p className="text-gray-800 text-base leading-relaxed">
            Sri Janki Mahal Trust Ayodhya, an esteemed retreat since its establishment in 1990, stands as a testament to the Birla legacy of service and devotion. Nestled in the sacred town of Ayodhya, near the revered Ram Mandir, our dharamshala provides a haven for pilgrims and travelers seeking solace and spiritual rejuvenation.
            <br /><br />
            With a rich history spanning over three decades, our establishment embodies the essence of hospitality, offering a seamless blend of tradition and modern comfort.
            <br /><br />
            At Sri Janki Mahal Trust Ayodhya, we pride ourselves on providing a home away from home for all our guests. Our hotel rooms are designed to offer a comfortable and relaxing stay, whether you’re traveling for business or pleasure. Located in a prime spot, our establishment is the perfect choice for those seeking convenience and comfort.
          </p>
            <a href="https://wa.me/+919358113480">
          <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-md font-semibold w-fit hover:bg-orange-700 transition-all">
            Book Your Room Now
          </button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
