'use client'

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import CourseTimeline from "./components/education/CourseTimeline"
import Navbar from "./components/common/Navbar"
import MySkills from './components/sections/MySkills'
import Experience from './components/sections/Experience'
import { Box } from '@mui/material'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />    
        <About />
        <MySkills />
        <Experience />
        
        <section id="education" className="relative">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            p: 4,
          }}>
            <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>
            <CourseTimeline />
          </Box>
        </section>
      </main>
    </>
  )
}
