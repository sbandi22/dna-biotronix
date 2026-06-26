'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  phase: number
  phaseSpeed: number
}

interface ParticleBackgroundProps {
  count?: number
  maxDistance?: number
  particleColor?: string
  lineColor?: string
  speed?: number
  className?: string
}

export default function ParticleBackground({
  count,
  maxDistance = 140,
  particleColor = '0, 180, 255',
  lineColor = '0, 102, 255',
  speed = 0.25,
  className = '',
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const n = count ?? Math.min(120, Math.floor((canvas.width * canvas.height) / 9000))
      particlesRef.current = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.025 + 0.01,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pts = particlesRef.current
      const w = canvas.width
      const h = canvas.height

      pts.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.phase += p.phaseSpeed
        if (p.x < -5) p.x = w + 5
        if (p.x > w + 5) p.x = -5
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5

        const pulse = Math.sin(p.phase) * 0.25 + 0.75

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * pulse})`
        ctx.fill()

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const alpha = ((1 - dist / maxDistance) * 0.18 * pulse).toFixed(3)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      })

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
    }
  }, [count, maxDistance, particleColor, lineColor, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
