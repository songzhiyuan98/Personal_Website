'use client'

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const navItems = [
  { name: "主页", href: "#home" },
  { name: "关于我", href: "#about" },
  { name: "教育经历", href: "#education" },
  { name: "项目展示", href: "#projects" },
  { name: "联系方式", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const scrollContainerRef = useRef<HTMLElement | null>(null)

  // 初始化时获取滚动容器引用
  useEffect(() => {
    scrollContainerRef.current = document.querySelector('.smooth-scroll-container')
  }, [])
  
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: container, // 使用 SmoothScroll 容器作为根元素
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
      }
    )

    const sections = container.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const targetElement = container.querySelector(href)
    
    if (targetElement) {
      const containerRect = container.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()
      
      // 计算相对于容器的滚动位置
      const scrollTop = container.scrollTop
      const targetOffset = targetRect.top - containerRect.top + scrollTop
      
      container.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 backdrop-blur-[2px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative px-2 py-1 text-sm transition-colors hover:text-foreground/90
                ${activeSection === item.href.slice(1) 
                  ? "text-foreground" 
                  : "text-foreground/60"
                }`}
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeSection === item.href.slice(1) ? 1 : 0 
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
} 