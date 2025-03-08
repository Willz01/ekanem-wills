import { getColor } from "@/lib/common";
import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, Framer, Github, Linkedin, MailOpen } from "lucide-react";
import { useEffect, useState } from "react";
import "../index.css";
import { Skills } from "@/components/skills";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollEnd } from "@/components/scroller";

export const Route = createFileRoute("/")({
  component: Home,
});

const handleMailClick = () => {
  window.location.href = "mailto:ekanemwills1@gmail.com"; // Replace with your email address
};

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "Home";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("loaded")) {
      setShowLoader(true);
      sessionStorage.setItem("loaded", "true");
    }
  }, []);

  useEffect(() => {
    if (showLoader) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next === 100) {
            clearInterval(interval);
            setTimeout(() => setShowLoader(false), 1000); // slight pause before remove
          }
          return next;
        });
      }, 30); // slower and smooth
    }
  }, [showLoader]);

  useScrollEnd("/about");

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 text-white"
          >
            {/* Framer Icon, Large and Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center text-red-400"
            >
              <Framer
                size={200}
                strokeWidth={1.5}
                className="text-cyan-400 opacity-20"
              />
            </motion.div>
            {/* Progress Bar Container */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Percentage */}
              <motion.div
                key={progress}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold z-10"
              >
                {progress}%
              </motion.div>

              {/* Progress Bar */}
              <div className="w-full max-w-md mt-6 h-2 bg-neutral-800 rounded-full overflow-hidden z-10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-teal-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main
        className={`transition-opacity duration-700 ${showLoader ? "opacity-0" : "opacity-100"}`}
      >
        <MainIndexContent />
      </main>
    </>
  );
}

function MainIndexContent() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-screen bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat text-white px-6">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-center leading-tight lg:text-6xl max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hey, I'm{" "}
          <span
            className={`${getColor()} font-extrabold underline decoration-teal-500`}
            id="wills-name-text"
          >
            Wills Ekanem
          </span>
          <br />a Backend Engineer crafting scalable systems.
        </motion.h1>

        <motion.p
          className="mt-4 text-center text-lg text-gray-200 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Microservices || Cloud solutions || Networking.
        </motion.p>

        <motion.div
          className="flex justify-center items-center space-x-6 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/ekanem-wills-17we"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-teal-400 transition-colors" />
          </a>
          <MailOpen
            onClick={handleMailClick}
            className="w-6 h-6 hover:text-teal-400 transition-colors cursor-pointer"
          />
          <a
            href="https://github.com/Willz01"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 hover:text-teal-400 transition-colors" />
          </a>
          <a href="/assets/resume.pdf" target="_blank" aria-label="Resume">
            <FileTextIcon className="w-6 h-6 hover:text-teal-400 transition-colors" />
          </a>
        </motion.div>
      </div>
      <Skills />
    </>
  );
}
