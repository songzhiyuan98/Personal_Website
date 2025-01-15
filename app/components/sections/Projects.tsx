'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 3,
    title: "AnimeHub",
    description: "A full-stack anime forum website featuring ratings, rankings, and user discussions with multi-language support.",
    period: "2024.06 - 2024.11",
    image: "/animehub/home.png",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/songzhiyuan98/animehub"
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website focusing on minimalist UI design, featuring reusable components and responsive layouts.",
    period: "2024.10 - 2025.01",
    image: "/personalwebsite/1.png",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/songzhiyuan98/portfolio"
  },
  {
    id: 5,
    title: "Portfolio Website Template System",
    description: "Developed a flexible portfolio website template system with different versions for job seekers and researchers, featuring onboarding guides, content management, and theme customization.",
    period: "2025.01 - 2025.02", 
    image: "/pw-temp/home.png",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://portfolio-template.vercel.app"
  }
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // 浅玫红
            end: '#BE123C'     // 深玫红
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/[0.1] dark:bg-black/[0.2]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                    {project.period}
                  </p>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/[0.05] dark:bg-white/[0.05]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject || 0}
      />
    </section>
  )
} 