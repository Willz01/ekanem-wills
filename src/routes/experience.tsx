import { Skills } from "@/components/skills";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    document.title = "Experience";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-screen p-8 mb-3 bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-3xl">
        <div className="mt-1">
          <h3 className="text-md font-semibold text-teal-600">
            PUBLICIS SAPIENT AB
          </h3>
          <p className="text-md text-muted-foreground mt-1 mb-2">
            {" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              September 2022 - PRESENT
            </code>
          </p>
        </div>

        <div className="mt-6 ml-4">
          <hr />
          <h3 className="text-1xl font-semibold text-gray-200 mt-2">
            [<b>PANDORA</b>] - JUNIOR SOFTWARE ENGINEER
          </h3>
          <p className="text-sm font-semibold text-gray-600">
            Bloomreach Engineer{" "}
          </p>
          <p className="text-md text-muted-foreground mt-1 mb-2">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              September 2022 – July 2023
            </code>
          </p>
          {/*   <ul className="list-disc pl-5 text-gray-500 mt-2 font-semibold text-sm">
            <li>
              Worked on deploying an internal engineering standards portal using
              Jekyll and Azure.
            </li>
            <li>
              Collaborated with client partners Pandora on their Transactional
              Email Integration System using Bloomreach, Kafka, Java, Spring
              Boot, Jinja3, and SFMC to trigger customer order-related emails.
            </li>
          </ul> */}
          <hr />
        </div>

        <div className="mt-6 ml-4">
          <hr />
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
          {/*  <ul className="list-disc pl-5 text-gray-500 mt-2 font-semibold text-sm">
            <li>
              Contributing charity work for CodeAid supported company Elephant
              Care Relief Foundation (ECRF), a wildlife care foundation based in
              Sri Lanka that cares for elephants.
            </li>
            <li>
              Working on redesigning and delivering a robust, easy-to-navigate,
              and improved web solution for the foundation using vercel and
              Builder.io
            </li>
          </ul> */}
          <hr />
        </div>

        <div className="mt-6 ml-4">
          <hr />
          <h3 className="text-1xl font-semibold text-gray-200 mt-2">
            [<b>NCP</b> NATIONAL CAR PARKS] - ASSOCIATE SOFTWARE ENGINEER
          </h3>
          <p className="text-sm font-semibold text-gray-600">
            Backend Engineer
          </p>
          <p className="text-md text-muted-foreground mt-1 mb-2">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Febraury 2024 – July 2024
            </code>
          </p>
          {/*  <ul className="list-disc pl-5 text-gray-500 mt-2 font-semibold text-sm">
            <li>
              Contributing to the design and implementation of RESTful APIs,
              ensuring efficiency and scalability.
            </li>
            <li>
              Working with NCP microservices using Azure functions, queues,
              blob, APIM in ASP.NET.
            </li>
          </ul> */}
          <hr />
        </div>
      </div>

      <Skills />
    </div>
  );
}
