'use client'

import AnimatedText from "../common/AnimatedText"
import { motion, useScroll, useTransform } from "framer-motion"

interface CourseItem {
  date: string
  title: string
  description: string
}

const courses: CourseItem[] = [
  {
    date: "2023 - 现在",
    title: "加州大学圣克鲁兹分校",
    description: "计算机科学专业 | GPA: 3.8"
  },
  {
    date: "2024 冬季",
    title: "CSE 130: 计算机系统原理",
    description: "计算机体系结构、操作系统、编译器设计"
  },
  {
    date: "2023 秋季",
    title: "CSE 101: 算法与抽象数据类型",
    description: "数据结构、算法分析、动态规划"
  },
  {
    date: "2023 秋季",
    title: "CSE 120: 计算机体系结构",
    description: "处理器设计、内存层次结构、并行计算"
  }
]

export default function CourseTimeline() {
  const { scrollYProgress } = useScroll()
  
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.9], // 滚动范围
    ["0%", "100%"] // 对应的高度范围
  )

  return (
    <div className="max-w-4xl mx-auto relative">
      <motion.div 
        className="absolute left-1/2 top-0 w-px h-full bg-black dark:bg-white origin-top"
        style={{ scaleY: lineHeight }}
      />
      
      {courses.map((course, index) => (
        <AnimatedText key={index}>
          <div className={`flex items-center gap-8 mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}>
            <div className="flex-1 text-center">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-foreground/60 mb-1">{course.date}</p>
              <p className="text-foreground/80">{course.description}</p>
            </div>
            
            <div className="relative z-10">
              <div className="w-3 h-3 rounded-full bg-foreground" />
            </div>
            
            <div className="flex-1" />
          </div>
        </AnimatedText>
      ))}
    </div>
  )
}