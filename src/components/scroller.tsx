import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export function useScrollEnd(path: string) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      if (scrollPosition >= pageHeight) {
        navigate({ to: path });
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, path]);
}

export function useScrollTop(path: string, threshold = 10) {
  const navigate = useNavigate();
  const location = useLocation();
  const triggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= threshold && !triggered.current) {
        triggered.current = true;
        navigate({ to: path });
        console.log("Navigating to", path);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      triggered.current = false; // Reset on cleanup
    };
  }, [navigate, path, location.pathname, threshold]);
}
