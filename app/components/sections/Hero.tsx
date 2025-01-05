'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            Full Stack Developer
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
            UCSC Computer Science Junior | Aspiring SDE Intern building robust Full Stack solutions.
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-3 sm:gap-4 items-center flex-row"
        >
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              text-xs sm:text-base                    // 更小的字体
              h-9 sm:h-12                             // 更小的高度
              px-3 sm:px-5                            // 更小的水平内边距
            "
            href="https://github.com/songzhiyuan98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={16}                              // 更小的图标
              height={16}
              sizes="(max-width: 640px) 16px, 20px"  // 响应式图标大小
            />
            GitHub
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              text-xs sm:text-base                    // 更小的字体
              h-9 sm:h-12                             // 更小的高度
              px-3 sm:px-5                            // 更小的水平内边距
              min-w-[90px] sm:min-w-44               // 更小的最小宽度
            "
            href="/resume.pdf"
            target="_blank"
          >
            View Resume
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/folder.svg"
            alt="Projects"
            width={16}
            height={16}
          />
          Projects
        </a>
      </AnimatedText>
    </section>
  )
} 