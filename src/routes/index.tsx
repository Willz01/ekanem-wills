import { Badge } from "@/components/ui/badge";
import { getColor } from "@/lib/common";
import { createFileRoute } from "@tanstack/react-router";
import { FileUser, Github, Linkedin, MailOpen } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const handleMailClick = () => {
  window.location.href = "mailto:ekanemwills1@gmail.com"; // Replace with your email address
};

function Home() {
  useEffect(() => {
    document.title = "Index";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center max-w-xl">
        Hey there, my name is{" "}
        <p className={getColor().toString()}>Wills Ekanem</p> and I am a Backend
        Engineer.
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
          <FileUser />
        </a>
      </div>

      <div className="absolute bottom-4 w-full flex flex-wrap justify-center gap-2 px-4">
        <Badge>Microservices</Badge>
        <Badge>.NET</Badge>
        <Badge>Azure</Badge>
        <Badge>Kafka</Badge>
        <Badge>Java</Badge>
        <Badge>Python</Badge>
        <Badge>Bloomreach</Badge>
        <Badge>Node/bun</Badge>
        <Badge>JavaScript</Badge>
      </div>
    </div>
  );
}
