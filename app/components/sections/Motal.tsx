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
  overview: "Developed a full-stack anime forum website supporting features such as rating, ranking, and user discussions, with multi-language support. The project leverages a modern tech stack to deliver an optimized user experience and high performance.",
  mainImage: "/animehub/home.png",
  link: "https://animehub-frontend.netlify.app",
  github: "https://github.com/songzhiyuan98/animehub",
  features: [
    {
      title: "Daily Recommendations",
      description: "Refresh popular anime daily through algorithms, providing real-time recommendations of the latest and most popular anime news.",
      image: "/animehub/daily-recommendation.png"
    },
    {
      title: "Anime Details Page",
      description: "Provides anime titles, synopsis, popular related videos, while supporting favorites and comment functions to enhance user interaction.",
      image: "/animehub/anime-detail.png"
    },
    {
      title: "Related Videos",
      description: "Display anime-related video content, including PVs, EDs, OPs, helping users quickly understand the latest anime updates.",
      image: "/animehub/related-videos.png"
    },
    {
      title: "Anime Planet",
      description: "Anime search functionality integrating third-party APIs for rich anime data, supporting quick search and browsing. Users can click any entry to view details and explore more related content.",
      image: "/animehub/anime-planet.png"
    },
    {
      title: "Anime Filtering and Search",
      description: "Combines multi-dimensional tag filtering and search functionality, precisely filtering anime by category, year, rating and other conditions. Supports input search with automatic translation optimization for Japanese anime titles, helping users quickly find the most relevant anime content.",
      image: "/animehub/anime-filter-search.png"
    },
    {
      title: "Forum Posts Section",
      description: "Displays all posts with real-time content updates based on posting time. Homepage features popular post recommendations to help users quickly access the latest trending news, creating an active anime community interaction experience.",
      image: "/animehub/forum-posts.png"
    },
    {
      title: "Create New Post",
      description: "Supports creating posts through a rich text editor, flexibly adding videos, images, YouTube embedded links, text formatting and more. Users can use existing database tags or add new ones via '#', which are recorded and support personalized recommendations.",
      image: "/animehub/new-post.png"
    },
    {
      title: "Post Details Page",
      description: "Displays post details and author information, while providing post metrics (likes, views, etc.) and a comment section for user interaction. Recommends similar posts through tags and backend algorithms, pushing real-time relevant topics users are interested in to increase community engagement.",
      image: "/animehub/post-detail.png"
    },
    {
      title: "User Registration",
      description: "Implemented comprehensive user registration functionality. Each email can only register once, with email verification ensuring user identity validity. Also integrated password strength analysis tools, requiring users to set strong passwords to enhance account security.",
      image: "/animehub/register.png"
    },
    {
      title: "User Login",
      description: "Developed a secure and reliable user login system using JWT (JSON Web Token) for authentication, ensuring session security. Supports automatic expiration and refresh mechanisms to effectively protect user data from unauthorized access.",
      image: "/animehub/login.png"
    },
    {
      title: "User Profile",
      description: "Provides user profile management functionality, supporting username, avatar and gender changes to achieve highly personalized settings and enhance user's unique platform experience.",
      image: "/animehub/user-profile.png"
    },
    {
      title: "Notification Center",
      description: "Implements real-time notifications through WebSocket, helping users receive important updates instantly. Supports clicking notifications to navigate directly to corresponding anime or post detail pages, ensuring users don't miss any key information.",
      image: "/animehub/notifications.png"
    },
    {
      title: "User Favorites Section",
      description: "Displays all anime favorited by users, allowing quick browsing of saved content. Supports clicking to navigate to corresponding detail pages for further information exploration.",
      image: "/animehub/user-favorites.png"
    },
    {
      title: "Multi-language Support",
      description: "Platform supports switching between Chinese, English and Japanese, with language preferences stored in account settings for persistent storage, providing a more personalized and convenient browsing experience. More language support is continuously being updated, aiming to create a global anime community.",
      image: "/animehub/multi-language.png"
    },
    {
      title: "Community Interaction",
      description: "Implemented user discussion area functionality, supporting social features like posting, replying, and liking. Uses WebSocket for real-time notifications.",
      image: "/animehub/community.png"
    }
  ],
  techStack: [
    {
      category: "Frontend Technologies",
      items: ["React", "Redux", "Material-UI", "JavaScript"]
    },
    {
      category: "Backend Technologies", 
      items: ["Node.js", "Express", "MongoDB", "WebSocket"]
    },
    {
      category: "Authentication & Security",
      items: ["JWT", "Bcrypt"]
    },
    {
      category: "Deployment Tools",
      items: ["Netlify", "Render", "Cloudnary"]
    }
  ],
  achievements: [
    {
      metric: "Anime Data Loading Optimization",
      value: "90%",
      change: 90
    },
    {
      metric: "Comment Update Speed",
      value: "2x",
      change: 100
    },
    {
      metric: "API Response Time",
      value: "<500ms", 
      change: 85
    }
  ]
}

const portfolioExperience: ExperienceDetail = {
  id: 4,
  title: "Personal Portfolio Website",
  company: "Personal Project",
  overview: "设计并开发了个人作品集网站，专注于极简主义UI设计，实现了可重用组件和响应式布局。采用最新的Next.js框架，确保了良好的性能和用户体验。",
  mainImage: "/personalwebsite/1.png",
  link: "https://www.zhiyuansong.dev",
  github: "https://github.com/songzhiyuan98/Personal_Website",
  features: [
    {
      title: "个人作品集网站",
      description: "包括首页、关于我、技术栈、经历、项目、教育等板块，通过简洁设计与流畅导航展示个人背景与技能。",
      image: "/personalwebsite/1.png"
    },
    {
      title: "项目模态框展示",
      description: "点击项目卡片弹出模态框，展示详细信息，包括项目概览、技术栈、成果与相关链接，为用户提供交互式的项目浏览体验。",
      image: "/personalwebsite/motal.png"
    },
    {
      title: "响应式设计",
      description: "使用 Tailwind CSS 实现完全响应式布局，确保在各种设备上都能提供出色的浏览体验。",
      image: "/personalwebsite/1.png"
    },
    {
      title: "动画效果",
      description: "集成 Framer Motion 实现流畅的页面过渡和交互动画，提升用户体验。",
      image: "/personalwebsite/framemotion.gif"
    },
    {
      title: "深色模式",
      description: "实现了系统级自适应深色模式，并确保所有组件都能完美适配两种主题。",
      image: "/personalwebsite/darkmode.gif"
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
      items: ["Git", "ESLint"]
    }
  ],
  achievements: [
    {
      metric: "SEO排名",
      value: "#1",
      change: 100
    },
    {
      metric: "月访问量",
      value: "2000+",
      change: 100
    },
    {
      metric: "性能评分",
      value: "98/100",
      change: 98
    }
  ]
}

const portfolioTemplateExperience: ExperienceDetail = {
  id: 5,
  title: "个人网站模板系统",
  company: "个人项目",
  overview: "开发了一个灵活的个人网站模板系统，分别针对求职者和科研人员提供了不同版本。系统包含新手引导、内容管理和主题定制功能，帮助用户快速搭建专业的个人展示网站。",
  mainImage: "/pw-temp/home.png",
  link: "https://portfolio-template.vercel.app",
  github: "https://github.com/songzhiyuan98/portfolio-template",
  features: [
    {
      title: "多版本模板",
      description: "提供求职者版本(展示项目经验和技能)和科研人员版本(展示论文发表和教学经验)两种模板，满足不同用户群体需求。",
      image: "/personalwebsite/versions.png"
    },
    {
      title: "新手引导系统",
      description: "集成交互式引导功能，通过步骤说明帮助用户快速完成内容配置和网站部署，降低使用门槛。",
      image: "/personalwebsite/guide.gif"
    },
    {
      title: "内容管理系统",
      description: "提供简单的内容管理界面，用户可以轻松编辑个人信息、经历、项目等内容，支持实时预览。",
      image: "/personalwebsite/cms.png"
    },
    {
      title: "主题定制",
      description: "支持自定义颜色、字体、布局等样式，并提供多套预设主题，满足个性化需求。",
      image: "/personalwebsite/themes.png"
    }
  ],
  techStack: [
    {
      category: "前端技术",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "状态管理",
      items: ["Redux Toolkit", "React Context"]
    },
    {
      category: "部署工具",
      items: ["Vercel", "GitHub Actions"]
    }
  ],
  achievements: [
    {
      metric: "模板下载量",
      value: "500+",
      change: 100
    },
    {
      metric: "部署成功率",
      value: "95%",
      change: 95
    },
    {
      metric: "用户满意度",
      value: "4.8/5",
      change: 96
    }
  ]
}

const preloadImages = (features: { image: string }[]) => {
  if (typeof window === 'undefined') return;
  
  features.forEach(feature => {
    const img = new window.Image();
    img.src = feature.image;
  });
};

export default function ExperienceModal({ 
  open, 
  onClose,
  experienceId 
}: { 
  open: boolean
  onClose: () => void
  experienceId: number 
}) {
  const experience = experienceId === 1 ? labsExperience : 
                    experienceId === 2 ? churchExperience : 
                    experienceId === 3 ? animeHubExperience : 
                    experienceId === 4 ? portfolioExperience : 
                    portfolioTemplateExperience;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      preloadImages(experience.features);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [open, experience.features]);

  if (!open) return null;

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
                  href={experience.github}
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
                View Project
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
              Core Features
            </h2>
            <div className="space-y-12">
              {experience.features.map((feature, index) => (
                <div 
                  key={index}
                  className="
                    flex flex-col md:flex-row 
                    gap-8 
                    items-center
                    p-4 rounded-xl
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
              Tech Stack
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
              Quantitative Results
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