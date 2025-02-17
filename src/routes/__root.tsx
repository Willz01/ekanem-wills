import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: Root
})

function NavBar() {
  return (
    <>
      <div className="p-2 flex justify-between max-w-2xl m-auto items-baseline">
        <Link to="/" className="[&.active]:font-bold">
          <h1 className='text-l font-bold mt-auto mb-3'>Wills Ekanem</h1>
        </Link>{' '}

        <div className='p-2 flex gap-2 m-3'>
          <Link to="/about" className="[&.active]:font-bold mr-2">
            About
          </Link>{' '}
          <Link to="/education" className="[&.active]:font-bold mr-2">
            Education
          </Link>{' '}
          <Link to="/experience" className="[&.active]:font-bold mr-2">
            Experience
          </Link>
          {/*   <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="[&.active]:font-bold"
          >
            Resume
          </a> */}

        </div>
        <div className='mr-2'>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

function Root() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <NavBar />
        <hr />
        <div>
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </ThemeProvider>

    </>
  )

}