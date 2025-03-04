import { getColor } from "@/lib/common";
import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, Github, Linkedin, MailOpen } from "lucide-react";
import { useEffect } from "react";
import "../index.css";
import { Skills } from "@/components/skills";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Home,
});

const handleMailClick = () => {
  window.location.href = "mailto:ekanemwills1@gmail.com"; // Replace with your email address
};

function Home() {
  useEffect(() => {
    document.title = "Home";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

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
