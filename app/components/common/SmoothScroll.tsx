'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 30,
    mass: 0.27
  })

  const y = useTransform(smoothProgress, [0, 1], ["0%", "-100%"])

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-screen overflow-auto will-change-transform scrollbar-none smooth-scroll-container"
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <motion.div
        style={{ y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
} 