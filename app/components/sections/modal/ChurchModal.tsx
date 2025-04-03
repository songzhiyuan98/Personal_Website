'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface LabModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LabModal({ open, onClose }: LabModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)
  
  const images = [
    {
      src: "/church/admin.png",
      alt: "Content Management System",
      title: "Backend Management System",
      description: "Full-featured CMS supporting CRUD operations for church activities, articles, and media content"
    },
    {
      src: "/church/login.gif",
      alt: "Admin Authentication",
      title: "Admin Login & Authorization",
      description: "Secure authentication system with JWT and role-based access control"
    },
    {
      src: "/church/home.png",
      alt: "Event Countdown",
      title: "Activity Countdown Timer",
      description: "Real-time countdown system for upcoming church events with automatic status updates"
    },
    {
      src: "/church/intro.png",
      alt: "Church Introduction",
      title: "Church Information Module",
      description: "Comprehensive church introduction including core beliefs, team structure, and meeting details"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // 处理贡献点击事件
  const handleContributionClick = (index: number) => {
    setCurrentImageIndex(index) // 切换图片
    // 平滑滚动到演示部分
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // 处理页面滚动
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (modalRef.current) {
        modalRef.current.scrollTop += e.deltaY
        // 阻止body滚动
        e.preventDefault()
      }
    }

    // 添加滚动事件监听
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8 bg-black/40 dark:bg-black/60 backdrop-blur-md z-50">
      <motion.div 
        ref={modalRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-gradient-to-br from-white/80 to-white/70 
          dark:from-black/90 dark:to-black/85
          backdrop-blur-xl
          rounded-2xl
          border border-white/20 dark:border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          transition-all duration-300
          p-6 sm:p-8
          scrollbar-thin 
          scrollbar-track-transparent 
          scrollbar-thumb-gray-300/50 
          dark:scrollbar-thumb-gray-700/50
          scroll-smooth
        "
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="space-y-10">
          {/* 项目基本信息 */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Full-Stack Developer Intern & Technical Lead 
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                3CCA Church
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                Jan 2025 - Present
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://3ccaorg.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-white/50 dark:bg-white/5
                  hover:bg-white/80 dark:hover:bg-white/10
                  rounded-lg
                  border border-gray-200 dark:border-gray-700
                  text-sm font-medium
                  transition-colors
                "
              >
                <Image src="/companyicon/3CCA.jpg" alt="Lab" width={16} height={16} className="dark:invert" />
                Company Website
              </a>
              <a
                href="https://3-hh7ncyhay-songzhiyuan98s-projects.vercel.app/#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-white/50 dark:bg-white/5
                  hover:bg-white/80 dark:hover:bg-white/10
                  rounded-lg
                  border border-gray-200 dark:border-gray-700
                  text-sm font-medium
                  transition-colors
                "
              >
                <Image src="/labs/demo.svg" alt="Demo" width={16} height={16} className="dark:invert" />
                Project Demo
              </a>
              <a
                href="https://lab.columbia.edu/team"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-white/50 dark:bg-white/5
                  hover:bg-white/80 dark:hover:bg-white/10
                  rounded-lg
                  border border-gray-200 dark:border-gray-700
                  text-sm font-medium
                  transition-colors
                "
              >
                <Image src="/labs/team.svg" alt="Team" width={16} height={16} className="dark:invert" />
                Team Members
              </a>
            </div>
          </div>

          {/* 项目简介 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Led the overall architecture design and feature development of the 3CCA Church website, spearheading the implementation of the backend management system and content modules to enhance operational efficiency for non-technical staff. The project was developed using the MERN full-stack architecture, offering scalability and high maintainability. It has been successfully deployed and serves as the core platform for the church's digital transformation.
            </p>
          </div>

          {/* Core Contributions Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
             🧪 Core Contributions
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: "🛠️",
                  title: "Backend Management System",
                  points: [
                    "Designed and implemented a content management system based on React + Node.js + MongoDB, supporting CRUD operations for church activities, articles, and audio modules",
                    "Built responsive form components and table management UI on the frontend, enabling non-technical staff to easily maintain website content",
                    "Developed a user-friendly interface for content management, streamlining the workflow for church administrators"
                  ]
                },
                {
                  icon: "🔐",
                  title: "Admin Login & Authorization",
                  points: [
                    "Implemented the admin login module with JWT authentication and login state management",
                    "Added login state persistence mechanism to ensure security and user experience of the admin interface",
                    "Designed unified authentication logic, extensible to a multi-role management system"
                  ]
                },
                {
                  icon: "⏰",
                  title: "Event Countdown & Time Display",
                  points: [
                    "Integrated a real-time event countdown module on the homepage, supporting backend configuration of next church event time",
                    "Implemented precise time difference calculation and automatic status switching to notify users of upcoming events",
                    "Enhanced church members' engagement and time management awareness"
                  ]
                },
                {
                    icon: "📖",
                    title: "Church Introduction & Information Display",
                    points: [
                      "Built the church introduction section, including core beliefs and participation methods",
                      "Developed comprehensive church information display, covering core beliefs, team structure, meeting times and locations"
                    ]
                  }
              ].map((contribution, index) => (
                <div
                  key={index}
                  className="group bg-black/20 dark:bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:bg-black/30 dark:hover:bg-black/40 hover:scale-[1.02] hover:shadow-lg hover:border-white/20 active:scale-[0.98]"
                  onClick={() => handleContributionClick(index)}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contribution.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                          {contribution.title}
                        </h4>
                      </div>
                      <div className="space-y-2 pl-4 border-l-2 border-blue-500/20">
                        {contribution.points.map((point, i) => (
                          <div key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       

          {/* 项目演示部分 */}
          <div className="space-y-6" ref={demoRef}>
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              🎥 Project Demo
            </h4>

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        unoptimized={images[currentImageIndex].src.endsWith('.gif')}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 轮播控制按钮 */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 text-white transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 text-white transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* 图片说明 */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4 text-white">
                <h4 className="text-lg font-medium mb-1">
                  {images[currentImageIndex].title}
                </h4>
                <p className="text-sm text-gray-200">
                  {images[currentImageIndex].description}
                </p>
              </div>

              {/* 轮播指示器 */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 p-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

    

        </div>
      </motion.div>
    </div>
  );
} 