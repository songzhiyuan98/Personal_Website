'use client'

import AnimatedText from '../common/AnimatedText'
import ResearchModal from './ResearchModal'
import { useState } from 'react'

type Publication = {
  id: number
  title: string
  authors: string
  year: string
  journal?: string
  type: 'publication' | 'working'
  pdf?: string
  ssrn?: string
  description?: string
  citations?: string[]
  bulletPoints?: string[]
  overview?: string
  publishDate?: string
  chartImage?: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Cleaner Waters and Urbanization",
    authors: "with Jeremy West",
    year: "2023",
    journal: "Journal of Environmental Economics and Management, 122: 102874",
    type: "publication",
    pdf: "https://labs-laboratory.com/medicine/",
    ssrn: "https://labs-laboratory.com/medicine/",
    description: "中文介绍 (by E3M)",
    overview: "这是论文的详细介绍...",
    publishDate: "2023年12月",
    chartImage: "/research/1.png"
  },
  {
    id: 2,
    title: "Donations make people happier: Evidence from the Wenchuan earthquake",
    authors: "with Maoliang Ye",
    year: "2017",
    journal: "Social Indicators Research, 132(1): 517-536",
    type: "publication",
    ssrn: "#",
    citations: [
      "Helliwell, John F., Haifang Huang, and Shun Wang. \"The Social Foundations of World Happiness.\" World Happiness Report 2017: 8."
    ]
  },
  {
    id: 3,
    title: "Permission to Build: Climate Risk and Property Tax Revenue",
    authors: "",
    year: "2024",
    type: "working",
    pdf: "#",
    bulletPoints: [
      "First bullet point about the paper",
      "Second bullet point about methodology", 
      "Third bullet point about findings"
    ]
  }
]

export default function Research() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null)

  const handleOpenModal = (paper: Publication) => {
    setSelectedPaper(paper)
    setModalOpen(true)
  }

  return (
    <section id="research" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">

      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Research
          </h1>
        </AnimatedText>

        <div className="space-y-16">
          {['publication', 'working'].map((type) => (
            <div key={type} className="space-y-8">
              <AnimatedText>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {type === 'working' ? 'Working Papers' : 'Publications'}
                </h2>
              </AnimatedText>

              {publications
                .filter(paper => paper.type === type)
                .map((paper) => (
                  <AnimatedText key={paper.id}>
                    <div className="
                      flex flex-col sm:flex-row sm:items-center sm:justify-between
                      pb-6 border-b border-black/10 dark:border-white/10
                    ">
                      <div className="space-y-2 sm:space-y-0">
                        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg">
                          <span className="font-medium">{paper.title}</span>
                          {paper.authors && (
                            <span className="opacity-70">({paper.authors})</span>
                          )}
                          <span className="opacity-70">{paper.year}.</span>
                          {paper.pdf && (
                            <a 
                              href={paper.pdf}
                              className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              [PDF]
                            </a>
                          )}
                          {paper.ssrn && (
                            <a 
                              href={paper.ssrn}
                              className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              [SSRN]
                            </a>
                          )}
                        </div>

                        {paper.journal && (
                          <p className="opacity-80 text-xs sm:text-base italic">
                            {paper.journal}
                          </p>
                        )}

                        {paper.description && (
                          <p className="opacity-70 text-xs sm:text-base">
                            {paper.description}
                          </p>
                        )}

                        {paper.bulletPoints && (
                          <ul className="list-disc list-inside opacity-70 text-xs sm:text-base pl-1 space-y-1">
                            {paper.bulletPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      <button
                        onClick={() => handleOpenModal(paper)}
                        className="
                          rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
                          transition-all flex items-center justify-center 
                          hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
                          hover:border-transparent 
                          hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                          dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                          h-9 sm:h-10                                   
                          px-4                                   
                          text-sm
                          whitespace-nowrap                    
                          min-w-[120px] sm:min-w-[140px]      
                          mt-4 sm:mt-0 sm:ml-6                        
                          flex-shrink-0
                          group                               
                        "
                      >
                        <span className="
                          mr-2
                          group-hover:translate-x-0.5
                          transition-transform duration-300
                        ">
                          查看详情
                        </span>
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="
                            group-hover:translate-x-0.5
                            transition-transform duration-300
                            stroke-black dark:stroke-white
                          "
                        >
                          <path 
                            d="M3 8H13M13 8L8 3M13 8L8 13" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </AnimatedText>
                ))}
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedPaper && (
        <ResearchModal
          paper={selectedPaper}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  )
} 