'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ExperienceModal from './Motal'
import AnimatedText from '../common/AnimatedText'
import GradientBackground from '../common/GradientBackground'
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
  github?: string
}

// 示例项目数据
const projects: Project[] = [
  {
    id: 1,
    title: "AnimeHub",
    description: "A full-stack anime forum website featuring ratings, rankings, and user discussions with multi-language support.",
    period: "2024.06 - 2024.11",
    image: "/animehub/home.png",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/songzhiyuan98/animehub",
    github: "https://github.com/songzhiyuan98/animehub"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website focusing on minimalist UI design, featuring reusable components and responsive layouts.",
    period: "2024.10 - 2025.01",
    image: "/personalwebsite/1.png",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://www.zhiyuansong.dev",
    github: "https://github.com/songzhiyuan98/portfolio"
  },
  {
    id: 3,
    title: "Portfolio Website Template System",
    description: "Developed a flexible portfolio website template system with different versions for job seekers and researchers, featuring onboarding guides, content management, and theme customization.",
    period: "2025.01 - 2025.02", 
    image: "/pw-temp/home.png",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://portfolio-template.vercel.app",
    github: "https://github.com/songzhiyuan98/portfolio-template"
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // 更新卡片位置
  const updateCarouselPosition = (index: number, animate = true) => {
    if (!carouselRef.current) return
    
    requestAnimationFrame(() => {
      projects.forEach((_, i) => {
        const card = cardRefs.current[i]
        if (!card) return
        
        const diff = (i - index + projects.length) % projects.length
        const adjustedDiff = diff > projects.length / 2 ? diff - projects.length : diff
        
        const transform = {
          x: adjustedDiff * 80,
          y: -Math.abs(adjustedDiff * 10),
          z: -Math.abs(adjustedDiff * 100),
          rotateY: adjustedDiff * 15,
          scale: 1 - Math.abs(adjustedDiff) * 0.1,
          opacity: 1 - Math.abs(adjustedDiff) * 0.2,
        }
        
        Object.assign(card.style, {
          transform: `translate3d(${transform.x}px, ${transform.y}px, ${transform.z}px) 
                     rotateY(${transform.rotateY}deg) 
                     scale(${transform.scale})`,
          opacity: transform.opacity,
          transition: animate ? 'all 0.3s ease-out' : 'none',
          zIndex: projects.length - Math.abs(adjustedDiff)
        })
      })
    })
  }

  // 监听活动索引变化
  useEffect(() => {
    updateCarouselPosition(activeIndex)
  }, [activeIndex])

  // 处理导航
  const handleNavigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    const newIndex = direction === 'prev'
      ? (activeIndex - 1 + projects.length) % projects.length
      : (activeIndex + 1) % projects.length
    
    setActiveIndex(newIndex)
    
    setTimeout(() => setIsAnimating(false), 300)
  }

  // 处理卡片点击
  const handleCardClick = (index: number) => {
    if (isAnimating || index !== activeIndex) return
    setModalOpen(true)
  }

  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden">
      {/* 添加标题区域 */}
      <div className="container mx-auto px-4 mb-8 mt-4">

          <h2 className="
            text-4xl md:text-4xl 
            font-bold 
            text-center
            bg-clip-text text-transparent
            bg-gradient-to-r from-gray-900 to-gray-600 
          dark:from-gray-100 dark:to-gray-400
        ">
          Projects
        </h2>

      </div>

      <div className="container mx-auto px-4 h-full">
        <div 
          ref={carouselRef}
          className="relative w-full h-[70vh] perspective-1000"
        >
          {/* 卡片部分保持不变，但优化hover效果 */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => { cardRefs.current[index] = el }}
              className={`
                absolute w-full h-full
                bg-gradient-to-br from-white/90 to-white/60 dark:from-gray-800/90 dark:to-gray-800/60
                backdrop-blur-[2px]
                border border-white/30 dark:border-gray-700/40
                rounded-2xl 
                shadow-lg 
                overflow-hidden
                cursor-pointer
                transform-gpu
                transition-shadow duration-300
                hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5
                ${index === activeIndex ? 'hover:scale-[1.02] transition-transform duration-300' : ''}
              `}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === activeIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* 优化导航按钮设计 */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-14 h-14 md:w-16 md:h-16
                rounded-full 
                bg-white/80 dark:bg-gray-800/80
                backdrop-blur-sm
                border border-white/20 dark:border-gray-700/20
                flex items-center justify-center 
                shadow-lg
                hover:bg-white dark:hover:bg-gray-800 
                transition-all duration-300
                pointer-events-auto
                group
              "
              onClick={() => handleNavigate('prev')}
              disabled={isAnimating}
            >
              <ChevronLeft className="
                w-6 h-6 md:w-7 md:h-7
                text-gray-700 dark:text-gray-300
                transition-transform duration-300
                group-hover:-translate-x-0.5
              " />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-14 h-14 md:w-16 md:h-16
                rounded-full 
                bg-white/80 dark:bg-gray-800/80
                backdrop-blur-sm
                border border-white/20 dark:border-gray-700/20
                flex items-center justify-center 
                shadow-lg
                hover:bg-white dark:hover:bg-gray-800 
                transition-all duration-300
                pointer-events-auto
                group
              "
              onClick={() => handleNavigate('next')}
              disabled={isAnimating}
            >
              <ChevronRight className="
                w-6 h-6 md:w-7 md:h-7
                text-gray-700 dark:text-gray-300
                transition-transform duration-300
                group-hover:translate-x-0.5
              " />
            </motion.button>
          </div>
        </div>

        {/* 优化进度指示器 */}
        <div className="
          absolute bottom-16 left-1/2 -translate-x-1/2 
          flex gap-2.5
          px-4 py-2
          rounded-full
          bg-white/10 dark:bg-gray-800/10
          backdrop-blur-sm
          border border-white/10 dark:border-gray-700/10
        ">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${i === activeIndex 
                  ? 'w-6 bg-blue-500 dark:bg-blue-400' 
                  : 'w-1.5 bg-gray-300 dark:bg-gray-600'
                }
              `}
              initial={false}
              animate={i === activeIndex ? { scale: 1.2 } : { scale: 1 }}
            />
          ))}
        </div>
      </div>

      {/* 添加Modal组件 */}
      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={projects[activeIndex].id}
      />
    </section>
  )
}