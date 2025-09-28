import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = ["Home", "Menu", "About", "Gallery", "Contact"];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12"
    >
      <motion.div
        className={`mx-auto flex justify-between items-center transition-all duration-500
          ${scrolled ? "bg-black/50 py-2 rounded-2xl shadow-xl" : "py-4 rounded-none"}
        `}
      >
        {/* Logo Image */}
        <div className="flex items-center gap-2">
          <img
            src="/logo2.png"
            alt="Shuddh Swad Logo"
            className="w-20 rounded-full md:w-28 h-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {links.map((item, i) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={i} className="relative">
                <Link
                  to={path}
                  className="px-2 py-1 transition-all duration-300"
                >
                  <span>{item}</span>
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-white cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-amber-600 text-white px-6 py-6 space-y-4 rounded-2xl shadow-xl"
          >
            {links.map((item, i) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={i}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 relative transition-all duration-300"
                >
                  <span>{item}</span>
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                    initial={{ scaleX: 0 }}
                    animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
