import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-text", {
        y: 30,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-image", {
        scale: 0.8,
        opacity: 0,
        duration: 2.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-cover bg-center py-16 px-4"
      style={{
        backgroundImage: "url('/TestimonialsBackground.jpg')",
      }}
    >
     
      {/* Section content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="testimonial-image flex justify-center">
          <div className="border-[10px] border-red-600 rounded-full p-2 bg-white relative z-10">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15866.jpg"
              alt="Review"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="testimonial-text text-white">
          <p className="uppercase text-sm tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-lg font-medium leading-relaxed">
            A wonderful stay in Ayodhya! The Sri Janaki Mahal Trust provided excellent value for money with their
            comfortable and clean rooms. The central location made it easy to explore the city's historic sites. The
            complimentary breakfast and friendly staff were added bonuses. Highly recommended.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Sanjay Sharma"
            />
            <span className="font-semibold text-lg">Sanjay Sharma</span>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Testimonials;
