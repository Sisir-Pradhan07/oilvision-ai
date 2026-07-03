import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Oil<span className="text-blue-500">Vision</span> AI
        </NavLink>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;