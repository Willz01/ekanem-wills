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
      className="flex flex-col justify-start items-start h-screen bg-[url('/assets/33.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mt-8" >
        <div className="text-sm font-semibold lg:text-md text-center max-w-xl m-4 text-silver-600 mb-8 ">
          {/* <p className="text-teal-300 text-sm ml-2 mt-4">Passionate and resourceful developer</p> */}
          <p>
            WITH 3 YEARS OF EXPERIENCE AS A SOFTWARE ENGINEER,
            I SPECIALIZE IN DESIGNING AND DEVELOPING SCALABLE,
            HIGH-PERFORMANCE APPLICATIONS. MY PASSION LIES IN
            CREATING EFFICIENT AND ROBUST SYSTEM ARCHITECTURES THAT NOT ONLY MEET BUT EXCEED EXPECTATIONS.

          </p>
        </div>

        <div className="text-sm font-semibold lg:text-md text-center max-w-xl m-4 text-silver-600 mb-8">
          {/* <p className="text-teal-300 text-sm ml-2">Constant learner and adapter</p> */}
          <p >
            I THRIVE IN DYNAMIC ENVIRONMENTS, CONSTANTLY
            EVOLVING MY SKILLS TO STAY AHEAD IN THE FAST-PACED
            WORLD OF EMERGING BACKEND TECHNOLOGIES. LEARNING AND
            ADAPTING ARE AT THE CORE OF MY APPROACH, ENSURING THAT I CAN TACKLE ANY CHALLENGE THAT COMES MY WAY.
          </p>

        </div>


        <div className="text-sm font-semibold lg:text-md text-center max-w-xl m-4 text-silver-600 mb-8">
          {/* 
        <div>
          <p className="text-teal-300 text-sm ml-2">Efficient problem solver</p>
        </div> */}

          <p>
            WITH A KEEN EYE FOR EFFICIENCY, I ENJOY TAKING ON COMPLEX CHALLENGES
            THAT PUSH ME TO GROW BOTH PROFESSIONALLY AND PERSONALLY. MY COMMITMENT
            TO EXCELLENCE DRIVES ME TO FIND INNOVATIVE SOLUTIONS THAT ELEVATE THE PERFORMANCE AND RELIABILITY OF EVERY PROJECT I UNDERTAKE.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
