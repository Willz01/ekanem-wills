import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (

    <div className="flex flex-col justify-center items-center mt-8 m-2">
      <p className='scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl text-center max-w-xl mt-8'>
        PASSIONATE AND RESOURCEFUL SOFTWARE ENGINEER WITH 3 YEARS OF EXPERIENCE BUILDING ROBUST,
        SCALABLE APPLICATIONS. ALWAYS EAGER TO LEARN, ADAPT, AND EXPLORE CUTTING-EDGE BACKEND TECHNOLOGIES,
        I THRIVE IN DYNAMIC PROJECTS THAT CHALLENGE ME TO GROW.
      </p>
    </div>
  )
}
