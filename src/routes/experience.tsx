import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Experience";
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col justify-start items-center min-h-screen px-8 py-8 mb-8 bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-3xl text-left">
          {/* Publicis Sapient Section */}
          <div className="">
            <h3 className="text-md font-semibold text-teal-600">
              PUBLICIS SAPIENT AB
            </h3>
            <p className="text-md text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2022 - PRESENT
              </code>
            </p>
            <p className="text-gray-200 mt-4">
              Worked on enhancing and optimizing internal systems for global
              brands. Involved in key projects like Email transaction systems,
              large microservices, and cloud solutions.
            </p>
            <hr />
          </div>

          {/* Pandora Section */}
          <div className="mt-6 ml-4">
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>PANDORA</b>] - JUNIOR SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Bloomreach Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2022 – July 2023
              </code>
            </p>
            {/*  <p className="text-gray-200">
              Developed solutions for Pandora's transactional email system,
              collaborating closely with the team on improving customer
              engagement through automation.
            </p> */}
            <hr />
          </div>

          {/* ECRF CodeAid Section */}
          <div className="mt-6 ml-4">
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>ECRF</b> CODEAID] - ASSOCIATE SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Software Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                September 2023 – August 2024
              </code>
            </p>
            {/*  <p className="text-gray-200">
              Contributing to charity projects and improving web solutions for
              the Elephant Care Relief Foundation (ECRF) through a more
              intuitive and responsive web design.
            </p> */}
            <hr />
          </div>

          {/* NCP National Car Parks Section */}
          <div className="mt-6 ml-4">
            <h3 className="text-1xl font-semibold text-gray-200 mt-2">
              [<b>NCP</b> NATIONAL CAR PARKS] - ASSOCIATE SOFTWARE ENGINEER
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              Backend Engineer
            </p>
            <p className="text-md text-muted-foreground mt-1 mb-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                February 2024 – July 2024
              </code>
            </p>
            {/*  <p className="text-gray-200">
              Worked on optimizing backend systems, focusing on scalable
              solutions for managing large amounts of data and enhancing the
              overall infrastructure.
            </p> */}
            <hr />
          </div>
        </div>
      </motion.div>

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
