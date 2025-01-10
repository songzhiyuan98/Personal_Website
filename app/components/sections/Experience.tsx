'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material'
import GradientBackground from '../common/GradientBackground'

type Experience = {
  id: number
  title: string
  company: string
  period: string
  logo: string
  skills: string[]
  description: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Labs Laboratory | Columbia University",
    period: "Dec 2024 – Present",
    logo: "/companyicon/labs.png",
    skills: ["JavaScript", "SVG", "CSS3", "Git"],
    description: "Developed an interactive anatomy visualization tool with precise localization for 15+ organs, improving research accessibility and user engagement."
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern & Technical Lead",
    company: "3CCA Church",
    period: "Dec 2024 – Present",
    logo: "/companyicon/3CCA.jpg",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    description: "Redesigned and redeveloped the 3CCA Church website, enhancing user experience and operational efficiency while optimizing website performance by 30%."
  }
];


export default function Experience() {
  return (
    <Container id="experience" maxWidth="xl" component="section">
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GradientBackground 
          sectionId="experience"
          gradientColors={{
            start: '#A78BFA',
            end: '#8B5CF6'
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-16 text-center relative z-10">Experience</h1>
        </AnimatedText>
        
        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
          {experiences.map((exp) => (
            <Grid item xs={12} md={6} key={exp.id}>
              <AnimatedText>
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: theme => theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.2)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    color: theme => theme.palette.mode === 'dark'
                      ? '#fff'
                      : '#000',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: theme => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(255, 255, 255, 0.2)'
                    }`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: theme => theme.palette.mode === 'dark'
                        ? 'rgba(0, 0, 0, 0.3)'
                        : 'rgba(255, 255, 255, 0.15)',
                      boxShadow: theme => theme.palette.mode === 'dark'
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1, sm: 2 },
                      mb: { xs: 2, sm: 3 }
                    }}>
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        style={{
                          objectFit: 'contain',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px'
                        }}
                      />
                      <div>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            mb: 0.5,
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            fontWeight: { xs: 500, sm: 600 }
                          }}
                        >
                          {exp.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            opacity: 0.7, 
                            fontWeight: 500,
                            fontSize: { xs: '0.875rem', sm: '1rem' }
                          }}
                        >
                          {exp.company}
                        </Typography>
                      </div>
                    </Box>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        opacity: 0.6, 
                        fontStyle: 'italic', 
                        mb: { xs: 1, sm: 2 },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}
                    >
                      {exp.period}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.8, 
                        mb: { xs: 2, sm: 3 }, 
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {exp.description}
                    </Typography>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="
                            px-3 py-1 text-sm rounded-full
                            bg-white/5 backdrop-blur-sm
                            border border-white/10
                            opacity-70
                            transition-colors
                            hover:bg-white/10
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
