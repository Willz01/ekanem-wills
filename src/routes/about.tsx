import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "../index.css";
import { Skills } from "@/components/skills";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  useEffect(() => {
    document.title = "About";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, y: -30 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative min-h-screen flex flex-col justify-start items-center p-8 bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <motion.div
          className="flex flex-col items-center max-w-3xl w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.4, // Delay between paragraphs
              },
            },
          }}
        >
          {[
            "WITH 3 YEARS OF EXPERIENCE AS A SOFTWARE ENGINEER, I SPECIALIZE IN DESIGNING AND DEVELOPING SCALABLE, HIGH-PERFORMANCE APPLICATIONS. MY PASSION LIES IN CREATING EFFICIENT AND ROBUST SYSTEM ARCHITECTURES THAT NOT ONLY MEET BUT EXCEED EXPECTATIONS.",
            "I THRIVE IN DYNAMIC ENVIRONMENTS, CONSTANTLY EVOLVING MY SKILLS TO STAY AHEAD IN THE FAST-PACED WORLD OF EMERGING BACKEND TECHNOLOGIES. LEARNING AND ADAPTING ARE AT THE CORE OF MY APPROACH, ENSURING THAT I CAN TACKLE ANY CHALLENGE THAT COMES MY WAY.",
            "WITH A KEEN EYE FOR EFFICIENCY, I ENJOY TAKING ON COMPLEX CHALLENGES THAT PUSH ME TO GROW BOTH PROFESSIONALLY AND PERSONALLY. MY COMMITMENT TO EXCELLENCE DRIVES ME TO FIND INNOVATIVE SOLUTIONS THAT ELEVATE THE PERFORMANCE AND RELIABILITY OF EVERY PROJECT I UNDERTAKE.",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-sm font-semibold lg:text-md text-center max-w-xl m-4 text-silver-600 mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <Skills />
    </>
  );
}
