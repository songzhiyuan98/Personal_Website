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
                Hi, I'm Zhiyuan Song, a Computer Science student at UC Santa Cruz and a full-stack engineer passionate about building high-impact, production-ready software. I enjoy turning ambitious ideas into scalable systems—from clean UI/UX and real-time interactions to robust backend services and cloud deployment.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I previously worked as a Web Developer / Research Intern at Columbia University, contributing to biomedical research software and data-driven systems supporting active scientific projects. I'm also credited as a co-author on Nature-family research submissions, reflecting my ability to deliver high-quality engineering work in research-grade environments.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Technically, I specialize in Next.js/React, TypeScript, Node.js, MongoDB/Firebase, Docker, and modern full-stack architecture. I'm also deeply interested in LLM-powered systems (RAG, prompt engineering, AI integration) and productizing AI into reliable end-to-end workflows.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Research Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My research interests focus on applying AI models to Biomedical Engineering (BME), particularly in medical imaging and biological aging modeling. I'm excited by research directions such as multi-organ MRI-based representation learning, AI-driven aging clocks, multimodal biomarker modeling, and building systems that translate biomedical AI advances into real-world impact.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm actively seeking full-time Software Engineering opportunities (open to internships as well), where I can contribute to building scalable products, collaborate with strong teams, and push forward both engineering excellence and AI-driven innovation.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
} 