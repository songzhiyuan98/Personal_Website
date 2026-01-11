'use client'

import { useState, useEffect } from 'react'
import { X, ExternalLink, MapPin, Calendar, Building2, Users, Target, CheckCircle, Star, Award, Code } from 'lucide-react'
import Image from 'next/image'

type Experience = {
  id: number
  title: string
  company: string
  period: string
  location?: string
  overview?: string
  details?: {
    overview: string
    responsibilities: string[]
    achievements: string[]
    skills: string[]
    keyProjects?: string[]
    impact?: string[]
  }
}

type ExperienceModalProps = {
  open: boolean
  onClose: () => void
  experience: Experience | null
}

export default function ExperienceModal({ open, onClose, experience }: ExperienceModalProps) {
  // 阻止背景页面滚动
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [open])

  if (!experience || !open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-6xl max-h-[95vh] 
          bg-white dark:bg-black/5
          backdrop-blur-lg
          rounded-3xl shadow-2xl
          overflow-y-auto
          border border-gray-200/30 dark:border-white/30
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 - 工作封面和基本信息 */}
        <div className="relative">
          {/* 工作封面图 */}
          <div className="h-80 w-full relative overflow-hidden">
            <div className={`w-full h-full ${
              experience.company.includes('3CCA') 
                ? 'bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-600'
                : experience.company.includes('Loop Interview')
                ? 'bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700'
                : 'bg-gradient-to-br from-blue-500 via-cyan-600 to-sky-700'
            }`}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4
                p-2 rounded-full
                bg-white/20 backdrop-blur-sm
                hover:bg-white/30
                transition-colors duration-200
                z-10
              "
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* 工作信息覆盖层 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-3 leading-tight">
                {experience.title}
              </h2>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                {experience.company}
              </p>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{experience.period}</span>
                </div>
                {experience.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{experience.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span className="font-medium">{experience.details?.skills?.length || 0} 技术栈</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内容区域 - 整个区域可滚动 */}
        <div className="p-8 space-y-10">
          {/* 工作概述 */}
          {experience.details?.overview && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                工作概述
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {experience.details.overview}
              </p>
            </section>
          )}

          {/* 主要职责 */}
          {experience.details?.responsibilities && experience.details.responsibilities.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                主要职责
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.details.responsibilities.map((responsibility, index) => (
                  <div key={index} className="mb-3 flex items-start">
                    <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                    <span className="text-base leading-relaxed font-medium">{responsibility}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 主要成就 */}
          {experience.details?.achievements && experience.details.achievements.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                主要成就
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.details.achievements.map((achievement, index) => (
                  <div key={index} className="mb-3 flex items-start">
                    <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                    <span className="text-base leading-relaxed font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 关键项目 */}
          {experience.details?.keyProjects && experience.details.keyProjects.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                关键项目
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.details.keyProjects.map((project, index) => (
                  <div key={index} className="mb-3 flex items-start">
                    <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                    <span className="text-base leading-relaxed font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 技术技能 */}
          {experience.details?.skills && experience.details.skills.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                技术技能
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.details.skills.slice(0, 8).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white text-sm rounded-md border border-gray-200 dark:border-white font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {experience.details.skills.length > 8 && (
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white text-sm rounded-md border border-gray-200 dark:border-white font-medium">
                    +{experience.details.skills.length - 8} more
                  </span>
                )}
              </div>
            </section>
          )}

          {/* 工作影响 */}
          {experience.details?.impact && experience.details.impact.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                工作影响
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.details.impact.map((impact, index) => (
                  <div key={index} className="mb-3 flex items-start">
                    <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                    <span className="text-base leading-relaxed font-medium">{impact}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
