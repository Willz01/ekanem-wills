import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, MailOpen } from 'lucide-react'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})


const handleMailClick = () => {
  window.location.href = "mailto:ekanemwills1@gmail.com"; // Replace with your email address
};

const COLORS = [
  "text-teal-600", "text-slate-500",
  "text-orange-500", "text-amber-500",
  "text-yellow-400", "text-lime-400",
  "text-emerald-600", "text-blue-600",
  "text-purple-600", "text-pink-400"]

function Home() {

  useEffect(() => {
    document.title = "Index"
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen m-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center max-w-xl">
        Hey there, my name is <p className={COLORS[Math.floor(Math.random() * COLORS.length)]}>Wills Ekanem</p> and I am a Backend Engineer.
      </h1>

      <div className="flex justify-center items-center space-x-6 mt-4">
        <a href="https://www.linkedin.com/in/ekanem-wills-17we/" target='_blank'><Linkedin /></a>
        <MailOpen onClick={handleMailClick} />
        <a href="https://github.com/Willz01" target='_blank'><Github /></a>
      </div>
    </div>
  );


}
