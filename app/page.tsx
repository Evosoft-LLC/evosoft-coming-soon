'use client'

import { useEffect, useState, useMemo, useCallback, memo } from 'react'
import styles from './page.module.css'

// Matrix-style code rain characters (C# themed)
const CODE_CHARS = [
  '0', '1', '{', '}', '[', ']', '(', ')', ';',
  'public', 'private', 'class', 'interface', 
  'async', 'await', 'Task', 'void', 'string', 
  'int', 'var', 'new', 'using', 'namespace'
] as const

// Seeded random for consistent SSR/client rendering
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

interface MatrixColumnData {
  id: number
  left: string
  delay: number
  opacity: number
  chars: string[]
}

const MatrixColumn = memo(function MatrixColumn({ 
  data 
}: { 
  data: MatrixColumnData 
}) {
  return (
    <div
      className={styles.matrixColumn}
      style={{
        left: data.left,
        animationDelay: `${data.delay}s`,
        opacity: data.opacity,
      }}
    >
      {data.chars.map((char, j) => (
        <span key={j} style={{ animationDelay: `${j * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  )
})

function MatrixRain() {
  const [columnCount, setColumnCount] = useState(0)

  useEffect(() => {
    const updateColumns = () => {
      // Limit columns for better performance (max 40 columns)
      const maxColumns = Math.min(Math.floor(window.innerWidth / 40), 40)
      setColumnCount(maxColumns)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // Generate stable column data based on index (not random during render)
  const columns = useMemo((): MatrixColumnData[] => {
    return Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      left: `${(i / Math.max(columnCount, 1)) * 100}%`,
      delay: seededRandom(i * 7) * 10,
      opacity: seededRandom(i * 13) * 0.3 + 0.1,
      // Reduced from 30 to 15 characters per column for performance
      chars: Array.from({ length: 15 }, (_, j) => 
        CODE_CHARS[Math.floor(seededRandom(i * 100 + j) * CODE_CHARS.length)]
      ),
    }))
  }, [columnCount])

  if (columnCount === 0) return null

  return (
    <div className={styles.matrixContainer} aria-hidden="true">
      {columns.map((col) => (
        <MatrixColumn key={col.id} data={col} />
      ))}
    </div>
  )
}

const CircuitPattern = memo(function CircuitPattern() {
  return (
    <svg 
      className={styles.circuitPattern} 
      viewBox="0 0 200 200" 
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary-orange)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--forest-green)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Horizontal lines */}
      <path d="M0 50 H80 L90 60 H200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      <path d="M0 100 H40 L50 90 H120 L130 100 H200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      <path d="M0 150 H60 L70 140 H200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      {/* Vertical lines */}
      <path d="M50 0 V40 L60 50 V200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      <path d="M100 0 V80 L110 90 V200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      <path d="M150 0 V60 L140 70 V200" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
      {/* Nodes */}
      <circle cx="50" cy="50" r="4" fill="var(--primary-orange)" opacity="0.5" />
      <circle cx="100" cy="100" r="4" fill="var(--forest-green)" opacity="0.6" />
      <circle cx="150" cy="70" r="4" fill="var(--primary-orange)" opacity="0.5" />
      <circle cx="130" cy="100" r="3" fill="var(--forest-green)" opacity="0.5" />
    </svg>
  )
})

const Logo = memo(function Logo() {
  return (
    <svg 
      className={styles.logo} 
      viewBox="0 0 324 324" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Evosoft LLC Logo"
    >
      <title>Evosoft LLC</title>
      <circle 
        className={styles.logoRing} 
        cx="162" 
        cy="161.5" 
        r="144.58" 
        stroke="var(--primary-orange)" 
        strokeWidth="9.5" 
        fill="none"
      />
      <g className={styles.logoE}>
        <path 
          d="M249.19,176.08c-4.37,4.37-4.37,11.48,0,15.85s11.48,4.37,15.85,0c4.37-4.37,4.37-11.48,0-15.85C260.68,171.71,253.56,171.71,249.19,176.08z" 
          fill="var(--primary-orange)"
        />
        <path 
          d="M192.35,151.46c4.37-4.37,4.37-11.48,0-15.85s-11.48-4.37-15.85,0c-4.37,4.37-4.37,11.48,0,15.85S187.98,155.84,192.35,151.46z" 
          fill="var(--primary-orange)"
        />
        <path 
          d="M151.18,78.06c4.37-4.37,4.37-11.48,0-15.85s-11.48-4.37-15.85,0c-4.37,4.37-4.37,11.48,0,15.85S146.81,82.43,151.18,78.06z" 
          fill="var(--primary-orange)"
        />
        <path 
          d="M162,27.51C88,27.51,28.01,87.5,28.01,161.5S88,295.49,162,295.49S295.99,235.5,295.99,161.5S236,27.51,162,27.51z M249.74,203.86l-70.14,70.14L52.95,147.36l70.29-70.29c-2.56-7.43-0.9-16.01,5.02-21.93c8.27-8.27,21.73-8.27,30,0c8.27,8.27,8.27,21.73,0,30c-6.21,6.21-15.34,7.76-23.01,4.64l-56.51,56.51l45.31,45.31l40.56-40.56c-2.84-7.56-1.25-16.42,4.82-22.49c8.27-8.27,21.73-8.27,30,0c8.27,8.27,8.27,21.73,0,30c-6.06,6.06-14.9,7.66-22.45,4.84l-40.58,40.58l44.28,44.28l56.65-56.65c-2.88-7.57-1.29-16.48,4.8-22.57c8.27-8.27,21.73-8.27,30,0c8.27,8.27,8.27,21.73,0,30C266.08,205.04,257.27,206.65,249.74,203.86z" 
          fill="var(--primary-orange)"
        />
      </g>
    </svg>
  )
})

const EXPERTISE_AREAS = ['Desktop', 'Mobile', 'Enterprise', 'Systems'] as const

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className={styles.main}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        {mounted && <MatrixRain />}
        <CircuitPattern />
        <div className={styles.glowOrb1} aria-hidden="true" />
        <div className={styles.glowOrb2} aria-hidden="true" />
        <div className={styles.gridOverlay} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <header className={styles.header}>
          <Logo />
        </header>

        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Software Engineering Consulting</span>
            </div>

            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLine}>Building</span>
              <span className={styles.titleLine}>
                <span className={styles.highlight}>Tomorrow&apos;s</span>
              </span>
              <span className={styles.titleLine}>Solutions</span>
            </h1>

            <p className={styles.subtitle}>
              Expert software engineering consulting services.
              We transform complex challenges into elegant, scalable solutions.
            </p>

            <div className={styles.comingSoon}>
              <div className={styles.comingSoonBox}>
                <span className={styles.comingSoonLabel}>Status</span>
                <div className={styles.comingSoonText} role="status" aria-live="polite">
                  <span className={styles.cursor} aria-hidden="true">&gt;</span>
                  <span className={styles.typing}>Coming Soon</span>
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <span className={styles.techLabel} id="expertise-label">Expertise</span>
              <div 
                className={styles.techTags} 
                role="list" 
                aria-labelledby="expertise-label"
              >
                {EXPERTISE_AREAS.map((area) => (
                  <span key={area} className={styles.techTag} role="listitem">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Evosoft LLC. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
