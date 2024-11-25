'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // 创建容器引用
  const containerRef = useRef<HTMLDivElement>(null)
  
  // 获取滚动进度
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  // 创建平滑的滚动动画
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15, // 阻尼
    stiffness: 30, // 刚度
    mass: 0.27 // 质量
  })

  // 将滚动进度转换为Y轴位移
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-100%"])

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-screen overflow-auto will-change-transform scrollbar-none smooth-scroll-container"
      style={{
        WebkitOverflowScrolling: 'touch', // 启用移动端平滑滚动
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