import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeInOut", delay: i * 0.2 },
  }),
};

function Experience() {
  document.title = "Experience";

  return (
    <>
      {/* Background with blur effect */}
      <motion.div
        initial={{ scale: 1, filter: "blur(8px)" }}
        animate={{ scale: 1.05, filter: "blur(0px)" }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="fixed inset-0 -z-10 bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Main content with adjusted spacing and centered text */}
      <div className="relative flex flex-col justify-start items-center min-h-screen px-8 py-20">
        <div className="max-w-3xl text-left">
          {/* Publicis Sapient Section */}
          <div>
            <h3 className="text-md font-semibold text-teal-600">
              PUBLICIS SAPIENT AB
            </h3>
            <p className="text-md text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2022 - PRESENT
              </code>
            </p>
            <p className="text-gray-200 text-sm mt-4 mb-4">
              Worked on enhancing and optimizing internal systems for global
              brands. Involved in key projects like Email transaction systems,
              large microservices, and cloud solutions.
            </p>
            <hr />
          </div>

          {/* Pandora Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mt-6 ml-4"
          >
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>PANDORA</b>] - JUNIOR SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Bloomreach Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-4">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2022 – July 2023
              </code>
            </p>
            <hr />
          </motion.div>

          {/* ECRF CodeAid Section */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mt-6 ml-4"
          >
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>ECRF</b> CODEAID] - ASSOCIATE SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Software Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-4">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2023 – August 2024
              </code>
            </p>
            <hr />
          </motion.div>

          {/* NCP National Car Parks Section */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mt-6 ml-4"
          >
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>NCP</b> NATIONAL CAR PARKS] - ASSOCIATE SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Backend Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-4">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                February 2024 – July 2024
              </code>
            </p>
            <hr />
          </motion.div>
        </div>
      </div>

      {/* Call to Action for CV */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Button
          onClick={() => {
            window.open("/assets/resume.pdf", "_blank");
          }}
          className="text-teal-600 font-semibold text-lg px-6 py-3 bg-white rounded-lg shadow-md hover:bg-teal-100 transition duration-300"
        >
          Download My CV
        </Button>
      </div>
    </>
  );
}
