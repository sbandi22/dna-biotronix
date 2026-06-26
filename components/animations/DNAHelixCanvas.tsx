'use client'

import { useEffect, useRef } from 'react'

export default function DNAHelixCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)
      time += 0.012

      const cx = W / 2
      const totalPoints = 120
      const amplitude = Math.min(W * 0.28, 110)
      const verticalSpread = H * 0.85
      const yOffset = H * 0.075
      const turns = 3.5

      // Collect strand points
      const strand1: [number, number][] = []
      const strand2: [number, number][] = []
      for (let i = 0; i <= totalPoints; i++) {
        const t = i / totalPoints
        const angle = t * turns * Math.PI * 2 + time
        const y = yOffset + t * verticalSpread
        strand1.push([cx + Math.cos(angle) * amplitude, y])
        strand2.push([cx + Math.cos(angle + Math.PI) * amplitude, y])
      }

      // Draw base pair rungs
      const rungCount = Math.floor(totalPoints / 3.5)
      for (let r = 0; r <= rungCount; r++) {
        const t = r / rungCount
        const angle = t * turns * Math.PI * 2 + time
        const y = yOffset + t * verticalSpread
        const x1 = cx + Math.cos(angle) * amplitude
        const x2 = cx + Math.cos(angle + Math.PI) * amplitude

        const depth = Math.sin(angle) // -1 to 1 — simulates 3D depth
        const alpha = (depth * 0.3 + 0.35)

        const rungGrad = ctx.createLinearGradient(x1, y, x2, y)
        const colors = [
          ['255,107,107', '79,195,247'],
          ['129,199,132', '255,183,77'],
          ['79,195,247', '255,107,107'],
          ['255,183,77', '129,199,132'],
        ]
        const [c1, c2] = colors[r % 4]
        rungGrad.addColorStop(0, `rgba(${c1},${alpha})`)
        rungGrad.addColorStop(0.5, `rgba(255,255,255,${alpha * 0.7})`)
        rungGrad.addColorStop(1, `rgba(${c2},${alpha})`)

        ctx.beginPath()
        ctx.moveTo(x1, y)
        ctx.lineTo(x2, y)
        ctx.strokeStyle = rungGrad
        ctx.lineWidth = depth > 0 ? 2.2 : 1.2
        ctx.stroke()

        // Node spheres
        for (const [nx, ny] of [[x1, y], [x2, y]]) {
          const r2 = depth > 0 ? 4.5 : 3
          const nodeGrad = ctx.createRadialGradient(nx - r2 * 0.3, ny - r2 * 0.3, 0, nx, ny, r2)
          nodeGrad.addColorStop(0, `rgba(255,255,255,${alpha * 1.2})`)
          nodeGrad.addColorStop(1, `rgba(0,100,255,${alpha * 0.6})`)
          ctx.beginPath()
          ctx.arc(nx, ny, r2, 0, Math.PI * 2)
          ctx.fillStyle = nodeGrad
          ctx.fill()
        }
      }

      // Draw backbones
      const drawStrand = (pts: [number, number][], primary: boolean) => {
        if (pts.length < 2) return
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i][0], pts[i][1])
        }
        const grad = ctx.createLinearGradient(cx, yOffset, cx, yOffset + verticalSpread)
        if (primary) {
          grad.addColorStop(0, 'rgba(0,102,255,0.15)')
          grad.addColorStop(0.3, 'rgba(0,102,255,0.8)')
          grad.addColorStop(0.7, 'rgba(0,180,255,0.8)')
          grad.addColorStop(1, 'rgba(0,102,255,0.15)')
        } else {
          grad.addColorStop(0, 'rgba(0,180,255,0.15)')
          grad.addColorStop(0.3, 'rgba(0,180,255,0.8)')
          grad.addColorStop(0.7, 'rgba(0,102,255,0.8)')
          grad.addColorStop(1, 'rgba(0,180,255,0.15)')
        }
        ctx.strokeStyle = grad
        ctx.lineWidth = 2.5
        ctx.lineJoin = 'round'
        ctx.stroke()

        // Glow pass
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
        ctx.strokeStyle = primary ? 'rgba(0,102,255,0.18)' : 'rgba(0,180,255,0.18)'
        ctx.lineWidth = 8
        ctx.stroke()
      }

      drawStrand(strand1, true)
      drawStrand(strand2, false)

      // Floating glow orb at center
      const orbY = H / 2 + Math.sin(time * 0.7) * H * 0.04
      const orbGrad = ctx.createRadialGradient(cx, orbY, 0, cx, orbY, amplitude * 1.2)
      orbGrad.addColorStop(0, 'rgba(0,102,255,0.07)')
      orbGrad.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, orbY, amplitude * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = orbGrad
      ctx.fill()

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}
