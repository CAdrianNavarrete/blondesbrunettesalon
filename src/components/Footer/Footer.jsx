import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-10" />
              <p className="text-xl font-serif">BLONDES & BRUNETTES</p>
            </div>
            <p>Av. Mariscal Ramón Castilla 650, Miraflores 15048</p>
            <p>@ 2025 BBS.</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Horarios</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Lunes a viernes 9am - 8pm</a>
                </li>
                <li>
                  <a href="#">Sabados y Domingos 10am -  9pm</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Servicios</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Peinados</a>
                </li>
                <li>
                  <a href="#">Maquillaje</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contacto</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+51 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact.thecodingjourney@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; 2025 BBS. Todos los Derechos Reservados
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
