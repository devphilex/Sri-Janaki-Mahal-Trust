import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaParking, FaWifi, FaHeart, FaBell } from "react-icons/fa";
import { MdLocalLaundryService, MdSecurity, MdPower } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { GiFireExtinguisher } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillHouseDoorFill, BsCameraVideoFill } from "react-icons/bs";
import { FaElevator } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  { icon: <FaParking size={42} />, label: "Free Parking" },
  { icon: <IoIosNotifications size={42} />, label: "Fire Alarm" },
  { icon: <MdLocalLaundryService size={42} />, label: "Washing Machine" },
  { icon: <Ri24HoursLine size={42} />, label: "24h Lobby" },
  { icon: <GiFireExtinguisher size={42} />, label: "Fire Extinguishers" },
  { icon: <FaHeart size={42} />, label: "Couple Friendly" },
  { icon: <FaBell size={42} />, label: "Bellboy Service" },
  { icon: <FaElevator size={42} />, label: "Elevator" },
  { icon: <BsCameraVideoFill size={42} />, label: "CCTV" },
  { icon: <FaWifi size={42} />, label: "WIFI" },
  { icon: <MdSecurity size={42} />, label: "Security" },
  { icon: <MdPower size={42} />, label: "Power Backup" },
];

const Amenities = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // useEffect(() => {
  //   gsap.from(itemRefs.current, {
  //     y: 60,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 85%",
  //     },
  //   });
  // }, []);

  return (
    <section ref={sectionRef} id="amenities" className="w-full py-12 px-4 bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/aboutUsBackground.jpg')" }} >
      <h2 className="text-2xl font-bold text-center mb-10">Hotel Facilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {facilities.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="flex flex-col items-center justify-center p-4 border rounded-md shadow bg-white hover:shadow-lg transition"
          >
            <div className="text-black mb-2">{item.icon}</div>
            <p className="font-medium text-sm text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
