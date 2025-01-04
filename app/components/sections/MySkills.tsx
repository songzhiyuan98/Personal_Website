'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

const technologies = {
  frontend: [
    { name: 'React', icon: '/skills/react.svg' },
    { name: 'Redux', icon: '/skills/redux.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'Material-UI', icon: '/skills/mui.svg' },
    { name: 'Ant Design', icon: '/skills/antd.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/skills/nodejs.svg' },
    { name: 'Express.js', icon: '/skills/express.svg' },
    { name: 'Socket.io', icon: '/skills/socketio.svg' },
    { name: 'JWT', icon: '/skills/jwt.svg' },
  ],
  infrastructure: [
    { name: 'MongoDB', icon: '/skills/mongodb.svg' },
    { name: 'Redis', icon: '/skills/redis.svg' },
    { name: 'Mongoose', icon: '/skills/mongoose.svg' },
    { name: 'Netlify', icon: '/skills/netlify.svg' },
    { name: 'Heroku', icon: '/skills/heroku.svg' },
    { name: 'Vercel', icon: '/skills/vercel.svg' },
  ],
  datascience: [
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
    { name: 'PyCharm', icon: '/skills/pycharm.svg' },
  ],
  languages: [
    { name: 'JavaScript', icon: '/skills/javascript.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'C', icon: '/skills/c.svg' },
    { name: 'C++', icon: '/skills/cpp.svg' },
    { name: 'HTML5', icon: '/skills/html5.svg' },
    { name: 'CSS3', icon: '/skills/css3.svg' },
    { name: 'R', icon: '/skills/r.svg' },
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
    <section id="skills" className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Technical Skills</h1>
        </AnimatedText>
        
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-center">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 sm:gap-3 group w-[80px] sm:w-[100px]"
                    >
                      <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="dark:invert sm:w-[56px] sm:h-[56px]"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground/70 group-hover:text-foreground/90 transition-colors text-center">
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