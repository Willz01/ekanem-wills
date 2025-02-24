import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Framer } from "lucide-react";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function NavBar() {
  return (
    <>
      <div className="p-2 flex justify-between max-w-2xl m-auto items-baseline sticky top-0 z-50">
        <div className="p-2 flex gap-2 m-auto">
          <Link to="/" className="[&.active]:font-bold mr-5">
            <Framer />
          </Link>
          <Link
            to="/about"
            className="[&.active]:font-bold mr-1 ml-8 text-base"
          >
            About
          </Link>
          <Link to="/education" className="[&.active]:font-bold mr-1 text-base">
            Education
          </Link>
          <Link
            to="/experience"
            className="[&.active]:font-bold mr-2 text-base"
          >
            Experience
          </Link>
        </div>
        <div className="mr-2">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

function Root() {
  useEffect(() => {
    document.title = "Wills Ekanem";
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <hr />
        <div>
          <Outlet />
        </div>
        {/*    <TanStackRouterDevtools /> */}
      </ThemeProvider>
    </>
  );
}
