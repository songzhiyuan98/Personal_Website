'use client'

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import CourseTimeline from "./components/education/CourseTimeline"
import Navbar from "./components/common/Navbar"
import MySkills from './components/sections/MySkills'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />    
        <About />
        <MySkills />
        
        <section id="education" className="relative py-20">
          <div className="w-[90%] lg:w-[85%] mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>
            <CourseTimeline />
          </div>
        </section>
      </main>
    </>
  )
}
