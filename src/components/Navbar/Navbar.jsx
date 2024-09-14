import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "Ofertas",
    link: "#",
  },
  {
    id: 2,
    title: "Servicios",
    link: "#",
  },
  {
    id: 3,
    title: "Peinados",
    link: "#",
  },
  {
    id: 4,
    title: "Contactanos",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center bg-pink-100"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3 ">
          <img src={Logo} alt="logo" className="w-20" />
          <span className="text-2xl font-serif">BLONDES</span>
          <span className="text-2xl font-serif hidden md:block">& </span>
          <span className="text-2xl font-serif hidden md:block">BRUNETTES</span>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <div>
          <button className="primary-btn"  onClick={() => window.open('https://wa.me/+51934301648?text=Hola,%20quiero%20reservar%20una%20cita', '_blank')}>
            Reserva Ahora 

            </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
