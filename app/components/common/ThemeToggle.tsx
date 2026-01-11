'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun size={20} className="text-gray-900 dark:text-white" />
      ) : (
        <Moon size={20} className="text-gray-900 dark:text-white" />
      )}
    </motion.button>
  )
}
