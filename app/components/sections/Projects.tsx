'use client'

import AnimatedText from '../common/AnimatedText'


type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
  github?: string
  // 详情页内容
  details: {
    overview: string
    features: string[]
    architecture: string
    techStack: {
      frontend: string[]
      backend: string[]
      ai: string[]
      devops: string[]
    }
    highlights: string[]
    targetUsers: string[]
    summary: string
  }
}

// 示例项目数据
const projects: Project[] = [
  {
    id: 1,
    title: "StudyAssistant",
    description: "AI-powered learning and review platform that converts PDF lecture notes into structured learning content, generating study notes, flashcards, and practice exams.",
    period: "2025.08 - 2025.09",
    image: "/studyai/cover.png",
    skills: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Docker"],
    link: "https://studyassistant.vercel.app",
    github: "https://github.com/songzhiyuan98/studyai",
    details: {
      overview: `StudyAssistant 是一个基于 Node.js + Next.js + Postgres(pgvector) 的全栈 AI 学习助手，专为大学生和研究人员设计。
它可以将 PDF 讲义、Slides、TXT 文章 转换为 结构化学习内容，并生成 复习笔记、术语表、抽认卡、模拟考试与答案解析。
核心特色是 证据驱动 (Evidence-based)：所有生成内容均附带出处锚点，可溯源到原始文档，避免 LLM 幻觉，提升学习可信度。`,
      features: [
        "📄 文档解析与规范化",
        "	•	支持 PDF / PPTX / TXT，兼容扫描件、双栏论文与排版混乱的资料。",
        "	•	自动执行：去页眉页脚、断字修复、阅读顺序重建。",
        "	•	分段时生成 锚点信息（页码、幻灯片号、字符偏移、bbox 坐标）。",
        "",
        "📑 复习资料生成",
        "	•	双语翻译（中英对照显示）。",
        "	•	要点摘要（≤6 条 bullet，每条带出处）。",
        "	•	术语表（term/definition/example）。",
        "	•	抽认卡（支持导出 Anki CSV）。",
        "",
        "📝 模拟考试与答案分析",
        "	•	按蓝图自动生成 MCQ / 填空 / 简答题。",
        "	•	每题带 标准答案、解析和出处 (source_refs)。",
        "	•	简答题自动评分：基于 rubric（正确性 6 + 关键概念 3 + 清晰度 1）。",
        "",
        "🔍 相关知识推荐",
        "	•	使用 向量检索 (pgvector) 从同一课程/章节召回相关段落。",
        "	•	在侧栏显示\"相关知识卡片\"，点击可加入复习/出题范围。",
        "",
        "📘 错题本与学习闭环",
        "	•	记录用户答错的题目和关联段落。",
        "	•	支持个性化复习与间隔重复。"
      ],
      architecture: `[Next.js Web]
   ├── Upload/Reader/Exam/Notebook 界面
   │
[Fastify API Gateway]
   ├── Auth / Rate Limit / REST API
   ├── 调度异步任务 → BullMQ
   │
[Workers (BullMQ + Redis)]
   ├── Ingest Worker: 文档解析 → 分段 → 向量化
   ├── Gen Worker: 翻译/摘要/出题/解析
   └── Grade Worker: 简答题评分
   │
[Python Sidecar (可选)]
   ├── OCR (Tesseract / Textract)
   ├── 双栏/表格/公式解析
   │
[Database]
   ├── Postgres + pgvector（关系型 + 向量检索）
   ├── segments (带锚点) / items / exams / attempts
   │
[Storage]
   ├── S3/R2 存储原文件与中间 JSON`,
      techStack: {
        frontend: [
          "Next.js 14 (App Router) – 前端框架",
          "Tailwind CSS – UI 风格（极简 + Vercel V0 风格）",
          "React Hooks/Server Actions – 状态与交互逻辑",
          "pdf.js / pptx-parser – 文档预览与分段可视化"
        ],
        backend: [
          "Node.js + Fastify – 高性能 API 框架",
          "BullMQ + Redis – 任务队列（解析/生成/评分异步化）",
          "Prisma + Postgres – 数据建模与持久化",
          "pgvector – 语义检索向量数据库扩展"
        ],
        ai: [
          "Embedding：OpenAI text-embedding-3-large（存储到 pgvector）",
          "LLM：用于翻译/摘要/出题/解析，带 证据约束 Prompt",
          "OCR & 版面识别：PyMuPDF / Tesseract（Python Sidecar）"
        ],
        devops: [
          "Docker Compose – 本地开发环境（API + Workers + Postgres + Redis + MinIO）",
          "S3/Cloudflare R2 – 文件存储",
          "Railway / Render / AWS – 部署环境"
        ]
      },
      highlights: [
        "证据驱动：所有生成内容都必须附带出处锚点，可点击回到原文。",
        "复习 + 考试一体化：不仅能提炼知识，还能直接练习与检测掌握度。",
        "脏 PDF 兼容：OCR/双栏解析/表格识别，保证学术论文和课堂讲义都能处理。",
        "知识网络化：相关知识推荐，帮助用户建立系统化理解。",
        "学习闭环：错题本、抽认卡、导出工具，支持长期记忆与间隔重复。"
      ],
      targetUsers: [
        "大学本科/研究生：高效复习、考前模拟。",
        "科研人员：快速精读论文并自测理解。",
        "教师/助教：快速生成 quiz、复习资料与考试题库。"
      ],
      summary: "StudyAssistant = \"从原始材料 → 结构化复习内容 → 模拟考试 → 错题闭环\"，一个 AI 驱动的证据化学习助手。"
    }
  },
  {
    id: 2,
    title: "AnimeHub",
    description: "Full-stack anime forum community platform supporting user ratings, reviews, rankings, and discussions, with multilingual support and user profile management.",
    period: "2024.06 - 2024.11",
    image: "/animehub/home.png",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://animehub.example.com",
    github: "https://github.com/songzhiyuan98/animehub",
    details: {
      overview: `AnimeHub 是一个全栈开发的动漫社区平台，支持用户进行 评分、评论、排行榜与讨论，并提供 多语言支持 与 用户资料管理。该项目展示了完整的 前后端开发能力，同时实现了 用户认证与授权、数据库设计与优化，以及响应式的用户体验。`,
      features: [
        "🎌 用户认证与授权",
        "	•	用户注册与登录：基于 JWT 的认证和授权机制。",
        "	•	安全登录与权限管理：实现用户身份验证和访问控制。",
        "",
        "⭐ 动漫评分与评论",
        "	•	动漫评分与评论：用户可对动漫进行打分、撰写评论、参与讨论。",
        "	•	排行榜与推荐系统：根据评分和热度生成动态榜单。",
        "",
        "🌐 多语言支持",
        "	•	多语言支持：支持多语言界面，提升全球用户体验。",
        "	•	国际化体验：通过 i18n 提升用户的国际化体验。",
        "",
        "👤 用户资料管理",
        "	•	用户个人资料管理：用户可编辑头像、简介、收藏和历史记录。",
        "	•	个性化体验：支持用户自定义个人资料和偏好设置。"
      ],
      architecture: `[React 前端] → [Express.js API] → [MongoDB 数据库]

前端层
   ├── React.js 组件化开发
   ├── 响应式设计 (移动端/桌面端)
   └── 多语言界面支持

API 层
   ├── Express.js RESTful API
   ├── JWT 认证中间件
   └── 数据验证与错误处理

数据层
   ├── MongoDB 文档数据库
   ├── 用户/动漫/评论集合设计
   └── 查询优化与索引`,
      techStack: {
        frontend: [
          "React.js – 前端框架",
          "JavaScript (ES6+) – 逻辑与交互",
          "CSS3 / 响应式设计 – 界面样式"
        ],
        backend: [
          "Node.js – 运行时环境",
          "Express.js – Web API 框架",
          "MongoDB (MongoDB Atlas) – 数据存储与查询优化",
          "JWT (JSON Web Token) – 用户认证与授权"
        ],
        ai: [],
        devops: [
          "Heroku – 应用部署与运行环境",
          "MongoDB Atlas – 云数据库托管"
        ]
      },
      highlights: [
        "全栈开发经验：独立完成前端、后端与数据库设计。",
        "用户认证与授权：基于 JWT 实现安全登录与权限管理。",
        "数据库设计与优化：设计用户、动漫、评论等集合，支持高效查询与分页。",
        "响应式设计：移动端与桌面端一致的良好体验。",
        "多语言支持：通过 i18n 提升用户的国际化体验。"
      ],
      targetUsers: [
        "动漫爱好者：寻找、评分与讨论动漫。",
        "社区用户：参与话题讨论、分享观点。"
      ],
      summary: "AnimeHub 是一个功能完整的动漫社区平台，涵盖 注册登录、评分评论、排行榜、国际化支持 等核心功能，充分展示了 React + Node.js + Express.js + MongoDB 全栈开发能力，并突出了 用户认证、安全性和数据库优化 的工程实践经验。"
    }
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "Personal portfolio website built with Next.js App Router, featuring minimalist and modern UI design with emphasis on clean interactions and visual experience.",
    period: "2024.10 - 2025.01",
    image: "/personalwebsite/1.png",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://www.zhiyuansong.dev",
    github: "https://github.com/songzhiyuan98/Personal_Website",
    details: {
      overview: `Personal Portfolio Website 是一个基于 Next.js App Router 搭建的个人作品集网站，采用 极简 + 现代 UI 设计，强调简洁的交互与视觉体验。网站包含 首页、关于我、技术栈、教育经历、项目展示、实习经验、个人相册 等模块，帮助展示个人技能与项目成果。`,
      features: [
        "🌐 响应式设计",
        "	•	响应式设计：在桌面端与移动端都有流畅体验。",
        "	•	跨设备兼容：确保在各种屏幕尺寸下都有最佳显示效果。",
        "",
        "🎨 动画效果",
        "	•	动画效果：使用 Framer Motion 实现流畅过渡与交互动效。",
        "	•	微交互设计：提升用户体验的细节动画。",
        "",
        "🧩 可复用组件",
        "	•	可复用组件：基于 Tailwind + React 组件化开发，提升开发效率与一致性。",
        "	•	模块化设计：便于维护和扩展的组件架构。",
        "",
        "🌙 深色模式支持",
        "	•	深色模式支持：自动适配系统主题，保证视觉舒适度。",
        "	•	主题切换：用户可手动切换明暗主题。",
        "",
        "🔍 SEO 优化",
        "	•	SEO 优化：利用 Next.js 静态生成和元数据配置，提升搜索引擎可见度。",
        "	•	性能优化：快速加载和良好的 Core Web Vitals 指标。"
      ],
      architecture: `[Next.js App Router] → [Static Site Generation (SSG)] → [Vercel 部署]

前端层
   ├── Next.js (App Router) – 服务端渲染 + 静态生成
   ├── TypeScript – 类型安全开发
   ├── Tailwind CSS – 响应式 & 极简 UI 样式
   └── Framer Motion – 动画与过渡效果

构建层
   ├── Static Site Generation (SSG)
   ├── 增量静态再生成 (ISR)
   └── 自动代码分割

部署层
   ├── Vercel – 自动化构建与托管
   ├── GitHub Actions – CI/CD 集成
   └── 全球 CDN 分发`,
      techStack: {
        frontend: [
          "Next.js (App Router) – 服务端渲染 + 静态生成",
          "TypeScript – 类型安全开发",
          "Tailwind CSS – 响应式 & 极简 UI 样式",
          "Framer Motion – 动画与过渡效果"
        ],
        backend: [
          "（无复杂后端逻辑，静态站点为主；可扩展为与后端 API 集成）"
        ],
        ai: [],
        devops: [
          "Vercel – 自动化构建与托管",
          "GitHub Actions – CI/CD 集成，自动化部署与测试"
        ]
      },
      highlights: [
        "现代前端技术栈：结合 Next.js + TypeScript + Tailwind + Framer Motion。",
        "极简设计：参考 ChatGPT / Vercel V0 的玻璃风与留白美学。",
        "高性能：利用 Next.js 的静态生成与增量构建，提升加载速度。",
        "工程化：基于组件化与 CI/CD 流程，保证代码可维护性与快速迭代。"
      ],
      targetUsers: [
        "潜在雇主：快速了解我的背景与项目能力。",
        "客户：作为展示作品与项目案例的窗口。",
        "同行开发者：交流 UI/UX 设计与全栈开发经验。"
      ],
      summary: "这是一个融合 设计美感与技术实现 的个人作品集网站，不仅展示了我在 前端开发、UI/UX 设计、性能优化、工程化部署 等方面的能力，也为未来的招聘与合作提供了一个专业的展示平台。"
    }
  },
  {
    id: 4,
    title: "Portfolio Website Template System",
    description: "Open-source website template system based on Next.js, providing different style versions for job seekers and researchers, with built-in getting started guides, content management, theme customization, and one-click deployment.",
    period: "2025.01 - 2025.02", 
    image: "/pw-temp/home.png",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://portfolio-template.vercel.app",
    github: "https://github.com/songzhiyuan98/personal-website-template",
    details: {
      overview: `Portfolio Website Template System 是一个基于 Next.js 的开源网站模板系统，为 求职者 与 研究人员 提供不同风格的版本。项目内置 入门指南、内容管理、主题定制与一键部署功能，让用户可以快速搭建并个性化自己的个人作品集网站。`,
      features: [
        "🖥️ 多版本模板",
        "	•	多版本模板：针对求职者（强调项目/实习/技能）与研究人员（强调论文/研究成果/出版物）提供不同布局。",
        "	•	模块化设计：支持灵活组合不同功能模块。",
        "",
        "📚 入门指南 & 文档",
        "	•	入门指南 & 文档：提供完整的快速上手文档，帮助用户快速部署与配置。",
        "	•	视频教程：包含详细的部署和配置视频指导。",
        "",
        "📝 内容管理系统 (CMS)",
        "	•	内容管理系统 (CMS)：支持通过 JSON/Markdown/Notion API 导入内容并渲染页面。",
        "	•	数据驱动：通过配置文件管理所有内容，无需修改代码。",
        "",
        "🎨 主题定制",
        "	•	主题定制：支持 浅色/深色模式，以及玻璃风 (Liquid Glass) / 极简风 (Minimalist) 等主题切换。",
        "	•	自定义样式：支持用户自定义颜色、字体、布局等。",
        "",
        "🚀 一键部署",
        "	•	一键部署：支持 Vercel 部署，集成 GitHub 自动化流程，轻松上线。",
        "	•	CI/CD 集成：自动化构建、测试和部署流程。"
      ],
      architecture: `[Next.js Template System] → [Content Management Layer] → [Theme Engine] → [Vercel 部署]

模板层
   ├── Next.js (App Router) – 模板生成 & 静态化
   ├── TypeScript – 类型安全与高可维护性
   └── Tailwind CSS – 现代化 UI 设计 & 响应式布局

内容管理层
   ├── JSON 配置文件 – 静态内容管理
   ├── Markdown 支持 – 富文本内容
   └── Notion API – 动态内容集成

主题引擎
   ├── 浅色/深色模式 – 自动主题切换
   ├── 玻璃风主题 – Liquid Glass 设计
   └── 极简风主题 – Minimalist 设计

部署层
   ├── Vercel – 模板托管与一键部署
   ├── GitHub – 代码管理 & 开源协作
   └── 自研 Theme Engine – 支持多主题切换与定制`,
      techStack: {
        frontend: [
          "Next.js (App Router) – 模板生成 & 静态化",
          "Tailwind CSS – 现代化 UI 设计 & 响应式布局",
          "TypeScript – 类型安全与高可维护性"
        ],
        backend: [
          "（模板为静态站点，可扩展接入 Notion API / CMS 后端）"
        ],
        ai: [],
        devops: [
          "Vercel – 模板托管与一键部署",
          "GitHub – 代码管理 & 开源协作",
          "自研 Theme Engine – 支持多主题切换与定制"
        ]
      },
      highlights: [
        "模板系统设计：支持多版本快速复用，面向不同人群。",
        "用户体验优化：极简设计 + 响应式布局 + 动效支持。",
        "完善文档：提供清晰的使用说明，降低上手门槛。",
        "开源项目：可扩展、可复用，方便他人搭建个性化网站。"
      ],
      targetUsers: [
        "求职者：快速搭建专业个人作品集。",
        "研究人员：展示科研成果、论文与项目。",
        "开发者：需要轻量化、可扩展的个人网站模板。"
      ],
      summary: "Portfolio Website Template System 是一个集 模板化、主题化、可定制化 为一体的作品集网站解决方案，帮助用户在几分钟内完成部署。该项目不仅展示了我在 前端架构、UI 设计、模板系统构建 方面的能力，也体现了我对 用户体验与开源生态 的关注。"
    }
  },
  {
    id: 5,
    title: "AI Resume Analyzer",
    description: "AI-driven resume and job matching analysis platform integrating resume parsing, job matching, and customized cover letter generation, with built-in membership payment system, providing intelligent job search solutions for job seekers.",
    period: "2024.08 - 2024.12",
    image: "/talentsync/cover3.png",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "OpenAI GPT", "Gemini"],
    link: "https://ai-resume-analyzer.vercel.app",
    github: "https://github.com/songzhiyuan98/JobsAI",
    details: {
      overview: `AI Resume Analyzer 是一个集 简历解析、岗位匹配、定制化求职信生成 于一体的 AI 平台。
系统支持用户上传多格式简历（PDF/Word），自动解析并结构化提取信息，再结合 职位 JD 与多种主流大模型（GPT、Claude、Gemini 等），为用户提供：
	•	简历与岗位的匹配度评分
	•	简历优化建议
	•	个性化的求职信自动生成
	•	面试关注点预测

平台内置 会员付费系统 (Stripe)，支持基础版与高级版功能，面向准备求职的大学生与新毕业生，帮助提升简历与求职效率。`,
      features: [
        "🤖 简历智能解析",
        "	•	支持 PDF / Word / TXT 简历上传",
        "	•	使用 pdf-parse + 自研规则 + GPT 提取结构化数据（教育、技能、项目、实习）",
        "	•	高准确率解析（5K+ 简历实测，识别率接近 100%）",
        "",
        "📊 岗位智能匹配",
        "	•	粘贴 Job Description (JD)，系统自动提取关键技能与要求",
        "	•	调用 多模型（GPT / Claude / Gemini） 对比简历与 JD",
        "	•	输出 匹配分数 + 个性化反馈 + 优化建议",
        "	•	支持多轮任务链：",
        "	•	ATS 通过率预测",
        "	•	简历竞争力排名分析",
        "	•	HR 视角：是否会发面试邀请、改进表达建议",
        "	•	技术面试官视角：可能问题、技术深度评估",
        "",
        "📝 高效求职信生成",
        "	•	基于用户简历、目标岗位 JD 和自定义偏好，生成高质量定制求职信",
        "	•	支持 多模型切换（GPT / Claude / Gemini），满足不同效果与预算需求",
        "	•	上下文优化引擎：自动剪裁简历内容 + 提示压缩，节省约 70% token 消耗",
        "",
        "💳 会员与付费系统",
        "	•	集成 Stripe 订阅，支持多层级会员（免费 / Pro / Enterprise）",
        "	•	高级用户可使用更多 tokens、更高级别模型与批量分析功能",
        "	•	支持用户账户管理、订阅状态与账单查询"
      ],
      architecture: `[React + Tailwind 前端 (Netlify)]
   ├── Resume Upload / JD 粘贴 / 匹配报告可视化
   │
[Express.js Backend API]
   ├── Resume 解析 (pdf-parse + 规则引擎)
   ├── LLM Orchestrator (GPT / Claude / Gemini 调用)
   ├── Token 优化 & Context 管理
   ├── Stripe 支付与会员权限控制
   │
[MongoDB (Atlas)]
   ├── 用户信息 / 简历数据 / JD 分析结果 / 订阅状态
   │
[AI Models]
   ├── OpenAI GPT 系列  
   ├── Anthropic Claude  
   └── Google Gemini  
   │
[Infrastructure]
   ├── Vercel 前端部署  
   └── GitHub Actions CI/CD`,
      techStack: {
        frontend: [
          "React.js – 构建用户界面",
          "Tailwind CSS – 极简风格、响应式 UI",
          "Vercel – 前端托管"
        ],
        backend: [
          "Node.js + Express.js – API 服务",
          "pdf-parse – 简历解析",
          "JWT – 用户认证",
          "Stripe API – 支付与会员系统"
        ],
        ai: [
          "OpenAI GPT-4o – 简历解析、求职信生成、匹配分析",
          "Anthropic Claude – 多角度简历评估与面试问题预测",
          "Google Gemini – 高效生成补充性内容",
          "自研上下文优化引擎 – 控制 token 使用量，提升效率"
        ],
        devops: [
          "MongoDB Atlas – 用户、简历、JD 分析与订阅信息存储",
          "Netlify – 前端部署",
          "GitHub Actions – CI/CD 集成"
        ]
      },
      highlights: [
        "AI 多模型编排：支持 GPT / Claude / Gemini 灵活切换，提升输出多样性与效果。",
        "端到端自动化：从简历上传 → 解析 → 匹配分析 → 求职信生成，全流程自动完成。",
        "高效上下文引擎：智能裁剪 + 压缩，平均节省 70% token 成本。",
        "会员体系：接入 Stripe，支持订阅管理与高级功能付费模式。",
        "实用价值：已服务 2K+ 用户，5K+ 简历分析，验证可行性。"
      ],
      targetUsers: [
        "大学生 / 新毕业生：需要提升简历质量与求职成功率。",
        "在职转岗人士：快速分析不同岗位的匹配度。",
        "职业服务机构 / 招聘平台：批量化简历分析与反馈。"
      ],
      summary: "AI Resume Analyzer 不只是一个简历解析工具，而是一个完整的 求职效率平台：从 简历解析 → 岗位匹配 → 定制求职信 → 面试准备，再配合 会员订阅与多模型支持，帮助用户在求职过程中更快、更智能地提升竞争力。"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">
      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        </AnimatedText>

        <div className="space-y-12">
          {projects.map((project) => (
            <AnimatedText key={project.id}>
              <div className="
                pb-4 sm:pb-6 border-b border-black/10 dark:border-white/10
                space-y-4
              ">
                {/* 时间 */}
                <div className="text-sm text-foreground/60">
                  {project.period}
                </div>

                {/* 项目标题 */}
                <h2 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h2>

                {/* 项目描述 */}
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* 链接 */}
                <div className="flex gap-3 pt-2 text-sm font-normal text-foreground/60">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                  >
                    [View Project]
                  </a>
                  
                  {project.github && (
                    <>
                      <span className="mx-2">·</span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                      >
                        [Code]
                      </a>
                    </>
                  )}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}