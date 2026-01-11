'use client'

import AnimatedText from '../common/AnimatedText'

type Publication = {
  id: number
  title: string
  authors: string
  year: string
  journal?: string
  type: 'publication' | 'working'
  pdf?: string
  googleScholar?: string
  description?: string
  citations?: string[]
  bulletPoints?: string[]
  overview?: string
  publishDate?: string
  chartImage?: string
  researchBackground?: string
  methodology?: string
  keyFindings?: string
  myContribution?: string
  researchSignificance?: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Multi-organ MRI Digitizes Biological Aging Clocks Across Proteomics, Metabolomics, and Genetics",
    authors: "Z. Song, M. Duggan, et al.",
    year: "2024/2025",
    journal: "Nature Medicine",
    type: "publication",
    description: "Multi-organ MRI digitizes biological aging clocks: integrating proteomics, metabolomics, and genetics",
    overview: "本研究首次提出并验证了多器官磁共振成像生物学年龄模型(MRIBAGs)，系统性描绘了大脑、心脏、肝脏、肾脏、胰腺、脾脏、脂肪组织七个主要器官的衰老进程。通过UK Biobank大规模MRI队列(~30万人)，融合表型、临床诊断、遗传学、蛋白质组学、代谢组学等多模态数据，揭示了器官异步老化的重要性。",
    publishDate: "2024/2025年",
    chartImage: "/research/1.png",
    googleScholar: "https://www.nature.com/articles/s41591-025-03999-8",
    keyFindings: "不同器官的生物学年龄差异显著，一个人可能脑年轻但肝脏偏老。MRIBAG偏差与多种疾病风险高度相关，例如心脏偏老→心血管疾病风险更高，肝脏偏老→代谢综合征与糖尿病风险上升。发现了与器官老化相关的遗传变异、蛋白质和代谢物，为理解衰老的分子机制提供了证据。MRIBAG显著提高了对全因死亡率的预测能力，超过单纯的实际年龄或BMI。",
    researchBackground: "衰老是人类健康和疾病的重要风险因素，但不同器官的衰老速度差异巨大，且传统评估方法大多局限于单一维度（如血液学指标或表观遗传学时钟）。目前缺乏系统化的多器官生物学年龄测量工具。随着大规模影像队列(UK Biobank ~30万+ MRI数据)的开放，可以通过影像数据直接刻画不同器官的老化过程。",
    methodology: "使用机器学习模型（例如 Elastic Net, SVR, Gradient Boosting等）预测个体的器官生物学年龄。采用残差方法(ΔAge)表征个体真实年龄与预测年龄的差异。进行偏差校正，保证不同器官预测的稳健性。通过GWAS分析识别与器官老化相关的遗传位点，蛋白质组与代谢组分析揭示与MRIBAG偏差相关的生物标志物。",
    myContribution: "作为协作作者，主要负责研究门户网站开发。构建了交互式SVG器官地图：用户可点击器官进入详情页，查看该器官的MRIBAG统计与研究结果。开发了全局分析仪表盘(Analytics Dashboard)：基于D3.js，实现不同器官老化偏差与疾病风险的可视化展示。将复杂的MRI数据与统计结果转化为直观的交互式图表，方便研究团队内部展示与公众传播。与跨学科团队合作（影像学、流行病学、AI/机器学习），支撑了论文中的可视化展示与结果解读。",
    researchSignificance: "提出了多器官MRI生物学年龄模型(MRIBAGs)，为老龄化研究提供了新工具。揭示了器官异步老化的重要性，颠覆了统一衰老的传统观念。融合遗传学和多组学证据，为开发精准干预与抗衰老疗法提供了科学依据。为未来在健康管理、疾病预防、长寿研究等领域的应用奠定基础。"
  },
  {
    id: 2,
    title: "Sleep Chart of Biological Aging Clocks Across Organs and Omics",
    authors: "Z. Song, J. Wen, et al.",
    year: "2025",
    journal: "Nature (Under Review)",
    type: "working",
    description: "Sleep chart of biological aging clocks across organs and omics",
    overview: "本研究提出Sleep Chart概念，系统性分析了睡眠时长与多器官、多组学生物学衰老时钟(Biological Aging Clocks, BAGs)的关系。研究涵盖17个器官系统与3种组学类型（MRI影像学、蛋白质组学、代谢组学），利用UK Biobank (~50万人)等大规模队列数据。结果揭示睡眠时长与衰老呈现U型曲线关系（短睡与长睡均加速衰老），最佳睡眠区间约6–8小时，不同性别与器官存在差异。",
    publishDate: "2025年",
    googleScholar: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12363694/",
    chartImage: "/research/2.png",
    keyFindings: "异步老化：短/长睡眠加速多个器官老化，但模式不完全相同。疾病风险：短睡眠→心血管病、代谢综合征、抑郁风险显著上升；长睡眠→更显著关联神经精神类疾病与大脑老化。死亡率预测：短/长睡眠均提高全因死亡风险（HR约1.4–1.5）。机制差异：短睡主要通过代谢与免疫负担影响；长睡则通过器官老化作用。",
    researchBackground: "睡眠作为人类基本生理需求，与健康衰老密切相关。然而，睡眠时长对多器官、多组学生物学衰老的影响机制尚不明确。随着大规模队列数据的开放和生物衰老时钟技术的发展，为系统性研究睡眠与衰老的关系提供了新的机遇。",
    methodology: "多数据来源：UK Biobank (~50万), FinnGen (~50万), PGC, TriNetX (~9000万临床记录)。机器学习：构建23种BAGs，结合MRI、蛋白质组、代谢组学数据。广义加性模型(GAM)：分析睡眠时长与BAGs的非线性关系。GWAS与多组学分析：揭示短睡与长睡的遗传机制差异。生存分析：验证睡眠与多疾病风险及全因死亡率的联系。",
    myContribution: "Web Portal开发：构建Sleep Chart Portal，交互式展示不同睡眠时长与器官BAGs的关系。可视化实现：基于D3.js/React，开发多维图表，将复杂GWAS、代谢组与生存分析结果转化为直观交互式可视化。科研传播：支撑跨学科团队展示研究成果，提升科研透明度与可复用性。",
    researchSignificance: "首次大规模系统揭示睡眠时长对多器官、多组学衰老的影响。强化了睡眠作为可调控衰老因素的科学证据。推动精准睡眠医学(Precision Sleep Medicine)与健康老龄化干预策略的发展。"
  }
]

export default function Research() {
  return (
    <section id="research" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">

      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8 text-center">Research</h1>
        </AnimatedText>

        <div className="space-y-12">
          {['publication', 'working'].map((type) => (
            <div key={type} className="space-y-8">
              <AnimatedText>
                <h2 className="text-2xl font-semibold text-foreground">
                  {type === 'working' ? 'Working Papers' : 'Publications'}
                </h2>
              </AnimatedText>

              {publications
                .filter(paper => paper.type === type)
                .map((paper) => (
                  <AnimatedText key={paper.id}>
                    <div className="
                      pb-4 sm:pb-6 border-b border-black/10 dark:border-white/10
                      space-y-3
                    ">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {paper.title}
                      </p>
                      {/* 作者、年份、期刊和链接 - 合并到一行 */}
                      <div className="text-sm font-normal text-foreground/60">
                        {paper.authors && (
                          <span>{paper.authors}</span>
                        )}
                        <span className="ml-2">({paper.year})</span>
                        {paper.journal && (
                          <>
                            <span className="mx-2">·</span>
                            <span className="italic">{paper.journal}</span>
                          </>
                        )}
                        {(paper.pdf || paper.googleScholar) && (
                          <>
                            <span className="mx-2">·</span>
                            {paper.pdf && (
                              <>
                                <a 
                                  href={paper.pdf}
                                  className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  [PDF]
                                </a>
                                {paper.googleScholar && (
                                  <span className="mx-2">·</span>
                                )}
                              </>
                            )}
                            {paper.googleScholar && (
                              <a 
                                href={paper.googleScholar}
                                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                [Link]
                              </a>
                            )}
                          </>
                        )}
                      </div>
                      
                      {/* 描述 - 与项目描述样式一致 */}
                      {paper.description && (
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          {paper.description}
                        </p>
                      )}
                    </div>
                  </AnimatedText>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 