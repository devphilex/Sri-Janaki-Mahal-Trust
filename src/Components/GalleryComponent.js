import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    image: "/room1.jpeg",
    title: "AC Room With 4 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹2550/- Per Day",
  },
  {
    image: "/room2.jpeg",
    title: "Non AC Room With 4 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹2250/- Per Day",
  },
  {
    image: "/room3.jpeg",
    title: "Non AC Room With 2 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹1250/- Per Day",
  },
  {
    image: "/room4.jpeg",
    title: "AC Room With 2 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹1650/- Per Day",
  },
  {
    image: "/room5.jpeg",
    title: "Non AC Room With 3 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹1850/- Per Day",
  },
  {
    image: "/room6.jpeg",
    title: "AC Room With 3 Beds",
    details: "Breakfast & Lunch Dinner + GST Included",
    price: "₹2050/- Per Day",
  },
];

const Rooms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room-card img", {
        scale: 0.8,
        opacity: 0,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card button", {
        scale: 0,
        opacity: 0,
        duration: 3.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card .price", {
        scale: 0,
        opacity: 0,
        duration: 3.4,
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
    <section ref={sectionRef} id="rooms" className="w-full py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="room-card shrink-0 bg-[#000] text-white w-[370px] rounded-md shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center gap-2">
              {/* <h3 className="text-lg font-semibold mb-1">{room.title}</h3> */}
              <p className="text-sm">{room.details}</p>
              <p className="price text-base font-bold">Price : {room.price}</p>
              {/* <a href="https://wa.me/+918878476451">
                <button className="px-4 py-1 bg-orange-600 w-fit text-white rounded-full font-mono text-xs font-bold">
                  Book Now
                </button>
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
