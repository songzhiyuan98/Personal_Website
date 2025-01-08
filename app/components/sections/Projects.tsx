'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material'
import GradientBackground from '../common/GradientBackground'

type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AnimeHub",
    description: "A full-stack anime streaming platform with real-time chat and recommendation system",
    period: "2023.09 - 2023.12",
    image: "/animehub/1.png",
    skills: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/songzhiyuan98/animehub"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Material-UI",
    period: "2024.01 - Present",
    image: "/personalwebiste/1.png",
    skills: ["Next.js", "TypeScript", "Material-UI", "Tailwind"],
    link: "https://github.com/songzhiyuan98/portfolio"
  }
]

export default function Projects() {
  return (
    <Container id="projects" maxWidth="xl" component="section">
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 4 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F472B6',
            end: '#EC4899'
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">Projects</h1>
        </AnimatedText>
        
        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <AnimatedText>
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: theme => theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.2)' 
                      : 'rgba(255, 255, 255, 0.1)',
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
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </Box>

                    <Typography variant="h5" sx={{ 
                      mb: 1, 
                      fontWeight: 600,
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' }
                    }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ 
                      opacity: 0.6, 
                      fontStyle: 'italic', 
                      mb: 2,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}>
                      {project.period}
                    </Typography>

                    <Typography variant="body1" sx={{ 
                      opacity: 0.8, 
                      mb: 3, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      {project.description}
                    </Typography>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="
                            px-3 py-1 
                            text-xs sm:text-sm
                            rounded-full
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