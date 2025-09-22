"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="font-bold text-xl">⚡ Portfolio</div>

        {}
        <ul className="hidden md:flex gap-6">
          {[
            "home",
            "about",
            "skills",
            "project",
            "experience",
            "education",
            "contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-green-400 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-3 py-2 border border-gray-500 rounded-lg text-white"
        >
          ☰
        </button>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            <ul className="flex flex-col items-center gap-6 mt-20 text-white">
              {[
                "home",
                "about",
                "skills",
                "project",
                "experience",
                "education",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-green-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
