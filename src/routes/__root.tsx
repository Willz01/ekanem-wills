import { ThemeProvider } from "@/components/theme-provider";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Framer } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createRootRoute({
  component: Root,
});

function NavBar() {
  return (
    <>
      <div className="p-2 flex justify-between max-w-2xl m-auto items-baseline fixed top-0 w-full top-0 z-50">
        <div className="p-2 flex gap-2 m-auto">
          <Link to="/" className="[&.active]:font-bold mr-5">
            <Framer />
          </Link>
          <Link to="/about" className="[&.active]:font-extrabold text-base">
            About
          </Link>
          <Link to="/education" className="[&.active]:font-extrabold text-base">
            Education
          </Link>
          <Link
            to="/experience"
            className="[&.active]:font-extrabold text-base"
          >
            Experience
          </Link>
        </div>
        {/* <div className="mr-2">
            <ModeToggle />
          </div> */}
      </div>
    </>
  );
}

function Root() {
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 20, y: 40 }}
          animate={{ opacity: 11, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen" // optional, to make sure it fills the page
        >
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <NavBar />
            <hr />
            <div>
              <Outlet />
            </div>
            {/*    <TanStackRouterDevtools /> */}
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
