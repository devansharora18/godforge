import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const s = localStorage.getItem('gf-theme')
      if (s === 'dark' || s === 'light') return s
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch { return 'light' }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('gf-theme', theme) } catch {}
  }, [theme])

  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}

export function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
      title={`${next[0].toUpperCase()}${next.slice(1)} mode`}
      className="grid h-9 w-9 place-items-center border border-rule text-soft transition-colors hover:border-ink hover:text-ink"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
