import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"; // Defaulting to light mode
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 shadow-sm cursor-pointer relative overflow-hidden"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex justify-center items-center"
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? 0 : -40 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <Moon className="w-5 h-5 text-indigo-400" />
      </motion.div>
    </motion.button>
  );
}
