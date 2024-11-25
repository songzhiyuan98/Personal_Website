'use client'

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import CourseTimeline from "./components/education/CourseTimeline"
import Navbar from "./components/common/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="education" className="relative py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <CourseTimeline />
          </div>
        </section>
      </main>
    </>
  )
}
