import { Progress } from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  onFinish: () => void;
};

export function Loader({ onFinish }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 1, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 800); // small delay
        }
        return next;
      });
    }, 40);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 text-white"
    >
      <motion.span
        key={progress}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-5xl font-bold"
      >
        {progress}%
        <Progress value={progress} className="w-[60%]" />
      </motion.span>
    </motion.div>
  );
}
