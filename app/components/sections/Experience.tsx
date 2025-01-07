'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Stack, Chip, Button } from '@mui/material'

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
    title: "Web Development Intern",
    company: "Labs Laboratory | Columbia University", 
    period: "2024.12 - 2025.01",
    logo: "/companyicon/labs.png",
    skills: ["React", "TypeScript", "Node.js"],
    description: "Enhanced human anatomy visualization tools and improved user interface"
  },
  {
    id: 2,
    title: "Software Development Engineer Intern",
    company: "Amazon",
    period: "2023.06 - 2023.09", 
    logo: "/companyicon/3CCA.jpg",
    skills: ["React", "TypeScript", "AWS", "Node.js"],
    description: "开发并维护了企业级Web应用，优化性能提升30%"
  }
]

export default function Experience() {
  return (
    <Container id="experience" maxWidth="md" component="section">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        p: 4,
      }}>
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
        </AnimatedText>
        
        <Stack spacing={4} width="100%" maxWidth="600px" alignItems="center">
          {experiences.map((exp) => (
            <AnimatedText key={exp.id} className="w-full">
              <Card 
                elevation={0}
                sx={{
                  bgcolor: 'transparent',
                  width: '100%',
                  '& .MuiCardContent-root': {
                    px: 0
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box 
                      sx={{ 
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: 'grey.100',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Image 
                        src={exp.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Typography variant="h6" component="h2" fontWeight="bold">
                      {exp.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.period}
                    </Typography>
                  </Box>

                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ mb: 2 }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}
