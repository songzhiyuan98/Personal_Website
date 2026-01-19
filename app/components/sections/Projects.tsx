'use client'

import AnimatedText from '../common/AnimatedText'

// 简化的项目类型定义
type Project = {
  id: number
  title: string
  description: string
  year: string
  skills: string[]
  github: string
  tag?: 'New' | 'Hot'
  featured?: boolean
}

// 项目数据
const projects: Project[] = [
  {
    id: 1,
    title: "KLineLens",
    description: "Open-source market structure analysis terminal for day traders and swing traders. Features built-in 0DTE options strategy module and pluggable custom strategy framework.",
    year: "2026",
    skills: ["Next.js", "FastAPI", "Python", "Docker", "OpenAI"],
    github: "https://github.com/songzhiyuan98/KLineLens",
    tag: "New",
    featured: true
  },
  {
    id: 2,
    title: "StudyAssistant",
    description: "AI-powered learning platform that converts PDF lectures into structured study materials. Generates notes, flashcards, and practice exams with source citations.",
    year: "2025",
    skills: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Docker"],
    github: "https://github.com/songzhiyuan98/studyai"
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description: "AI platform for resume analysis and job matching. Provides matching scores, optimization suggestions, and auto-generated cover letters.",
    year: "2025",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "OpenAI"],
    github: "https://github.com/songzhiyuan98/JobsAI"
  },
  {
    id: 4,
    title: "Portfolio Website Template",
    description: "Open-source portfolio template for developers and researchers. Supports theme customization and one-click Vercel deployment.",
    year: "2025",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/songzhiyuan98/personal-website-template"
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "The website you're viewing right now. Built with minimalist design and smooth Framer Motion animations.",
    year: "2025",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/songzhiyuan98/Personal_Website"
  },
  {
    id: 6,
    title: "AnimeHub",
    description: "Full-stack anime community with ratings, reviews, and discussions. Features real-time notifications and multilingual support.",
    year: "2024",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/songzhiyuan98/animehub"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="
      min-h-screen w-full
      flex items-center justify-center
      py-16 px-4 sm:px-8 md:px-16
    ">
      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        </AnimatedText>

        <div className="space-y-12">
          {projects.map((project) => (
            <AnimatedText key={project.id}>
              <div className="
                pb-4 sm:pb-6 border-b border-black/10 dark:border-white/10
                space-y-4
              ">
                {/* 年份和标签 */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/60">
                    {project.year}
                  </span>
                  {project.tag && (
                    <span className="
                      px-2 py-0.5
                      text-xs font-medium
                      rounded-full
                      bg-gradient-to-r from-purple-500 to-pink-500
                      text-white
                    ">
                      {project.tag}
                    </span>
                  )}
                </div>

                {/* 项目标题 */}
                <h2 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h2>

                {/* 项目描述 */}
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* GitHub 链接 */}
                <div className="pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                  >
                    [View Code]
                  </a>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}