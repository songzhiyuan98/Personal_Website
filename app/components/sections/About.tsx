'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-8">
        <AnimatedText>
          <h1 className="text-4xl font-bold">关于我</h1>
        </AnimatedText>

        <AnimatedText>
          <p className="text-lg text-foreground/80">
            我是一名全栈开发工程师，热爱编程，对新技术充满热情。
          </p>
        </AnimatedText>

        <AnimatedText>
          <h2 className="text-2xl font-semibold mt-8 mb-4">技术栈：</h2>
        </AnimatedText>

        <AnimatedText>
          <ul className="space-y-2 text-lg text-foreground/80">
            <li>• 前端：React, Next.js, TypeScript</li>
            <li>• 后端：Node.js, Python, Java</li>
            <li>• 数据库：MongoDB, PostgreSQL</li>
            <li>• 其他：Docker, AWS, Git</li>
          </ul>
        </AnimatedText>
      </div>
    </section>
  )
} 