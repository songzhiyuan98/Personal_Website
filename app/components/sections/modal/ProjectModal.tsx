'use client'

import { useEffect } from 'react'
import { X, ExternalLink, Github, Calendar, Code } from 'lucide-react'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
  github?: string
  details: {
    overview: string
    features: string[]
    architecture: string
    techStack: {
      frontend: string[]
      backend: string[]
      ai: string[]
      devops: string[]
    }
    highlights: string[]
    targetUsers: string[]
    summary: string
  }
}

type ProjectModalProps = {
  open: boolean
  onClose: () => void
  project: Project | null
}

function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  // 阻止背景页面滚动
  useEffect(() => {
    if (open) {
      // 保存原始样式
      const originalStyle = window.getComputedStyle(document.body).overflow
      // 阻止背景滚动
      document.body.style.overflow = 'hidden'
      
      // 清理函数：恢复原始样式
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [open])

  if (!project || !open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
                  className="
            relative w-full max-w-6xl max-h-[95vh] 
            bg-white dark:bg-black/5
            backdrop-blur-md
            rounded-3xl shadow-2xl
            overflow-y-auto
            border border-gray-200/50 dark:border-white/20
          "
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 - 项目封面和基本信息 */}
        <div className="relative">
          {/* 项目封面图 */}
          <div className="h-80 w-full relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
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

            {/* 项目信息覆盖层 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-3 leading-tight">
                {project.title}
              </h2>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{project.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span className="font-medium">{project.skills.length} 技术栈</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 内容区域 - 整个区域可滚动 */}
        <div className="p-8 space-y-10">
          {/* 项目概览 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              项目概览
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
              {project.details.overview}
            </p>
          </section>

          {/* 功能特性 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              功能特性
            </h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.details.features.map((feature, index) => {
                // 检查是否是标题行（包含 emoji 且不包含 bullet point）
                const isTitle = feature.match(/^[🧩📄📑📝🔍📘📊🎯💡🚀⚡🔧📱💻🌐🎨📈🔒🎮🎵📺📚🎪🎭🎨🎬🎮🎯🎲🎸🎹🎺🎻🎼🎵🎶🎤🎧🎨🎭🎪🎫🎬🎮🎯🎲🎸🎹🎺🎻🎼🎵🎶🎤🎧🎌⭐👤🏗️🛠️💡👥⚡]/) && !feature.includes('•');
                
                if (isTitle) {
                  return (
                    <h4 key={index} className="text-lg font-bold text-gray-900 dark:text-white mb-3 mt-6 first:mt-0">
                      {feature}
                    </h4>
                  );
                } else if (feature.trim() === '') {
                  // 空行，添加间距
                  return <div key={index} className="mb-2"></div>;
                } else {
                  // 普通内容行
                  return (
                    <div key={index} className="mb-2 text-base leading-relaxed ml-4 font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </div>
                  );
                }
              })}
            </div>
          </section>

          {/* 技术架构 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              技术架构
            </h3>
            <div className="bg-gray-50 dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-white">
              <pre className="text-sm text-gray-800 dark:text-white font-mono whitespace-pre-wrap leading-relaxed font-medium">
                {project.details.architecture}
              </pre>
            </div>
          </section>

          {/* 技术栈 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              技术栈
            </h3>
            <div className="space-y-6">
              {Object.entries(project.details.techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {category === 'frontend' ? '前端技术' : 
                     category === 'backend' ? '后端技术' :
                     category === 'ai' ? 'AI/机器学习' : 'DevOps & 部署'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white text-sm rounded-md border border-gray-200 dark:border-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 项目亮点 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              项目亮点
            </h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.details.highlights.map((highlight, index) => (
                <div key={index} className="mb-3 flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                  <span className="text-base leading-relaxed font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 目标用户 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              目标用户
            </h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.details.targetUsers.map((user, index) => (
                <div key={index} className="mb-3 flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1 font-bold">•</span>
                  <span className="text-base leading-relaxed font-medium">{user}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 项目总结 */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              项目总结
            </h3>
            <div className="bg-gray-50 dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold text-base leading-relaxed">
                {project.details.summary}
              </p>
            </div>
          </section>

          {/* 技术栈标签和操作按钮 */}
          <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
              {/* 技术栈标签 */}
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white text-sm rounded-md border border-gray-200 dark:border-white font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 8 && (
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-black text-gray-700 dark:text-white text-sm rounded-md border border-gray-200 dark:border-white font-medium">
                    +{project.skills.length - 8} more
                  </span>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3 w-full lg:w-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3
                    bg-gray-900 dark:bg-black
                    text-white dark:text-white
                    rounded-lg
                    text-sm font-semibold
                    hover:bg-gray-800 dark:hover:bg-gray-900
                    transition-all duration-300
                    group/btn
                    flex-1 lg:flex-none
                  "
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  查看项目
                </a>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      px-6 py-3
                      border border-gray-300 dark:border-gray-600
                      text-gray-700 dark:text-gray-300
                      rounded-lg
                      text-sm font-semibold
                      hover:bg-gray-100 dark:hover:bg-gray-700
                      transition-all duration-300
                      group/btn
                      flex-1 lg:flex-none
                    "
                  >
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    查看代码
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal