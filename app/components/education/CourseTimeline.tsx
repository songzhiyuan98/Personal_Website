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
    date: "2022 - Now",
    title: "University of California, Santa Cruz",
    description: "Computer Science Major | GPA: 3.84"
  },
  {
    date: "Fall 2022",
    title: "CSE 20: Beginning Python",
    description: "Data Types | Control Flow | OOP"
  },
  {
    date: "Winter 2023",
    title: "CSE 30: Prog Abs Python",
    description: "Data Structures | Algorithm Design | OOP"
  },
  {
    date: "Winter 2023",
    title: "CMPM 80K: Game Design Fundamentals",
    description: "Game Design Principles | Game Analysis | Gdevelop 5"
  },
  {
    date: "Spring 2023",
    title: "CSE 13S: Computer Systems & C Programming",
    description: "C Programming | Command Line & Shell Programming | Debugging & Source Control"
  },
  {
    date: "Fall 2023",
    title: "MATH 21: Linear Algebra",
    description: "Linear Equations | Matrices & Determinants | Vector Spaces & Linear Transformations"
  },
  {
    date: "Winter 2024",
    title: "CSE 16: Applied Discrete Mathematics",
    description: "Sets, Functions & Relations | Graph Theory | Counting Methods & Recurrence Relations"
  },
  {
    date: "Spring 2024",
    title: "CSE 101: Algorithms & Abstract Data Structures",
    description: "Abstract Data Structures | Algorithm Design & Analysis | C/C++ Programming Practice"
  },
  {
    date: "Spring 2024",
    title: "STAT 131: Intro Probability Theory",
    description: "Bayes Theorem | Central Limit Theorem | Markov Chains"
  },
  {
    date: "Fall 2024",
    title: "CSE 40: Intro to Machine Learning",
    description: "Data Cleaning | Data Analysis | Optimization Methods | Data Visualization"
  },
  {
    date: "Winter 2025",
    title: "CSE 102: Introduction to Analysis of Algorithms",
    description: "RAM Computation Model | Divide & Conquer | Branch & Bound | Dynamic Programming"
  },
  {
    date: "Winter 2025",
    title: "CSE 120: Computer Architecture",
    description: "Processor Design | Memory Hierarchy | Parallel Computing"
  },
  {
    date: "Winter 2025",
    title: "CSE 130: Computer Systems Design Principles",
    description: "Concurrency & Synchronization | Layered Design | System Performance Optimization"
  }
]

export default function CourseTimeline() {
  return (
    <div className="w-full relative">
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800" />
      
      {courses.map((course, index) => (
        <AnimatedText key={index}>
          <div className={`flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}>
            <div className="flex-1 text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm sm:text-base text-foreground/60 mb-1">{course.date}</p>
              <p className="text-sm sm:text-base text-foreground/80">{course.description}</p>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2
                }}
              />
            </div>
            
            <div className="flex-1" />
          </div>
        </AnimatedText>
      ))}
    </div>
  )
}