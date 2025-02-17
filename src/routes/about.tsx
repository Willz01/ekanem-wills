import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
      style={{ backgroundImage: "url(/assets/rv.jpeg)" }}
    >
      <p
        className="scroll-m-20 text-2xl font-bold
      lg:text-2xl text-center max-w-xl m-4 text-silver-600"
      >
        PASSIONATE AND RESOURCEFUL SOFTWARE ENGINEER WITH 3 YEARS OF EXPERIENCE
        BUILDING ROBUST, SCALABLE APPLICATIONS. ALWAYS EAGER TO LEARN, ADAPT,
        AND EXPLORE CUTTING-EDGE BACKEND TECHNOLOGIES, I THRIVE IN DYNAMIC
        PROJECTS THAT CHALLENGE ME TO GROW.
      </p>
    </div>
  );
}
