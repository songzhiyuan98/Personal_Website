'use client'

import { useState, useEffect, useRef } from "react"
import React from 'react'

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"},
  { name: "Experience", href: "#experience"},
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const underlineRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const NAVBAR_HEIGHT = 60

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(`a[href="#${activeSection}"]`)
    if (activeItem && underlineRef.current && navRef.current) {
      const rect = activeItem.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      
      underlineRef.current.style.left = `${rect.left - navRect.left}px`
      underlineRef.current.style.width = `${rect.width}px`
    }
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href) as HTMLElement
    
    if (target) {
      const targetPosition = target.offsetTop - NAVBAR_HEIGHT
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="
        max-w-4xl mx-auto 
        px-3 sm:px-4 /* 移动端水平内边距3, sm(640px)以上为4 */
        py-4
      ">
        <ul ref={navRef} className="
          flex justify-center 
          gap-4 sm:gap-8 /* 移动端间距4, sm(640px)以上为8 */
          relative text-center overflow-x-auto
        ">
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-neutral-950 dark:bg-neutral-50 transition-all duration-300 ease-out"
          />
          
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`
                  text-xs sm:text-sm /* 移动端字体大小xs(12px), sm(640px)以上为sm(14px) */
                  font-medium whitespace-nowrap transition-colors
                  ${activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
