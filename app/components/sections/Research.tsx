'use client'  // 声明这是客户端组件

import AnimatedText from '../common/AnimatedText'  // 导入动画文本组件
import { Typography, Container, Box, Card, CardContent, Grid, Modal } from '@mui/material'  // 导入Material UI组件
import GradientBackground from '../common/GradientBackground'  // 导入渐变背景组件
import { useState } from 'react'  // 导入React状态钩子

type Publication = {  // 定义出版物类型
  id: number  // 唯一标识符
  title: string  // 标题
  authors: string  // 作者
  year: string  // 年份
  journal?: string  // 期刊名称(可选)
  type: 'publication' | 'working'  // 类型:已发表或在研
  pdf?: string  // PDF链接(可选)
  ssrn?: string  // SSRN链接(可选)
  description?: string  // 描述(可选)
  citations?: string[]  // 引用列表(可选)
  bulletPoints?: string[]  // 要点列表(可选)
}

const publications: Publication[] = [  // 出版物数据数组
  {
    id: 1,  // 第一篇论文
    title: "Cleaner Waters and Urbanization",
    authors: "with Jeremy West",
    year: "2023",
    journal: "Journal of Environmental Economics and Management, 122: 102874",
    type: "publication",
    pdf: "#",
    description: "中文介绍 (by E3M)"
  },
  {
    id: 2,  // 第二篇论文
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
    id: 3,  // 第三篇论文
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

export default function Research() {  // 研究部分组件
  const [modalOpen, setModalOpen] = useState(false)  // 模态框开关状态
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null)  // 选中的论文状态

  const handlePaperClick = (paper: Publication) => {  // 处理论文点击事件
    if (paper.bulletPoints) {  // 如果有要点列表
      setSelectedPaper(paper)  // 设置选中的论文
      setModalOpen(true)  // 打开模态框
    }
  }

  return (
    <Container id="research" maxWidth="xl" component="section">  {/* 研究部分容器 */}
      <Box sx={{  // 主要内容盒子
        minHeight: '100vh',  // 最小高度为视口高度
        display: 'flex',  // 弹性布局
        flexDirection: 'column',  // 纵向排列
        alignItems: 'center',  // 水平居中
        justifyContent: 'center',  // 垂直居中
        py: { xs: 4, md: 4 },  // 上下内边距
        px: { xs: 2, sm: 4, md: 8 },  // 左右内边距
        position: 'relative',  // 相对定位
        overflow: 'hidden',  // 溢出隐藏
      }}>
        <GradientBackground  // 渐变背景组件
          sectionId="research"
          gradientColors={{
            start: '#A78BFA',  // 起始颜色
            end: '#8B5CF6'  // 结束颜色
          }}
        />

        <AnimatedText>  {/* 动画标题 */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative z-10">Research</h1>
        </AnimatedText>

        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>  {/* 网格容器 */}
          {['publication', 'working'].map((type) => (  // 遍历论文类型
            <Grid item xs={12} key={type}>  {/* 网格项 */}
              <AnimatedText>  {/* 动画文本 */}
                <Typography variant="h2" sx={{  // 类型标题
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },  // 字体大小
                  fontWeight: 600,  // 字体粗细
                  mb: 4,  // 下边距
                  textTransform: 'capitalize'  // 首字母大写
                }}>
                  {type === 'working' ? 'Working Papers' : 'Publications'}  {/* 显示类型标题 */}
                </Typography>
              </AnimatedText>

              {publications  // 遍历论文
                .filter(paper => paper.type === type)  // 按类型筛选
                .map((paper) => (  // 映射到卡片组件
                  <AnimatedText key={paper.id}>  {/* 动画文本包装 */}
                    <Card  // 论文卡片
                      elevation={0}  // 无阴影
                      onClick={() => handlePaperClick(paper)}  // 点击处理
                      sx={{
                        mb: 3,  // 下边距
                        background: theme => theme.palette.mode === 'dark'  // 背景色
                          ? 'rgba(0, 0, 0, 0.2)' 
                          : 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',  // 背景模糊
                        borderRadius: 4,  // 圆角
                        border: theme => `1px solid ${  // 边框
                          theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(255, 255, 255, 0.2)'
                        }`,
                        transition: 'all 0.3s ease',  // 过渡效果
                        cursor: paper.bulletPoints ? 'pointer' : 'default',  // 鼠标样式
                        '&:hover': paper.bulletPoints ? {  // 悬停效果
                          transform: 'translateY(-4px)',  // 上移
                          background: theme => theme.palette.mode === 'dark'  // 背景色变化
                            ? 'rgba(0, 0, 0, 0.3)'
                            : 'rgba(255, 255, 255, 0.15)',
                        } : {}
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>  {/* 卡片内容 */}
                        <Typography variant="h6" sx={{ 
                          mb: 1,
                          fontSize: { xs: '1rem', sm: '1.125rem' },
                          fontWeight: 500,
                          display: 'flex',
                          gap: 1,
                          flexWrap: 'wrap',
                          alignItems: 'center'  // 添加垂直居中对齐
                        }}>
                          {paper.title}
                          {paper.authors && (
                            <span className="opacity-70">({paper.authors})</span>
                          )}
                          <span className="opacity-70">{paper.year}.</span>
                          {paper.pdf && (
                            <a 
                              href={paper.pdf} 
                              className="text-blue-400 hover:underline" 
                              onClick={e => e.stopPropagation()}
                            >
                              [PDF]
                            </a>
                          )}
                          {paper.ssrn && (
                            <a 
                              href={paper.ssrn} 
                              className="text-blue-400 hover:underline" 
                              onClick={e => e.stopPropagation()}
                            >
                              [SSRN]
                            </a>
                          )}
                        </Typography>

                        {paper.journal && (  // 期刊信息
                          <Typography sx={{ 
                            opacity: 0.8,  // 透明度
                            fontSize: { xs: '0.875rem', sm: '1rem' },  // 字体大小
                            fontStyle: 'italic'  // 斜体
                          }}>
                            {paper.journal}  {/* 显示期刊信息 */}
                          </Typography>
                        )}

                        {paper.description && (  // 论文描述
                          <Typography sx={{ 
                            mt: 2,  // 上边距
                            opacity: 0.7,  // 透明度
                            fontSize: { xs: '0.875rem', sm: '1rem' }  // 字体大小
                          }}>
                            {paper.description}  {/* 显示描述 */}
                          </Typography>
                        )}

                        {paper.citations && (  // 引用信息
                          <Box sx={{ mt: 2 }}>  {/* 引用容器 */}
                            <Typography sx={{ 
                              fontWeight: 500,  // 字体粗细
                              mb: 1,  // 下边距
                              fontSize: { xs: '0.875rem', sm: '1rem' }  // 字体大小
                            }}>
                              Cited by:  {/* 引用标题 */}
                            </Typography>
                            {paper.citations.map((citation, index) => (  // 遍历引用
                              <Typography key={index} sx={{ 
                                opacity: 0.7,  // 透明度
                                fontSize: { xs: '0.875rem', sm: '1rem' }  // 字体大小
                              }}>
                                {citation}  {/* 显示引用内容 */}
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedText>
                ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4 },
          bgcolor: 'transparent'
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)'  // 增加背景模糊效果
          }
        }}
      >
        <Card
          elevation={0}
          sx={{
            maxWidth: { xs: 600, md: 800 },
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            background: theme => theme.palette.mode === 'dark' 
              ? 'rgba(0, 0, 0, 0.2)' 
              : 'rgba(255, 255, 255, 0.1)',  // 降低亮度
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            border: theme => `1px solid ${
              theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'rgba(255, 255, 255, 0.2)'  // 降低边框亮度
            }`,
            transition: 'all 0.3s ease',
            boxShadow: theme => theme.palette.mode === 'dark'
              ? '0 20px 40px rgba(0, 0, 0, 0.2)'
              : '0 20px 40px rgba(0, 0, 0, 0.05)',
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>  {/* 增加内边距 */}
            <Typography variant="h5" sx={{ 
              mb: 4,  // 增加底部间距
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }  // 增加字体大小
            }}>
              {selectedPaper?.title}
            </Typography>
            <ul className="list-disc pl-6 space-y-3">  {/* 增加列表项间距 */}
              {selectedPaper?.bulletPoints?.map((point, index) => (
                <li key={index} className="text-base sm:text-lg opacity-80">  {/* 增加字体大小 */}
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Modal>
    </Container>
  )
} 