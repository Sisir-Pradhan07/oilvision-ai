import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Predict", path: "/predict" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="group text-2xl font-bold tracking-wide text-white"
        >
          Oil<span className="text-blue-500">Vision</span>{" "}

          {/* Digital Ambient AI */}
          <span className="relative inline-flex items-center justify-center">

            {/* Outer orbital ring */}
            <motion.span
              className="absolute h-8 w-12 rounded-full border border-cyan-400/40"
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.8, 0.45],
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Inner orbital ring */}
            <motion.span
              className="absolute h-9 w-11 rounded-full border border-violet-400/25"
              animate={{
                rotate: -360,
                scale: [1, 0.94, 1],
              }}
              transition={{
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Moving energy dot */}
            <motion.span
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "24px 0px",
              }}
            />

            {/* AI text */}
            <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              AI
            </span>

          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Get Started */}
          <NavLink
            to="/predict"
            className="group ml-2 flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-blue-500/20 hover:text-cyan-300"
          >
            Get Started

            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-slate-300 transition-colors duration-200 hover:bg-slate-800/60 hover:text-white md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
                scale: 0.8,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
              className="block"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="px-4 py-3">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile Get Started */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: navLinks.length * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-2 border-t border-slate-800/60 pt-3"
              >
                <NavLink
                  to="/predict"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:text-cyan-300"
                >
                  Get Started
                  <FiArrowRight size={16} />
                </NavLink>
              </motion.div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;