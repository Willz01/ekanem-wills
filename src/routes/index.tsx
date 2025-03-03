import { getColor } from "@/lib/common";
import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, Github, Linkedin, MailOpen } from "lucide-react";
import { useEffect } from "react";
import "../index.css";
import { Skills } from "@/components/skills";

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
    <div className="flex flex-col justify-center items-center h-screen bg-[url('/assets/rv.jpeg')] bg-cover bg-center bg-no-repeat">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center max-w-xl">
        Hey there, my name is{" "}
        <p className={getColor().toString()} id="wills-name-text">
          Wills Ekanem
        </p>{" "}
        and I am a Backend Engineer.
      </h1>

      <div className="flex justify-center items-center space-x-6 mt-4">
        <a href="https://www.linkedin.com/in/ekanem-wills-17we" target="_blank">
          <Linkedin />
        </a>
        <MailOpen onClick={handleMailClick} />
        <a href="https://github.com/Willz01" target="_blank">
          <Github />
        </a>
        <a href="/assets/resume.pdf" target="_blank">
          <FileTextIcon />
        </a>
      </div>

      <Skills />
    </div>
  );
}
