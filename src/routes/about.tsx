import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "../index.css";
import { Skills } from "@/components/skills";

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
    <div
      className="flex flex-col justify-center items-center h-screen"
      /* style={{ backgroundImage: "url(/assets/rv.jpeg)" }} */
    >
      <div>
        <p
          className="scroll-m-20 text-1xl font-bold
      lg:text-1xl text-center max-w-xl m-4 text-silver-600"
        >
          PASSIONATE AND RESOURCEFUL SOFTWARE ENGINEER WITH 3 YEARS OF
          EXPERIENCE DESIGNING AND DEVELOPING SCALABLE, HIGH-PERFORMANCE
          APPLICATIONS. I THRIVE IN DYNAMIC ENVIRONMENTS, CONSTANTLY LEARNING
          AND ADAPTING TO EMERGING BACKEND TECHNOLOGIES. WITH A KEEN EYE FOR
          EFFICIENCY AND ROBUST SYSTEM ARCHITECTURE, I ENJOY TACKLING COMPLEX
          CHALLENGES THAT PUSH ME TO GROW
        </p>
      </div>

      <Skills />
    </div>
  );
}
