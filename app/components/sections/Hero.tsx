'use client'

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"

export default function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 100], [1, 0.3])
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8])

  return (
    <section id="home" className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />

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
            Full-Stack Developer & AI/ML Engineer
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
          Computer Science student at UCSC | Full-Stack Developer and AI/ML Engineer researching biomedical AI at Columbia University, with publications in Nature Medicine.
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-row flex-wrap"
        >
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // 固定高度
              px-5                                   // 固定内边距
              text-base                              // 固定字体大小
            "
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert mr-2"
              src="/resume.svg"
              alt="Resume"
              width={20}
              height={20}
              sizes="20px"
            />
            Resume
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // 固定高度
              px-5                                   // 固定内边距
              text-base                              // 固定字体大小
            "
            href="https://github.com/songzhiyuan98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              sizes="20px"
            />
            GitHub
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                   // 固定高度
              px-5                                   // 固定内边距
              text-base                              // 固定字体大小
            "
            href="https://scholar.google.com/citations?user=wh3s5WkAAAAJ&hl=zh-CN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert mr-2"
              src="/googlescholar.svg"
              alt="Google Scholar"
              width={20}
              height={20}
              sizes="20px"
            />
            Google Scholar
          </a>
        </AnimatedText>
      </main>

      <AnimatedText 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:songzhiyuan98@gmail.com"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          Email Me
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/zhiyuan-song-761651217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </AnimatedText>
    </section>
  )
} 