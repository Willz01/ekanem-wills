import { Badge } from "./ui/badge";

function Skills() {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg flex flex-wrap justify-center gap-2 px-4">
      {[
        "Microservices",
        ".NET",
        "Azure",
        "Kafka",
        "Java",
        "Python",
        "Bloomreach",
        "Node/bun",
        "JavaScript",
      ].map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  );
}

export { Skills };
