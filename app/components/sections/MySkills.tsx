'use client'

import React from 'react'
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

const technologies = {
  frontend: [
    { name: 'React', icon: '/skills/react.svg' },
    { name: 'Next.js', icon: '/skills/nextjs.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'Redux', icon: '/skills/redux.svg' },
    { name: 'Tailwind CSS', icon: '/skills/tailwindcss.svg' },
    { name: 'Framer Motion', icon: '/skills/framer-motion.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/skills/nodejs.svg' },
    { name: 'Express.js', icon: '/skills/express.svg' },
    { name: 'FastAPI', icon: '/skills/fastapi.svg' },
    { name: 'Prisma', icon: '/skills/prisma.svg' },
    { name: 'Stripe', icon: '/skills/stripe.svg' },
  ],
  infrastructure: [
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
    { name: 'MongoDB', icon: '/skills/mongodb.svg' },
    { name: 'Redis', icon: '/skills/redis.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'Vercel', icon: '/skills/vercel.svg' },
    { name: 'AWS', icon: '/skills/aws.svg' },
  ],
  datascience: [
    { name: 'PyTorch', icon: '/skills/pytorch.svg' },
    { name: 'NumPy', icon: '/skills/numpy.svg' },
    { name: 'Pandas', icon: '/skills/pandas.svg' },
    { name: 'Scikit-learn', icon: '/skills/scikit-learn.svg' },
    { name: 'Matplotlib', icon: '/skills/matplotlib.svg' },
    { name: 'Jupyter', icon: '/skills/jupyter.svg' },
  ],
  tools: [
    { name: 'Git', icon: '/skills/git.svg' },
    { name: 'GitHub', icon: '/skills/github.svg' },
    { name: 'Linux', icon: '/skills/linux.svg' },
    { name: 'VS Code', icon: '/skills/vscode.svg' },
  ],
  languages: [
    { name: 'JavaScript', icon: '/skills/javascript.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'C', icon: '/skills/c.svg' },
    { name: 'C++', icon: '/skills/cpp.svg' },
  ]
}

const categories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development', 
  infrastructure: 'Database & Deployment',
  datascience: 'Data Science & Machine Learning',
  tools: 'System Programming & Tools',
  languages: 'Programming Languages'
}

export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      p-4 sm:p-8 /* 移动端padding为4, sm(640px)以上为8 */
    ">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Technical Skills
          </h1>
        </AnimatedText>
        
        <div className="
          max-w-5xl mx-auto 
          space-y-8 sm:space-y-12 /* 移动端垂直间距8, sm(640px)以上为12 */
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6 /* 移动端垂直间距4, sm(640px)以上为6 */
            ">
              <h2 className="
                text-xl sm:text-2xl /* 移动端字体大小xl(20px), sm(640px)以上为2xl(24px) */  
                font-semibold text-center
              ">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-4 sm:gap-8 md:gap-12 /* 移动端间距4, sm(640px)以上为8, md(768px)以上为12 */
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2 sm:gap-3 /* 移动端间距2, sm(640px)以上为3 */
                        w-[80px] sm:w-[100px] /* 移动端宽度80px, sm(640px)以上为100px */
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-16 sm:w-20 /* 移动端宽度4rem(64px), sm(640px)以上为5rem(80px) */           
                        h-16 sm:h-20 /* 移动端高度4rem(64px), sm(640px)以上为5rem(80px) */           
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="
                            dark:invert          
                            sm:w-[56px] sm:h-[56px] /* sm(640px)以上图标尺寸为56px */
                          "
                        />
                      </div>
                      <span className="
                        text-xs sm:text-sm /* 移动端字体大小xs(12px), sm(640px)以上为sm(14px) */     
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 