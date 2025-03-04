import { Skills } from "@/components/skills";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Route = createFileRoute("/education")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Education";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      {/* Background with overlay and smooth zoom */}
      <motion.div
        initial={{ scale: 1, filter: "blur(8px)" }}
        animate={{ scale: 1.05, filter: "blur(0px)" }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="fixed inset-0 -z-10 bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Main content with adjusted spacing and centered text */}
      <div className="relative flex flex-col justify-start items-center min-h-screen px-8 py-20">
        <div className="max-w-lg text-center">
          {/* First Education Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <hr />
            <h2 className="text-md font-semibold tracking-tight sm:text-md text-teal-600 mt-2">
              SOFTWARE DEVELOPMENT
            </h2>
            <p className="text-l font-lightbold text-gray-200 mt-2 mb-3">
              Bachelors of Science (180 credits) with a major in Computer
              Science
            </p>
            <p className="text-sm text-muted-foreground">
              KRISTIANSTAD UNIVERSITY, SWEDEN
            </p>
            <p className="text-sm text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2019 - May 2022
              </code>
            </p>
            <hr />
          </motion.div>

          {/* Second Education Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mt-6"
          >
            <hr />
            <h2 className="text-md font-semibold tracking-tight sm:text-md text-teal-600 mt-2">
              COMPUTER SYSTEMS, NETWORKING & CYBER-SECURITY
            </h2>
            <p className="text-l font-lightbold text-gray-200 mt-2 mb-3">
              Masters of Science (120 credits) with a major in Computer Science
            </p>
            <p className="text-sm text-muted-foreground">
              CHALMERS UNIVERSITY, SWEDEN
            </p>
            <p className="text-sm text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                Sept 2025 - May 2027
              </code>
            </p>
            <hr />
          </motion.div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mt-6"
          >
            <hr />
            <p className="text-l font-semibold text-blue-800 mt-2 mb-3">
              <a
                href="https://learn.microsoft.com/en-gb/users/willsekanem-6040/credentials/ce24f6c65f425ae4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Azure Fundamentals
              </a>
            </p>
            <hr />
          </motion.div>
        </div>
      </div>
      {/* Skills Section */}
      <Skills />
    </>
  );
}
