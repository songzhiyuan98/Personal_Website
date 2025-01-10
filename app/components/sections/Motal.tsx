'use client'

import Image from 'next/image'
import { useEffect } from 'react'

type ExperienceDetail = {
  id: number
  title: string
  company: string
  overview: string
  mainImage: string
  link: string
  github: string
  features: {
    title: string
    description: string
    image: string
  }[]
  techStack: {
    category: string
    items: string[]
  }[]
  achievements: {
    metric: string
    value: string
    change: number
  }[]
}

const labsExperience: ExperienceDetail = {
  id: 1,
  title: "Interactive Anatomy Visualization Tool",
  company: "Labs Laboratory | Columbia University",
  overview: "开发了一个基于 Web 的解剖可视化工具，实现人体器官的交互式导航和详细信息展示。该系统支持15+器官的精确定位、动态交互和详细数据展示，为医疗教育和研究提供直观的可视化解决方案。",
  mainImage: "/projects/labs/overview.png",
  link: "https://labs-laboratory.com/medicine/",
  github: "https://github.com/songzhiyuan98/labs-laboratory",
  features: [
    {
      title: "SVG 交互系统",
      description: "提供15+人体器官的交互式导航，支持点击高亮和详细信息展示，实现精确定位和信息关联。",
      image: "/projects/labs/svg-interaction.gif"
    },
    {
      title: "动画效果",
      description: "实现悬停效果的平滑过渡、器官放大动画和阴影高亮，提升用户交互体验。通过 requestAnimationFrame 优化动画性能，确保交互流畅。",
      image: "/projects/labs/animation.gif"
    },
    {
      title: "性能优化",
      description: "实现 SVG 路径懒加载和代码分割策略，将首屏加载时间优化至1.2秒。使用 requestAnimationFrame 优化动画性能，确保交互流畅。",
      image: "/projects/labs/performance.png"
    }
  ],
  techStack: [
    {
      category: "编程技术",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      category: "可视化",
      items: ["SVG", "动画控制", "手势系统"]
    },
    {
      category: "性能优化",
      items: ["代码分割", "懒加载", "动画优化"]
    },
    {
      category: "开发工具",
      items: ["Git", "Webpack", "ESLint"]
    },
    {
      category: "测试工具",
      items: ["Jest", "Cypress"]
    }
  ],
  achievements: [
    {
      metric: "器官支持数量",
      value: "15+",
      change: 100
    },
    {
      metric: "加载性能提升",
      value: "52%",
      change: 52
    },
    {
      metric: "交互响应时间",
      value: "<100ms",
      change: 80
    },
    {
      metric: "代码复用率",
      value: "75%",
      change: 75
    },
    {
      metric: "测试覆盖率",
      value: "85%",
      change: 85
    },
    {
      metric: "用户满意度提升",
      value: "40%",
      change: 40
    }
  ]
}

const churchExperience: ExperienceDetail = {
  id: 2,
  title: "3CCA Church Website Redesign",
  company: "3CCA Church",
  overview: "重新设计并开发了 3CCA 教会的响应式官网，提升了用户体验、运营效率和在线互动。网站采用现代化设计风格，支持教会活动、音频资源和文章管理功能，为教会成员和访客提供便捷的使用体验。",
  mainImage: "/church/home.jpg",
  link: "https://github.com/your-username/church-website",
  github: "https://github.com/your-username/church-website",
  features: [
    {
      title: "活动管理系统",
      description: "开发了一个强大的活动管理模块，支持教会工作人员创建、编辑和管理即将举行的活动。包含活动详情、报名表单和参与者管理功能。",
      image: "/projects/church/events.gif"
    },
    {
      title: "资源管理",
      description: "实现了音频资源和文章的增删改查操作，支持多媒体内容上传和管理。集成了音频播放器和文章编辑器，确保用户能够轻松访问和更新相关内容。",
      image: "/projects/church/resources.png"
    },
    {
      title: "性能优化",
      description: "通过响应式设计和代码分割优化网站性能，实现了延迟加载和CDN加速，将页面加载时间减少了30%。使用Service Worker实现离线访问支持。",
      image: "/projects/church/performance.png"
    }
  ],
  techStack: [
    {
      category: "前端技术",
      items: ["React", "TypeScript", "Material-UI", "Tailwind CSS"]
    },
    {
      category: "后端技术",
      items: ["Node.js", "Express", "MongoDB"]
    },
    {
      category: "部署工具",
      items: ["AWS", "Docker", "Nginx"]
    },
    {
      category: "性能优化",
      items: ["代码分割", "CDN优化", "Service Worker"]
    },
    {
      category: "开发工具",
      items: ["Git", "ESLint", "Jest"]
    }
  ],
  achievements: [
    {
      metric: "加载性能提升",
      value: "30%",
      change: 30
    },
    {
      metric: "移动端兼容性",
      value: "100%",
      change: 100
    },
    {
      metric: "代码测试覆盖",
      value: "80%",
      change: 80
    },
    {
      metric: "用户满意度",
      value: "95%",
      change: 95
    },
    {
      metric: "运营效率提升",
      value: "50%",
      change: 50
    }
  ]
}

const animeHubExperience: ExperienceDetail = {
  id: 3,
  title: "AnimeHub",
  company: "Personal Project",
  overview: "开发了一个全栈动漫论坛网站，支持评分、排名和用户讨论功能，并提供多语言支持。该项目采用现代化的技术栈，实现了良好的用户体验和性能优化。",
  mainImage: "/animehub/1.png",
  link: "https://github.com/songzhiyuan98/animehub",
  github: "https://github.com/songzhiyuan98/animehub",
  features: [
    {
      title: "用户系统",
      description: "实现了完整的用户认证系统，包括注册、登录、密码重置等功能。使用 JWT 进行身份验证，确保用户数据安全。",
      image: "/animehub/auth.gif"
    },
    {
      title: "动漫管理",
      description: "开发了动漫信息的增删改查功能，支持评分、评论和收藏。集成了第三方 API 获取动漫数据，提供丰富的内容。",
      image: "/animehub/anime.png"
    },
    {
      title: "社区互动",
      description: "实现了用户讨论区功能，支持发帖、回复、点赞等社交功能。使用 WebSocket 实现实时通知和在线聊天。",
      image: "/animehub/community.png"
    }
  ],
  techStack: [
    {
      category: "前端技术",
      items: ["React", "Redux", "TailwindCSS", "TypeScript"]
    },
    {
      category: "后端技术",
      items: ["Node.js", "Express", "MongoDB", "WebSocket"]
    },
    {
      category: "认证安全",
      items: ["JWT", "Bcrypt", "OAuth2.0"]
    },
    {
      category: "部署工具",
      items: ["Docker", "Nginx", "PM2"]
    }
  ],
  achievements: [
    {
      metric: "日活跃用户",
      value: "500+",
      change: 100
    },
    {
      metric: "页面加载速度",
      value: "<2s",
      change: 80
    },
    {
      metric: "用户满意度",
      value: "90%",
      change: 90
    }
  ]
}

const portfolioExperience: ExperienceDetail = {
  id: 4,
  title: "Personal Portfolio Website",
  company: "Personal Project",
  overview: "设计并开发了个人作品集网站，专注于极简主义UI设计，实现了可重用组件和响应式布局。采用最新的Next.js框架，确保了良好的性能和用户体验。",
  mainImage: "/personalwebsite/1.png",
  link: "https://github.com/songzhiyuan98/portfolio",
  github: "https://github.com/songzhiyuan98/portfolio",
  features: [
    {
      title: "响应式设计",
      description: "使用 Tailwind CSS 实现完全响应式布局，确保在各种设备上都能提供出色的浏览体验。",
      image: "/personalwebsite/responsive.gif"
    },
    {
      title: "动画效果",
      description: "集成 Framer Motion 实现流畅的页面过渡和交互动画，提升用户体验。",
      image: "/personalwebsite/animation.gif"
    },
    {
      title: "深色模式",
      description: "实现了自动和手动切换的深色模式，并确保所有组件都能完美适配两种主题。",
      image: "/personalwebsite/darkmode.png"
    }
  ],
  techStack: [
    {
      category: "框架技术",
      items: ["Next.js", "React", "TypeScript"]
    },
    {
      category: "样式工具",
      items: ["Tailwind CSS", "Framer Motion"]
    },
    {
      category: "开发工具",
      items: ["Git", "ESLint", "Prettier"]
    }
  ],
  achievements: [
    {
      metric: "性能评分",
      value: "98/100",
      change: 98
    },
    {
      metric: "代码复用率",
      value: "80%",
      change: 80
    },
    {
      metric: "访问量/月",
      value: "1000+",
      change: 100
    }
  ]
}

export default function ExperienceModal({ 
  open, 
  onClose,
  experienceId 
}: { 
  open: boolean
  onClose: () => void
  experienceId: number 
}) {
  const experience = experienceId === 1 ? labsExperience : experienceId === 2 ? churchExperience : experienceId === 3 ? animeHubExperience : portfolioExperience

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div 
      className="
        fixed inset-0 
        flex items-center justify-center 
        p-4 sm:p-8 
        bg-black/40 dark:bg-black/60
        backdrop-blur-md
        z-50
        transition-all duration-300 ease-in-out
      "
      onClick={onClose}
    >
      <div 
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-gradient-to-br from-white/80 to-white/70 
          dark:from-black/80 dark:to-black/70
          backdrop-blur-xl
          rounded-2xl
          border border-white/20 dark:border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          transition-all duration-300
          p-6 sm:p-8 md:p-10
          scrollbar-thin scrollbar-track-transparent 
          scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)]
          dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
        "
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            p-2
            rounded-full
            text-gray-500 dark:text-gray-400
            hover:bg-black/5 dark:hover:bg-white/5
            transition-all duration-300
            hover:rotate-90
            hover:scale-110
            focus:outline-none
            focus:ring-2 focus:ring-purple-500/50
          "
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.company}
              </p>
              <div className="flex items-center justify-between gap-4">
                <h1 className="
                  text-2xl sm:text-3xl md:text-4xl 
                  font-bold 
                  tracking-tight
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                  dark:from-purple-400 dark:via-pink-400 dark:to-purple-400
                  animate-gradient
                ">
                  {experience.title}
                </h1>
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    text-sm font-medium
                    rounded-full
                    border border-gray-200 dark:border-gray-800
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    text-gray-700 dark:text-gray-300
                    transition-all duration-300
                    hover:scale-105
                    group
                  "
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:inline">View Code</span>
                </a>
              </div>
            </div>
            <p className="
              text-base sm:text-lg 
              leading-relaxed 
              text-gray-600 dark:text-gray-300
              border-l-4 border-purple-500/30
              pl-4
            ">
              {experience.overview}
            </p>
          </div>

          <a 
            href={experience.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              relative block
              w-full h-[200px] sm:h-[300px] md:h-[400px]
              rounded-xl overflow-hidden
              shadow-lg
              ring-1 ring-black/5 dark:ring-white/5
              group
              cursor-pointer
            "
          >
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/50 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              z-10
              flex items-end justify-center
              pb-6
            ">
              <span className="
                text-white
                text-sm sm:text-base
                font-medium
                px-4 py-2
                rounded-full
                bg-black/30
                backdrop-blur-sm
                border border-white/10
              ">
                查看项目
              </span>
            </div>
            <Image
              src={experience.mainImage}
              alt={experience.title}
              fill
              className="
                object-cover 
                group-hover:scale-105 
                transition-transform duration-500
                filter brightness-100 group-hover:brightness-90
              "
              priority
            />
          </a>

          <div className="space-y-8">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
              flex items-center gap-2
              before:content-[''] before:block before:w-8 before:h-[2px] 
              before:bg-purple-500/50
            ">
              核心功能
            </h2>
            <div className="space-y-12">
              {experience.features.map((feature, index) => (
                <div 
                  key={index}
                  className="
                    flex flex-col md:flex-row 
                    gap-8 
                    items-center
                    hover:bg-white/5 dark:hover:bg-black/20
                    p-4 rounded-xl
                    transition-colors duration-300
                  "
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="
                      text-lg sm:text-xl 
                      font-semibold 
                      tracking-tight
                      text-purple-600 dark:text-purple-400
                    ">
                      {feature.title}
                    </h3>
                    <p className="
                      text-gray-600 dark:text-gray-300 
                      leading-relaxed
                    ">
                      {feature.description}
                    </p>
                  </div>
                  <div className="
                    flex-1 
                    relative w-full h-[200px]
                    rounded-xl overflow-hidden
                    shadow-lg
                    transform hover:scale-[1.02]
                    transition-transform duration-300
                  ">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
            ">
              技术栈
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="
                    p-6
                    rounded-xl
                    space-y-4
                    hover:bg-white/[0.02] dark:hover:bg-black/[0.02]
                    transition-colors duration-300
                    border border-white/[0.03] dark:border-white/[0.03]
                  "
                >
                  <h3 className="
                    text-lg font-semibold 
                    text-purple-600 dark:text-purple-400
                    mb-4
                  ">
                    {tech.category}
                  </h3>
                  
                  <div className="
                    grid grid-cols-3 sm:grid-cols-4 
                    gap-6
                  ">
                    {tech.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex flex-col items-center 
                          gap-3
                          group
                        "
                      >
                        <div className="
                          relative 
                          w-12 sm:w-14
                          h-12 sm:h-14
                          flex items-center justify-center 
                          transition-all duration-300 
                          group-hover:scale-110   
                          group-hover:-translate-y-1
                        ">
                          <Image
                            src={`/skills/${item.toLowerCase().replace(/[\s()\.+]/g, '')}.svg`}
                            alt={item}
                            width={32}
                            height={32}
                            className="
                              dark:invert          
                              sm:w-[40px] sm:h-[40px]
                            "
                          />
                        </div>
                        <span className="
                          text-xs sm:text-sm
                          font-medium 
                          text-gray-600 dark:text-gray-400
                          group-hover:text-gray-900 dark:group-hover:text-gray-200
                          transition-colors 
                          text-center
                        ">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
            ">
              量化成果
            </h2>
            <div className="
              grid grid-cols-1 sm:grid-cols-3 
              gap-8
            ">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <p className="
                    text-3xl sm:text-4xl 
                    font-bold 
                    tracking-tight
                    text-purple-600 dark:text-purple-400
                  ">
                    {achievement.value}
                  </p>
                  <p className="
                    text-gray-600 dark:text-gray-300
                  ">
                    {achievement.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 