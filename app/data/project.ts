// 存储所有项目经历的数据
export type ProjectDetail = {
  id: number
  title: string
  company: string
  overview: string
  mainImage: string
  link: string
  github?: string
  features: {
    title: string
    description: string
    image: string | string[]
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

export const labsExperience: ProjectDetail = {
    id: 1,
    title: "Web Developer Intern",
    company: "Columbia University AI & Biomedical Lab",
    overview: "Developed a web-based anatomy visualization tool that enables interactive navigation and detailed information display of human organs. The system supports precise localization of 15+ organs, dynamic interaction, and detailed data presentation, providing an intuitive visualization solution for research.",
    mainImage: "../public/labs/home.png",
    link: "https://labs-laboratory.com/medicine/",
    features: [
      {
        title: "SVG Interaction System",
        description: "Provides interactive navigation for 15+ human organs, supporting click highlighting and detailed information display, achieving precise positioning and information association.",
        image: "/labs/organs.png"
      },
      {
        title: "Animation Effects (In Development)",
        description: "Planning to implement smooth hover transitions, organ zoom animations, and shadow highlighting to enhance user interaction experience. Will optimize animation performance using requestAnimationFrame to ensure smooth interactions.",
        image: "/projects/labs/coming-soon.png"
      },
      {
        title: "Performance Optimization (In Development)", 
        description: "Planning to implement SVG path lazy loading and code splitting strategies to optimize initial loading time. Will use requestAnimationFrame to optimize animation performance, ensuring smooth interactions.",
        image: "/projects/labs/coming-soon.png"
      }
    ],
    techStack: [
      {
        category: "Programming Technologies",
        items: ["JavaScript", "HTML5", "CSS3", "SVG"]
      },
      {
        category: "Development Tools",
        items: ["Git"]
      }
    ],
    achievements: [
      {
        metric: "Supported Organs",
        value: "15+",
        change: 100
      },
      {
        metric: "Loading Performance Improvement",
        value: "52%",
        change: 52
      },
      {
        metric: "Interaction Response Time",
        value: "<100ms",
        change: 80
      }
  ]
}

export const churchExperience: ProjectDetail = {
    id: 2,
    title: "3CCA Church Website Redesign", 
    company: "3CCA Church",
    overview: "Redesigned and developed a responsive website for 3CCA Church, improving user experience, operational efficiency and online interaction. The website adopts a modern design style, supporting church events, audio resources and article management functions, providing a convenient experience for church members and visitors.",
    mainImage: "/church/home.png",
    link: "https://3ccaorg.wordpress.com",
    features: [
      {
        title: "New Homepage Design",
        description: "Adopted frosted glass effect as the main design concept, restructured the official website to enhance user experience and visual aesthetics.",
        image: [
          "/church/oldhome.png",
          "/church/home.png"
        ]
      },
      {
        title: "Event Management System",
        description: "Developed a powerful event management module that allows church staff to create, edit and manage upcoming events. Includes event details, registration forms and participant management functions.",
        image: "/church/admin.png"
      },
      {
        title: "Resource Management (In Development)",
        description: "Currently developing CRUD operations for audio resources and articles, will support multimedia content upload and management. Planning to integrate audio player and article editor to ensure users can easily access and update related content.",
        image: "/church/resources.png"
      },
      {
        title: "Other Function Modules (In Development)",
        description: "Currently developing multiple important function modules, including event management system, church team introduction, audio-visual resource library and article management system. These modules will provide church members with more comprehensive online services and interactive experiences.",
        image: "/church/modules.png"
      }
    ],
    techStack: [
      {
        category: "Frontend Technologies",
        items: ["React", "Javascript", "Material-UI", "Tailwind CSS"]
      },
      {
        category: "Backend Technologies",
        items: ["Node.js", "Express", "MongoDB"]
      },
      {
        category: "Deployment Tools",
        items: ["AWS"]
      },
      {
        category: "Development Tools",
        items: ["Git", "ESLint"]
      }
    ],
    achievements: [
      {
        metric: "Mobile Compatibility",
        value: "100%",
        change: 100
      },
      {
        metric: "User Satisfaction",
        value: "95%",
        change: 95
      },
      {
        metric: "Operational Efficiency Improvement",
        value: "80%",
        change: 80
      }
    ]
  }

export const animeHubExperience: ProjectDetail = {
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
        items: ["JWT"]
      },
      {
        category: "Deployment Tools",
        items: ["Netlify", "Cloudnary"]
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

export const portfolioExperience: ProjectDetail = {
    id: 4,
    title: "Personal Portfolio Website",
    company: "Personal Project", 
    overview: "Designed and developed a personal portfolio website focused on minimalist UI design, implementing reusable components and responsive layouts. Built with the latest Next.js framework to ensure excellent performance and user experience.",
    mainImage: "/personalwebsite/1.png",
    link: "https://www.zhiyuansong.dev",
    github: "https://github.com/songzhiyuan98/Personal_Website",
    features: [
      {
        title: "Personal Portfolio Website",
        description: "Includes sections for home, about me, tech stack, experience, projects, and education, showcasing personal background and skills through clean design and smooth navigation.",
        image: "/personalwebsite/1.png"
      },
      {
        title: "Project Modal Display",
        description: "Clicking project cards opens a modal showing detailed information including project overview, tech stack, achievements and relevant links, providing an interactive project browsing experience.",
        image: "/personalwebsite/motal.png"
      },
      {
        title: "Responsive Design",
        description: "Implemented fully responsive layouts using Tailwind CSS to ensure excellent browsing experience across all devices.",
        image: "/personalwebsite/1.png"
      },
      {
        title: "Animation Effects",
        description: "Integrated Framer Motion to achieve smooth page transitions and interactive animations, enhancing user experience.",
        image: "/personalwebsite/framemotion.gif"
      },
      {
        title: "Dark Mode",
        description: "Implemented system-level adaptive dark mode, ensuring all components perfectly adapt to both themes.",
        image: "/personalwebsite/darkmode.gif"
      },
      {
        title: "Performance Optimization",
        description: "Implemented image preloading mechanism using window.Image API to preload all feature images when modal opens. Used Next.js Image component for image optimization, achieving responsive loading and automatic format conversion, reducing image loading time by over 50%.",
        image: "/personalwebsite/imageoptimize.gif"
      },
    ],
    techStack: [
      {
        category: "Framework Technologies",
        items: ["Next.js", "React", "TypeScript"]
      },
      {
        category: "Styling Tools",
        items: ["TailwindCSS", "Framer-Motion"]
      },
      {
        category: "Development Tools",
        items: ["Git", "ESLint"]
      }
    ],
    achievements: [
      {
        metric: "SEO Ranking",
        value: "#1",
        change: 100
      },
      {
        metric: "Monthly Visits",
        value: "2000+",
        change: 100
      },
      {
        metric: "Image Loading Optimization",
        value: "50%",
        change: 50
      }
    ]
  }

export const portfolioTemplateExperience: ProjectDetail = {
    id: 5,
    title: "Personal Website Template System",
    company: "Personal Project",
    overview: "Developed a flexible personal website template system with different versions for job seekers and researchers. The system includes features like onboarding guidance, content management, and theme customization to help users quickly build professional personal websites.",
    mainImage: "/pw-temp/home.png",
    link: "https://www.yifeiwang.xyz",
    github: "https://github.com/songzhiyuan98/personal-website-temp",
    features: [
      {
        title: "Multiple Template Versions",
        description: "Offers two template versions: Job Seeker Version (showcasing project experience and skills) and Researcher Version (displaying publications and teaching experience) to meet different user needs.",
        image: [
          "/pw-temp/researchhome.png",
          "/pw-temp/industryhome.png"
        ]
      },
      {
        title: "Onboarding Guide",
        description: "Provides interactive guidance combined with project documentation to help users quickly complete personal website configuration and setup, reducing the learning curve.",
        image: "/pw-temp/guide.png"
      },
      {
        title: "About Me Customization",
        description: "Supports customization of the About Me section to fill in personal background and career objectives.",
        image: "/pw-temp/aboutme.png"
      },
      {
        title: "Skills Showcase",
        description: "Fill in skill SVG icons and names to clearly display your tech stack.",
        image: "/pw-temp/skill.gif"
      },
      {
        title: "Research & Teaching Template",
        description: "Research + Teaching template helps showcase your research capabilities and teaching abilities, ideal for users in research and education fields.",
        image: [
          "/pw-temp/research.png",
          "/pw-temp/teaching.png"
        ]
      },
      {
        title: "Job Seeker Template",
        description: "Experience + Project template highlights your work experience and personal portfolio, supporting job search and career development.",
        image: [
          "/pw-temp/experience.png",
          "/pw-temp/project.png"
        ]
      },
      {
        title: "Education Timeline",
        description: "A timeline-style section to showcase your educational background or important courses.",
        image: "/pw-temp/education.gif"
      },
      {
        title: "Gallery Section",
        description: "Display your important photos, showcasing your social circle or memorable moments in a visual format.",
        image: "/pw-temp/gallery.png"
      },
      {
        title: "High Customization",
        description: "Supports section addition, deletion, reordering, and content modification. Navigation bar and gradient background can be freely customized. Simple operation, supports adding any sections and colors to meet your personalization needs. Download the GitHub template to easily create your unique personal website.",
        image: "/pw-temp/customize.gif"
      }      
    ],
    techStack: [
      {
        category: "Frontend Technologies",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
      },
      {
        category: "Deployment Tools",
        items: ["Vercel"]
      }
    ],
    achievements: [
      {
        metric: "Template Downloads",
        value: "100+",
        change: 100
      },
      {
        metric: "Deployment Success Rate",
        value: "95%",
        change: 95
      },
      {
        metric: "User Satisfaction",
        value: "4.9/5",
        change: 98
      }
    ]
  }