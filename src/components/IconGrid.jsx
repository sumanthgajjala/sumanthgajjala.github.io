import { useEffect, useRef, useState } from 'react'

export default function IconGrid({ topTech }) {
  const loopedTech = [...topTech, ...topTech]
  const scrollerRef = useRef(null)
  const pauseTimeoutRef = useRef(null)
  const isAutoPausedRef = useRef(false)
  const [isAutoPaused, setIsAutoPaused] = useState(false)

  const normalizeScroll = (container) => {
    const loopHeight = container.scrollHeight / 2
    if (container.scrollTop >= loopHeight) {
      container.scrollTop -= loopHeight
    } else if (container.scrollTop < 0) {
      container.scrollTop += loopHeight
    }
  }

  const temporarilyPause = () => {
    setIsAutoPaused(true)
    window.clearTimeout(pauseTimeoutRef.current)
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPaused(false)
    }, 1800)
  }

  const handleKeyDown = (event) => {
    const container = scrollerRef.current
    if (!container) {
      return
    }

    const keyToDelta = {
      ArrowDown: 60,
      ArrowUp: -60,
      PageDown: 180,
      PageUp: -180
    }

    const delta = keyToDelta[event.key]
    if (!delta) {
      return
    }

    event.preventDefault()
    container.scrollTop += delta
    normalizeScroll(container)
    temporarilyPause()
  }

  useEffect(() => {
    isAutoPausedRef.current = isAutoPaused
  }, [isAutoPaused])

  useEffect(() => {
    const container = scrollerRef.current
    if (!container) {
      return undefined
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotionQuery.matches) {
      setIsAutoPaused(true)
      return undefined
    }

    let animationFrameId = 0
    const tick = () => {
      if (!isAutoPausedRef.current) {
        container.scrollTop += 0.35
        normalizeScroll(container)
      }
      animationFrameId = window.requestAnimationFrame(tick)
    }

    animationFrameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [topTech.length])

  useEffect(
    () => () => {
      window.clearTimeout(pauseTimeoutRef.current)
    },
    []
  )

  return (
    <section className="section-block technologies-section">
      <h2>Main Technologies</h2>
      <div
        className="tech-wheel-mask"
        aria-label="Animated technologies list"
        onPointerDown={temporarilyPause}
        onTouchStart={temporarilyPause}
      >
        <div
          ref={scrollerRef}
          className="tech-wheel-track"
          tabIndex={0}
          onWheel={temporarilyPause}
          onScroll={(event) => normalizeScroll(event.currentTarget)}
          onKeyDown={handleKeyDown}
        >
          {loopedTech.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="wheel-item" title={tech.name}>
              <i className={tech.iconClass} aria-hidden="true"></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
