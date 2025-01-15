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
                Hi, I'm Zhiyuan Song, a junior Computer Science major at UCSC with a strong passion for software development. My goal is to become a Software Development Engineer, where I can contribute to building impactful and scalable solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I specialize in full-stack development with hands-on experience in React, Node.js, and MongoDB. I've designed and developed multiple user-centric web applications that prioritize scalability, performance, and intuitive user experiences. My projects reflect my problem-solving skills and attention to detail in creating seamless digital solutions.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              Outside of coding, I enjoy exploring anime, playing table tennis, mixing creative cocktails, and diving into the latest advancements in web technologies.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm actively seeking internship opportunities as a Software Development Engineer to further hone my skills and gain hands-on experience in the industry. I am eager to bring my technical expertise, problem-solving mindset, and passion for learning to a dynamic team.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
} 