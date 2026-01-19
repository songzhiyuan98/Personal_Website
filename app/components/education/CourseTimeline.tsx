'use client'

import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"

interface CourseItem {
  date: string
  title: string
  description: string
}

const courses: CourseItem[] = [
  {
    date: "2022 - 2026",
    title: "University of California, Santa Cruz",
    description: "B.S. in Computer Science"
  },
  {
    date: "Fall 2022",
    title: "CSE 20: Beginning Python",
    description: "Variables & Data Types | Control Flow | Functions & OOP"
  },
  {
    date: "Fall 2022",
    title: "MATH 19A: Calculus for Science",
    description: "Limits & Derivatives | Applications of Differentiation"
  },
  {
    date: "Winter 2023",
    title: "CSE 30: Programming Abstractions in Python",
    description: "Data Structures | Recursion | Algorithm Design"
  },
  {
    date: "Winter 2023",
    title: "MATH 19B: Calculus for Science",
    description: "Integration | Sequences & Series | Taylor Series"
  },
  {
    date: "Spring 2023",
    title: "CSE 12: Computer Systems & Assembly Language",
    description: "RISC-V Assembly | Memory Organization | I/O Systems"
  },
  {
    date: "Spring 2023",
    title: "MATH 23A: Vector Calculus",
    description: "Vectors & Matrices | Partial Derivatives | Multiple Integrals"
  },
  {
    date: "Fall 2023",
    title: "CSE 13S: Computer Systems & C Programming",
    description: "C Programming | Unix Tools | Memory Management | Debugging"
  },
  {
    date: "Fall 2023",
    title: "CMPM 80K: Foundations of Game Design",
    description: "Game Mechanics | Player Experience | Prototyping"
  },
  {
    date: "Winter 2024",
    title: "CSE 16: Applied Discrete Mathematics",
    description: "Logic & Proofs | Graph Theory | Combinatorics"
  },
  {
    date: "Winter 2024",
    title: "MATH 21: Linear Algebra",
    description: "Matrices | Vector Spaces | Eigenvalues & Eigenvectors"
  },
  {
    date: "Spring 2024",
    title: "CSE 101: Data Structures & Algorithms",
    description: "Trees & Graphs | Sorting | Hashing | Algorithm Analysis"
  },
  {
    date: "Spring 2024",
    title: "STAT 131: Introduction to Probability Theory",
    description: "Random Variables | Distributions | Central Limit Theorem"
  },
  {
    date: "Fall 2024",
    title: "CSE 40: Machine Learning Basics",
    description: "Supervised Learning | Classification | Regression | Model Evaluation"
  },
  {
    date: "Winter 2025",
    title: "CSE 102: Introduction to Analysis of Algorithms",
    description: "Divide & Conquer | Dynamic Programming | NP-Completeness"
  },
  {
    date: "Winter 2025",
    title: "CSE 120: Computer Architecture",
    description: "Pipelining | Cache Design | Memory Hierarchy | Parallelism"
  },
  {
    date: "Winter 2025",
    title: "CSE 130: Principles of Computer System Design",
    description: "Concurrency | Naming | Virtualization | Distributed Systems"
  },
  {
    date: "Spring 2025",
    title: "CSE 115A: Introduction to Software Engineering",
    description: "Agile Development | Testing | Version Control | Team Collaboration"
  },
  {
    date: "Spring 2025",
    title: "CSE 150: Introduction to Computer Networks",
    description: "TCP/IP | Routing | Network Security | Application Protocols"
  },
  {
    date: "Summer 2025",
    title: "CMPM 146: Game AI",
    description: "Pathfinding | Behavior Trees | Monte Carlo Tree Search"
  },
  {
    date: "Fall 2025",
    title: "CSE 140: Artificial Intelligence",
    description: "Search Algorithms | Constraint Satisfaction | Probabilistic Reasoning"
  },
  {
    date: "Fall 2025",
    title: "CSE 142: Machine Learning",
    description: "Neural Networks | Deep Learning | Optimization | Regularization"
  },
  {
    date: "Fall 2025",
    title: "CSE 180: Database Systems I",
    description: "SQL | Relational Model | Query Optimization | Transactions"
  }
]

export default function CourseTimeline() {
  return (
    <div className="w-full">
      {/* Timeline container */}
      <div className="relative">
        {/* Timeline background line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />
        
        {/* Timeline items */}
        {courses.map((course, index) => (
          <AnimatedText key={index}>
            <div className={`
              flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              relative z-10
            `}>
              <div className="flex-1 text-center">
                <h3 className="
                  text-base                              /* 移动端16px */
                  sm:text-lg md:text-xl                 /* sm:18px，md:20px */
                  font-bold 
                  mb-2
                ">
                  {course.title}
                </h3>
                <p className="
                  text-xs                               /* 移动端12px */
                  sm:text-sm md:text-base              /* sm:14px，md:16px */
                  text-foreground/60 
                  mb-1
                ">
                  {course.date}
                </p>
                <p className="
                  text-xs                               /* 移动端12px */
                  sm:text-sm md:text-base              /* sm:14px，md:16px */
                  text-foreground/80
                ">
                  {course.description}
                </p>
              </div>
              
              <div className="relative z-20">
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
    </div>
  )
}