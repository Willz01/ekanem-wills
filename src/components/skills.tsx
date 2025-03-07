import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

function Skills() {
  return (
    <motion.div
      initial={{ y: "0%" }} // Start fully below the screen
      animate={{ y: 0 }} // Slide up into position
      transition={{ duration: 2, ease: "anticipate", delay: 1 }}
    >
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg flex flex-wrap justify-center gap-2 px-4 mt-4">
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
          "Database Manangement",
        ].map((tech) => (
          <Badge
            key={tech}
            variant={"outline"}
            className={bgColor().toString()}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

const bgColor = () => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export { Skills };
