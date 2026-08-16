import { useEffect, useState } from 'react'
import './styles/app.css'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Hero from './components/Hero.jsx'
import IconGrid from './components/IconGrid.jsx'
import Skills from './components/Skills.jsx'
import { portfolioData } from './data/portfolioData.js'

function ThemeIcon({ mode }) {
  if (mode === 'system') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="4.2" width="17.6" height="12.8" rx="2"></rect>
        <path d="M8.8 20.2h6.4"></path>
      </svg>
    )
  }

  if (mode === 'dark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.8 3.2a8.9 8.9 0 1 0 7 13.9 8 8 0 1 1-7-13.9z"></path>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2"></circle>
      <path d="M12 1.8v2.8M12 19.4v2.8M1.8 12h2.8M19.4 12h2.8M4.4 4.4l2 2M17.6 17.6l2 2M19.6 4.4l-2 2M6.4 17.6l-2 2"></path>
    </svg>
  )
}

export default function App() {
  const [themePreference, setThemePreference] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme-preference')
    return savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
      ? savedTheme
      : 'system'
  })

  useEffect(() => {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      const nextTheme =
        themePreference === 'system' ? (themeMediaQuery.matches ? 'dark' : 'light') : themePreference
      document.documentElement.setAttribute('data-theme', nextTheme)
    }

    applyTheme()
    themeMediaQuery.addEventListener('change', applyTheme)

    return () => {
      themeMediaQuery.removeEventListener('change', applyTheme)
    }
  }, [themePreference])

  const toggleTheme = () => {
    const modes = ['system', 'dark', 'light']
    const currentIndex = modes.indexOf(themePreference)
    const nextTheme = modes[(currentIndex + 1) % modes.length]
    setThemePreference(nextTheme)
    window.localStorage.setItem('theme-preference', nextTheme)
  }

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.reveal-section'))

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotionQuery.matches) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    sections.forEach((section) => revealObserver.observe(section))

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  return (
    <main className="page">
      <div className="parallax-accent parallax-accent-a" aria-hidden="true"></div>
      <div className="parallax-accent parallax-accent-b" aria-hidden="true"></div>
      <button
        type="button"
        className="theme-fab"
        onClick={toggleTheme}
        aria-label={`Theme mode: ${themePreference}. Click to cycle modes`}
      >
        <ThemeIcon mode={themePreference} />
      </button>

      <section id="about" className="page-section about-section reveal-section">
        <Hero
          name={portfolioData.name}
          subtitle={portfolioData.subtitle}
          location={portfolioData.location}
          intro={portfolioData.intro}
          contact={portfolioData.contact}
        />
      </section>

      <section id="technologies-skills" className="page-section reveal-section">
        <div className="tech-skills-flow">
          <IconGrid topTech={portfolioData.topTech} />
          <Skills skills={portfolioData.skills} />
        </div>
      </section>

      <section id="experience" className="page-section reveal-section">
        <Experience experience={portfolioData.experience} />
      </section>

      <section id="education" className="page-section reveal-section">
        <Education education={portfolioData.education} />
      </section>
    </main>
  )
}
