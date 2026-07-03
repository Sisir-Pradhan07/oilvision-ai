import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-slate-400 md:flex-row">
        <p>© 2026 OilVision AI. All rights reserved.</p>

        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;