'use client'

import AnimatedText from '../common/AnimatedText'

type Experience = {
  id: number
  title: string
  company: string
  period: string
  overview?: string
  link?: string
  details?: {
    overview: string
    responsibilities: string[]
    achievements: string[]
    skills: string[]
    keyProjects?: string[]
    impact?: string[]
  }
}

const experiences: Experience[] = [
  {
    id: 4,
    title: "Undergraduate Research Assistant",
    company: "AI & Biomedical Science Lab | Columbia University",
    period: "Dec 2024 – Present",
    overview: "Engineered research-grade biomedical AI platforms and visualization tools at Columbia University, enabling multi-organ MRI research and aging-related studies.",
    link: "https://labs-laboratory.com/",
    details: {
      overview: "在哥伦比亚大学 AI & 生物医学科学实验室担任 Web 开发实习生，主导开发了一个专注于医学数据可视化的公共知识门户。通过构建交互式解剖 SVG 系统和全球数据访问地图，为医学研究提供了直观的数据展示平台。",
      responsibilities: [
        "主导开发医学数据可视化公共知识门户，提升研究数据的可访问性",
        "构建交互式解剖 SVG 系统，使用 D3.js 和 TopoJSON 实现复杂数据可视化",
        "设计轻量级后端架构，使用 Netlify Functions 和 MongoDB 实现安全数据交付",
        "实现统计跟踪功能，为研究团队提供数据使用分析",
        "与跨学科团队协作，确保技术方案符合医学研究需求"
      ],
      achievements: [
        "研究成果被 Nature Aging 期刊收录，技术贡献获得学术认可",
        "成功构建了支持复杂医学数据可视化的完整技术栈",
        "实现了 99.9% 的系统可用性，确保研究数据的稳定访问",
        "优化了数据加载性能，将页面加载时间减少 60%"
      ],
      skills: ["D3.js", "TopoJSON", "React", "Node.js", "MongoDB", "Netlify Functions", "SVG", "数据可视化", "医学研究"],
      keyProjects: [
        "交互式解剖 SVG 系统开发",
        "全球医学数据访问地图构建",
        "安全数据集交付平台设计",
        "统计跟踪与分析系统实现"
      ],
      impact: [
        "为医学研究社区提供了直观的数据可视化工具",
        "提升了研究数据的可访问性和使用效率",
        "支持了多项重要的医学研究项目",
        "研究成果获得了国际学术期刊的认可"
      ]
    }
  },
  {
    id: 5,
    title: "Full-Stack Developer Intern",
    company: "3CCA Church",
    period: "Dec 2024 – Present",
    overview: "Led team in refactoring and developing the church's official website using React, Node.js, MongoDB, and AWS, significantly improving performance and user experience.",
    link: "https://3cca.org/",
    details: {
      overview: "在 3CCA 教会担任全栈开发实习生和技术负责人，主导团队重构和开发教会官方网站。通过构建现代化的前后端架构，显著提升了网站性能和用户体验。",
      responsibilities: [
        "担任技术负责人，指导团队进行网站重构和现代化改造",
        "设计并实现基于 React 和 Node.js 的现代化前后端架构",
        "使用 MongoDB 实现高效的数据管理和存储方案",
        "通过 AWS 云服务部署应用，确保高可用性和可扩展性",
        "优化网站性能，提升用户体验和访问速度",
        "建立代码规范和开发流程，提升团队开发效率"
      ],
      achievements: [
        "成功将网站性能提升 70%，显著改善用户体验",
        "建立了完整的 CI/CD 流程，实现自动化部署",
        "实现了 99.5% 的网站可用性，确保服务的稳定性",
        "团队开发效率提升 40%，代码质量显著改善"
      ],
      skills: ["React", "Node.js", "MongoDB", "AWS", "JavaScript", "HTML/CSS", "Git", "CI/CD", "团队管理"],
      keyProjects: [
        "教会官方网站重构项目",
        "现代化前后端架构设计",
        "数据管理系统开发",
        "AWS 云服务部署方案实施"
      ],
      impact: [
        "为教会社区提供了更优质的在线服务体验",
        "建立了可扩展的技术架构，支持未来业务增长",
        "提升了团队的技术能力和协作效率",
        "为教会数字化转型提供了技术支撑"
      ]
    }
  },
  {
    id: 6,
    title: "Co-Founder & Full-Stack Developer",
    company: "Loop Interview AI Platform",
    period: "Jan 2025 – May 2025",
    overview: "Co-founded and developed Loop Interview, an AI-driven interview platform integrating ElevenLabs, Google Gemini API, 3D simulation, and intelligent analytics, serving 10K+ users with 95% accuracy.",
    link: "https://www.loopinterview.com",
    details: {
      overview: "联合创立并开发了 Loop Interview，一个革命性的 AI 驱动面试平台，旨在彻底改变传统招聘流程。构建了集成 ElevenLabs 语音合成、Google Gemini API、3D 面试模拟和智能评估分析的完整系统，服务 10K+ 用户，准确率达 95%。",
      responsibilities: [
        "联合创立 6 人初创团队，负责产品架构设计和技术选型",
        "开发沉浸式 3D 面试官系统，集成 Three.js 和 WebRTC 技术",
        "集成 ElevenLabs 语音合成 API，实现 15 种语言的自然语音交互",
        "深度集成 Google Gemini API，开发智能问题生成和答案分析系统",
        "构建系统性反馈分析模块，实现 8 个维度的全方位能力评估",
        "设计并实现付费会员积分系统，支持多层级会员体系和个性化服务",
        "集成北美大厂题库系统，提供 Google、Meta、Amazon 等权威面试内容"
      ],
      achievements: [
        "成功上线产品，获得 10K+ 用户，完成 50K+ 次面试",
        "实现 95% 的评估准确率，获得 4.9/5 用户满意度",
        "构建了支持 15 种语言、响应时间 <100ms 的实时交互系统",
        "建立了包含 50+ 公司、10K+ 题目的权威面试题库",
        "实现了 85% 的用户留存率和 4.8/5 的会员满意度"
      ],
      skills: ["React", "TypeScript", "Three.js", "Node.js", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "AWS", "ElevenLabs API", "Google Gemini API", "WebRTC", "AI/ML"],
      keyProjects: [
        "3D 面试官模拟系统开发",
        "AI 语音合成与实时交互系统",
        "智能评估与反馈分析平台",
        "大厂题库集成与管理系统",
        "会员积分与个性化推荐系统",
        "多语言支持与国际化方案"
      ],
      impact: [
        "为招聘行业提供了革命性的 AI 面试解决方案",
        "大幅降低了企业招聘成本，提升了面试效率",
        "为求职者提供了公平、客观的面试评估体验",
        "推动了 AI 技术在人力资源领域的创新应用",
        "建立了可扩展的 SaaS 商业模式，实现持续增长"
      ]
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">
      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
        </AnimatedText>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <AnimatedText key={experience.id}>
              <div className="
                pb-4 sm:pb-6 border-b border-black/10 dark:border-white/10
                space-y-3
              ">
                {/* 时间 */}
                <div className="text-sm text-foreground/60">
                  {experience.period}
                </div>

                {/* 职位标题 */}
                <h2 className="text-xl font-semibold text-foreground">
                  {experience.title}
                </h2>

                {/* 公司名称 */}
                <div className="text-base font-normal text-foreground/70">
                  {experience.company}
                </div>

                {/* 描述 */}
                {experience.overview && (
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {experience.overview}
                  </p>
                )}

                {/* 链接 */}
                {experience.link && (
                  <div className="text-sm font-normal text-foreground/60">
                    <a
                      href={experience.link}
                      className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View Website]
                    </a>
                  </div>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}