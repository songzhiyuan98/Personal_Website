'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="个人头像"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold">Zhiyuan Song</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Full Stack Developer
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
            这里是你的个人简介。描述你的专业背景、兴趣爱好和目标。保持简洁明了，突出重点。
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-col sm:flex-row"
        >
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/songzhiyuan98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/resume.pdf"
            target="_blank"
          >
            查看简历
          </a>
        </AnimatedText>
      </main>

      <AnimatedText 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:your@email.com"
        >
          <Image
            aria-hidden
            src="/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          联系我
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/blog"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Blog"
            width={16}
            height={16}
          />
          领英
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            aria-hidden
            src="/folder.svg"
            alt="Projects"
            width={16}
            height={16}
          />
          项目展示
        </a>
      </AnimatedText>
    </section>
  )
} 