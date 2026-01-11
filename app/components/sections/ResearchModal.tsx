'use client'

import { useState, useEffect } from 'react'
import { X, ExternalLink, Calendar, FileText, Download } from 'lucide-react'

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

type ResearchModalProps = {
  paper: Publication | null
  onClose: () => void
}

export default function ResearchModal({ paper, onClose }: ResearchModalProps) {
  // 阻止背景页面滚动
  useEffect(() => {
    if (paper) {
      // 保存原始样式
      const originalStyle = window.getComputedStyle(document.body).overflow
      // 阻止背景滚动
      document.body.style.overflow = 'hidden'
      
      // 清理函数：恢复原始样式
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [paper])

  if (!paper) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-4xl max-h-[95vh] 
          bg-white dark:bg-black/5
          backdrop-blur-lg
          rounded-3xl shadow-2xl
          overflow-y-auto
          border border-gray-200/30 dark:border-white/30
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 - 研究标题和基本信息 */}
        <div className="relative p-8 border-b border-gray-200/50 dark:border-white/20">
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              p-2 rounded-full
              bg-white/20 backdrop-blur-sm
              hover:bg-white/30
              transition-colors duration-200
              z-10
            "
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* 研究标题 */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pr-12">
            {paper.title}
          </h2>

          {/* 基本信息 */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="font-medium">Authors:</span>
                <span>{paper.authors}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Year:</span>
                <span>{paper.year}</span>
              </div>
            </div>

            {paper.journal && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Journal:</span>
                <span className="ml-2 italic">{paper.journal}</span>
              </div>
            )}

            {paper.description && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Description:</span>
                <span className="ml-2">{paper.description}</span>
              </div>
            )}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-8 space-y-8">
          {/* 研究概述 */}
          {paper.overview && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Research Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.overview}
              </p>
            </section>
          )}

          {/* 研究背景 */}
          {paper.researchBackground && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Research Background
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.researchBackground}
              </p>
            </section>
          )}

          {/* 研究方法 */}
          {paper.methodology && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Methodology
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.methodology}
              </p>
            </section>
          )}

          {/* 核心发现 */}
          {paper.keyFindings && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Key Findings
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.keyFindings}
              </p>
            </section>
          )}

          {/* 我的贡献 */}
          {paper.myContribution && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                My Contribution
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.myContribution}
              </p>
            </section>
          )}

          {/* 研究意义 */}
          {paper.researchSignificance && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Research Significance
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                {paper.researchSignificance}
              </p>
            </section>
          )}


          {/* 引用信息 */}
          {paper.citations && paper.citations.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Citations
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paper.citations.map((citation, index) => (
                  <div key={index} className="mb-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-400 mr-2 font-bold">[{index + 1}]</span>
                    <span className="italic">{citation}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* 底部 - 链接和按钮 */}
        <div className="p-8 border-t border-gray-200/50 dark:border-white/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              {paper.pdf && (
                <a
                  href={paper.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    bg-gray-900 dark:bg-white
                    text-white dark:text-black
                    rounded-lg
                    text-sm font-medium
                    hover:bg-gray-800 dark:hover:bg-gray-100
                    transition-all duration-300
                    group/btn
                  "
                >
                  <Download className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Download PDF
                </a>
              )}
              
              {paper.ssrn && (
                <a
                  href={paper.ssrn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    border border-gray-300 dark:border-gray-600
                    text-gray-700 dark:text-gray-300
                    rounded-lg
                    text-sm font-medium
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-all duration-300
                    group/btn
                  "
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  View on SSRN
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}