'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

type Experience = {
  id: number
  title: string
  company: string
  period: string
  logo: string
  skills: string[]
  description: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Labs Laboratory | Columbia University",
    period: "Dec 2024 – Present",
    logo: "/companyicon/labs.png",
    skills: ["JavaScript", "SVG", "CSS3", "Git"],
    description: "Developed an interactive anatomy visualization tool with precise localization for 15+ organs, improving research accessibility and user engagement."
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern & Technical Lead",
    company: "3CCA Church",
    period: "Dec 2024 – Present",
    logo: "/companyicon/3CCA.jpg",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    description: "Redesigned and redeveloped the 3CCA Church website, enhancing user experience and operational efficiency while optimizing website performance by 30%."
  }
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="experience"
          gradientColors={{
            start: '#7C3AED',  // 浅紫罗兰
            end: '#5B21B6'     // 深紫罗兰
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">
            Experience
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedExperience(experience.id)
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
                    h-full
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {experience.title}
                      </h2>
                      
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    {experience.period}
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
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
        experienceId={selectedExperience || 0}
      />
    </section>
  )
}
