'use client'

import SmoothScroll from "./components/common/SmoothScroll"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <About />
    </SmoothScroll>
  )
}
