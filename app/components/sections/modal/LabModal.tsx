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
      src: "/labs/organ.gif",
      alt: "Interactive Human Anatomy System",
      title: "Interactive Anatomical Navigation",
      description: "Interactive navigation system supporting 15+ organs, featuring zoom, highlight, and information display capabilities"
    },
    {
      src: "/labs/map.gif",
      alt: "Global Data Visualization",
      title: "Global User Distribution Heatmap",
      description: "Access distribution visualization based on D3.js, supporting dynamic color scales and real-time data updates"
    },
    {
      src: "/labs/downloadsystem.gif",
      alt: "Data Download System",
      title: "Data Download Management System",
      description: "Implemented data download system with access control and download logging, ensuring research data security and facilitating access behavior analysis"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle contribution click event
  const handleContributionClick = (index: number) => {
    setCurrentImageIndex(index) // Switch image
    // Smooth scroll to demo section
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Handle page scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (modalRef.current) {
        modalRef.current.scrollTop += e.deltaY
        // Prevent body scrolling
        e.preventDefault()
      }
    }

    // Add scroll event listener
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
          {/* Project Basic Information */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                MEDICINE Public Knowledge Platform
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Columbia University AI & Biomedical Lab
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Web Developer Intern
              </span>
              <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                Dec 2024 - Mar 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://labs-laboratory.com"
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
                <Image src="/companyicon/labs.png" alt="Lab" width={16} height={16} className="dark:invert" />
                Lab Homepage
              </a>
              <a
                href="https://labs-laboratory.com/medicine/"
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
                href="https://labs-laboratory.com/team"
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

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Led the development of the public knowledge portal platform for Columbia University AI & Biomedical Lab, spearheading the implementation of the frontend anatomical interaction system and global access data visualization module. The platform supports multi-organ information navigation and research data access, now submitted as part of a Nature Aging paper, with related achievements included as co author.
            </p>
          </div>

          {/* Core Contributions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              🧪 Core Contributions
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: "🫀",
                  title: "Interactive Human Anatomy System",
                  points: [
                    "Implemented interactive navigation and highlight logic for 15+ organs using SVG + native JavaScript",
                    "Supported organ click, zoom linkage, and mobile responsive layout, enhancing user interaction experience",
                    "Significantly improved research data visualization, increasing average user session duration by 37%"
                  ]
                },
                {
                  icon: "🌍",
                  title: "Global Data Visualization System",
                  points: [
                    "Built map visualization system using D3.js + TopoJSON, supporting 300+ ISO standard countries and regions",
                    "Integrated IP geolocation service for precise visitor source tracking",
                    "Implemented efficient access data statistics and analysis using MongoDB aggregation pipeline",
                    "Optimized map rendering performance for smooth interactions and animations",
                    "Designed responsive layout supporting multi-device adaptation and access"
                  ]
                },
                {
                  icon: "📦",
                  title: "Data Management and Download System",
                  points: [
                    "Designed and implemented a lightweight serverless backend architecture using Netlify Functions + MongoDB, enhancing system maintainability and scalability",
                    "Refactored 200+ pages into reusable components, achieving 98% code reuse rate and condensing 1400 lines of logic into 2 lines of calls, significantly improving development efficiency",
                    "Built IP whitelist and access control mechanisms, effectively preventing unauthorized access in line with research data security requirements",
                    "Integrated Brevo email API to establish a data request monitoring system based on PI (Principal Investigator) feedback, enabling real-time tracking and reporting of access behavior"
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

          {/* Technical Highlights */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              📊 Technical Highlights and Implementation Details
            </h4>

            <div className="rounded-2xl border border-white/10 p-6 bg-black/20 dark:bg-black/30 backdrop-blur-md">
              <div className="pl-9 space-y-4">
                {[
                  {
                    module: "🗺️ Map Visualization",
                    stack: "D3.js, TopoJSON, SVG",
                    features: "Dynamic Geographic Projection / Zoom and Pan Interaction / Heatmap Visualization"
                  },
                  {
                    module: "🧠 Anatomy Interactive Diagram",
                    stack: "JavaScript, SVG",
                    features: "Organ Localization / Highlight Synchronization"
                  },
                  {
                    module: "🧩 Data Access Control",
                    stack: "Netlify Functions, MongoDB",
                    features: "Download Access Statistics / Data Security"
                  }
                ].map((tech, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="font-medium">{tech.module}</div>
                    <div>{tech.stack}</div>
                    <div>{tech.features}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Impact */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              📈 Project Impact and Achievements
            </h4>

            <div className="rounded-2xl border border-white/10 p-6 bg-black/20 dark:bg-black/30 backdrop-blur-md">
              <div className="pl-9 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { icon: "🌐", label: "User Countries Covered", value: "300+" },
                  { icon: "📥", label: "Code Reuse Rate", value: "98%" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-xl">{stat.icon}</span>
                    <div>
                      <div className="text-sm">{stat.label}</div>
                      <div className="text-lg font-medium text-gray-900 dark:text-gray-100">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Demo */}
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

                {/* Carousel Control Buttons */}
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

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4 text-white">
                <h4 className="text-lg font-medium mb-1">
                  {images[currentImageIndex].title}
                </h4>
                <p className="text-sm text-gray-200">
                  {images[currentImageIndex].description}
                </p>
              </div>

              {/* Carousel Indicators */}
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

          {/* Working Paper */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Working Paper
            </h3>
            <div>
              <div className="flex items-start gap-4">
                <div className="
                  flex-shrink-0
                  w-12 h-12
                  bg-gradient-to-br from-purple-500/20 to-blue-500/20
                  rounded-lg
                  flex items-center justify-center
                ">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    Nature Aging (In Preparation, 2025)
                  </div>
                  <div className="mt-1 text-gray-600 dark:text-gray-400">
                    "Multi-organ MRI Charts Biological Aging of Seven Organs and Tissues"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 