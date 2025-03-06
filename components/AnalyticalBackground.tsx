"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface DataPoint {
  x: number
  y: number
  value: number
  speed: number
  initialValue: number
  maxY: number
}

const AnalyticalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let dataPoints: DataPoint[] = []
    const dataPointCount = Math.min(50, Math.floor((dimensions.width * dimensions.height) / 20000)) // Adjust point count based on screen size

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      setDimensions({ width, height })
    }

    const createDataPoint = (): DataPoint => {
      const initialValue = Math.floor(Math.random() * 900) + 100
      return {
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        value: initialValue,
        initialValue: initialValue,
        speed: Math.random() * 0.03 + 0.01, // Slightly reduced speed range
        maxY: dimensions.height + 20,
      }
    }

    const initDataPoints = () => {
      dataPoints = Array.from({ length: dataPointCount }, createDataPoint)
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(99, 102, 241, 0.1)"
      ctx.lineWidth = 1
      const step = 50
      for (let x = 0; x < dimensions.width; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, dimensions.height)
        ctx.stroke()
      }
      for (let y = 0; y < dimensions.height; y += step) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(dimensions.width, y)
        ctx.stroke()
      }
    }

    const drawDataPoint = (point: DataPoint) => {
      ctx.fillStyle = `rgba(99, 102, 241, 0.6)`
      ctx.beginPath()
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2) // Slightly smaller points
      ctx.fill()

      ctx.font = "10px Arial" // Slightly smaller font
      ctx.fillStyle = "rgba(99, 102, 241, 0.8)"
      ctx.fillText(Math.floor(point.value).toString(), point.x + 4, point.y - 4)

      point.y += point.speed
      const progress = point.y / point.maxY
      point.value = point.initialValue * (1 - progress)

      if (point.y > point.maxY) {
        Object.assign(point, createDataPoint())
        point.y = -20
      }
    }

    let lastTime = 0
    const fps = 30 // Limit FPS to reduce load

    const animate = (time: number) => {
      if (time - lastTime > 1000 / fps) {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height)
        drawGrid()
        dataPoints.forEach(drawDataPoint)
        lastTime = time
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      initDataPoints()
    }

    handleResize()
    animate(0)

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [dimensions])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

export default AnalyticalBackground

