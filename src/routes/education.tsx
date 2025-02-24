import { Skills } from "@/components/skills";
import { createFileRoute } from "@tanstack/react-router";
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
    <div className="flex flex-col justify-start items-start p-8 mb-3 h-screen">
      <div className="max-w-lg">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl text-teal-600">
          Software Development
        </h2>
        <p className="text-l font-semibold text-gray-500 mt-2 mb-3">
          Bachelors of Science (180 credits) with a major in Computer Science
        </p>
        <p className="text-sm text-muted-foreground">
          KRISTIANSTAD UNIVERSITY, SWEDEN
        </p>
        <p className="text-sm text-muted-foreground mt-1 mb-2">
          {" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            September 2019 - May 2022
          </code>
        </p>
      </div>
      <div className="max-w-lg mt-4">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl text-teal-600">
          Computer Systems & Networking, Cyber-Security
        </h2>
        <p className="text-l font-semibold text-gray-500 mt-2 mb-3">
          Masters of Science (120 credits) with a major in Computer Science
        </p>
        <p className="text-sm text-muted-foreground">
          CHALMERS UNIVERSITY, SWEDEN
        </p>
        <p className="text-sm text-muted-foreground mt-1 mb-2">
          {" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Sept 2025 - May 2027
          </code>
        </p>
        <div className="mt-5 text-md text-muted-foreground leading-relaxed">
          <p className="font-semibold text-grey-800"></p>
        </div>
      </div>

      <div className="max-w-lg mt-5">
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
      </div>
      <Skills />
    </div>
  );
}
