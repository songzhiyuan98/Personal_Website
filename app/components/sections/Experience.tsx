'use client'

import { useState, useEffect } from 'react'
import AnimatedText from '../common/AnimatedText'
import { motion } from 'framer-motion'
import ChurchModal from './modal/ChurchModal'
import LabModal from './modal/LabModal'

type Experience = {
  id: number
  title: string
  company: string
  period: string
  overview?: string
}

const experiences: Experience[] = [
  {
    id: 4,
    title: "Web Developer Intern",
    company: "AI & Biomedical Science Lab | Columbia University",
    period: "Dec 2024 – Present",
    overview: "As a Web Developer Intern at Columbia University's AI & Biomedical Science Lab, I led the development of a public knowledge portal focused on medical data visualization. I built an interactive anatomical SVG system and a global data access map using D3.js and TopoJSON. I also designed a lightweight backend with Netlify Functions and MongoDB, enabling secure dataset delivery and statistical tracking. My contributions were included in a Nature Aging research submission."
  },
  {
    id: 5,
    title: "Full-Stack Developer Intern & Technical Lead",
    company: "3CCA Church",
    period: "Dec 2024 – Present",
    overview: "As a Full-Stack Developer Intern and Technical Lead at 3CCA Church, I led the team in refactoring and developing the church's official website. Built a modern frontend and backend architecture using React and Node.js, implemented data management with MongoDB, and deployed the application using AWS cloud services, significantly improving website performance and user experience."
  }
];

export default function Experience() {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [labModalOpen, setLabModalOpen] = useState(false)
  const [churchModalOpen, setChurchModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // 获取当前的工作经历
  const currentExperience = experiences[currentIndex];
  
  // 模拟光标闪烁效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  // 切换到下一个工作经历
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // 切换到上一个工作经历
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // 修改 handleRun 函数
  const handleRun = async () => {
    setIsLoading(true);
    
    // 模拟加载动画
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (currentExperience.id === 4) {
      setLabModalOpen(true);
    } else if (currentExperience.id === 5) {
      setChurchModalOpen(true);
    }
    
    setIsLoading(false);
  };

  return (
    <section id="experience" className="
      min-h-[90vh]
      px-4 sm:px-6 
      flex flex-col items-center justify-start
      pt-4
    ">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Experience
        </h2>
        
        {/* 代码编辑器导航 */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={handlePrev}
            className="
              px-3 py-1.5
              rounded
              bg-gray-200 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
              hover:bg-gray-300 dark:hover:bg-gray-700
              transition-colors
              flex items-center gap-1
              text-sm
            "
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} / {experiences.length}
          </div>
          
          <button 
            onClick={handleNext}
            className="
              px-3 py-1.5
              rounded
              bg-gray-200 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
              hover:bg-gray-300 dark:hover:bg-gray-700
              transition-colors
              flex items-center gap-1
              text-sm
            "
          >
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* 代码编辑器容器 */}
        <motion.div 
          className="
            bg-gray-100 dark:bg-gray-900 
            rounded-lg overflow-hidden
            border border-gray-200 dark:border-gray-700
            shadow-lg
          "
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* 编辑器标题栏 */}
          <div className="
            bg-gray-200 dark:bg-gray-800
            px-4 py-2
            flex items-center justify-between
            border-b border-gray-300 dark:border-gray-700
          ">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="
              font-mono text-sm text-gray-600 dark:text-gray-400
              px-3 py-1
              rounded
              bg-gray-300 dark:bg-gray-700
            ">
              experience_{currentIndex + 1}.ts
            </div>
            <button 
              onClick={handleRun}
              className="
                text-xs
                px-3 py-1
                bg-green-500 hover:bg-green-600
                text-white
                rounded
                transition-colors
                font-semibold
              "
            >
              Run
            </button>
          </div>
          
          {/* 代码区域 */}
          <div className="
            font-mono text-sm
            p-0
            overflow-auto
            flex
            max-h-[500px]
          ">
            {/* 行号 */}
            <div className="
              p-4 pr-3
              text-right
              bg-gray-200 dark:bg-gray-800
              text-gray-500 dark:text-gray-500
              select-none
              border-r border-gray-300 dark:border-gray-700
              min-w-[3rem]
            ">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>
            
            {/* 代码内容 */}
            <div className="
              p-4 pl-5
              text-gray-800 dark:text-gray-300
              flex-grow
              leading-relaxed
            ">
              <div className="leading-6">
                <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">workExperience</span> <span className="text-gray-600 dark:text-gray-400">=</span> <span className="text-purple-600 dark:text-purple-400">{`{`}</span>
              </div>
              
              <AnimatedText className="mt-2">
                <div className="pl-6">
                  <div className="leading-6">
                    <span className="text-green-600 dark:text-green-400">{`// ${currentExperience.title} @ ${currentExperience.company}`}</span>
                  </div>
                  <div className="leading-6 mt-1">
                    <span className="text-pink-600 dark:text-pink-400">position</span>
                    <span className="text-gray-600 dark:text-gray-400">:</span> <span className="text-amber-600 dark:text-amber-400">{`"${currentExperience.title}"`}</span><span className="text-gray-600 dark:text-gray-400">,</span>
                  </div>
                  <div className="leading-6">
                    <span className="text-pink-600 dark:text-pink-400">company</span>
                    <span className="text-gray-600 dark:text-gray-400">:</span> <span className="text-amber-600 dark:text-amber-400">{`"${currentExperience.company}"`}</span><span className="text-gray-600 dark:text-gray-400">,</span>
                  </div>
                  <div className="leading-6">
                    <span className="text-pink-600 dark:text-pink-400">period</span>
                    <span className="text-gray-600 dark:text-gray-400">:</span> <span className="text-amber-600 dark:text-amber-400">{`"${currentExperience.period}"`}</span><span className="text-gray-600 dark:text-gray-400">,</span>
                  </div>
                  <div className="leading-6">
                    <span className="text-pink-600 dark:text-pink-400">responsibilities</span>
                    <span className="text-gray-600 dark:text-gray-400">:</span> <span className="text-purple-600 dark:text-purple-400">{`[`}</span>
                  </div>
                  {currentExperience.overview?.split(". ").filter(s => s.trim()).map((sentence, i) => (
                    <div key={i} className="leading-6 pl-6">
                      <span className="text-amber-600 dark:text-amber-400">{`"${sentence}"`}</span>
                      {i < currentExperience.overview!.split(".").filter(s => s.trim()).length - 1 && <span className="text-gray-600 dark:text-gray-400">,</span>}
                    </div>
                  ))}
                  <div className="leading-6">
                    <span className="text-purple-600 dark:text-purple-400">{`]`}</span><span className="text-gray-600 dark:text-gray-400">,</span>
                  </div>
                </div>
              </AnimatedText>
              
              <div className="leading-6 mt-4">
                <span className="text-purple-600 dark:text-purple-400">{`}`}</span><span className="text-gray-600 dark:text-gray-400">;</span>
              </div>
              
              {/* 添加模拟光标 */}
              <div className="mt-6 leading-6">
                <span className="text-green-600 dark:text-green-400">// Click Run button to view more details</span>
                <span className={`inline-block w-2 h-5 ml-1 bg-blue-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
              </div>
            </div>
          </div>
          
          {/* 控制台输出区 */}
          <div className="
            border-t border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-gray-950
            text-sm font-mono
            p-3
            text-gray-600 dark:text-gray-400
            flex items-center
          ">
            <span className="text-green-600 dark:text-green-400 mr-2">&gt;</span>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span className="animate-pulse">Loading experience details</span>
                <span className="inline-block animate-spin">⚡</span>
              </div>
            ) : (
              <span>Ready to show details for "{currentExperience.title}"...</span>
            )}
          </div>
        </motion.div>
      </div>
    
      <ChurchModal
        open={churchModalOpen}
        onClose={() => setChurchModalOpen(false)}
      />
      <LabModal
        open={labModalOpen}
        onClose={() => setLabModalOpen(false)}
      />
    </section>
  )
}