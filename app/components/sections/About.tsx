'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi, I'm Zhiyuan Song, currently a junior studying Computer Science at UCSC, aspiring to become a Software Development Engineer.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I specialize in full-stack development, proficient in technologies like React, Node.js, and MongoDB. I've developed multiple scalable and user-friendly web applications. I'm passionate about solving complex problems and creating intuitive digital experiences.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Beyond programming, I enjoy exploring the world of anime, playing table tennis, experimenting with cocktail mixing, and studying new web technologies.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm actively seeking Software Development Engineer internship opportunities, hoping to put my skills into practice and gain real-world experience in the industry. I believe my technical abilities and enthusiasm for learning can bring value to the team.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
} 