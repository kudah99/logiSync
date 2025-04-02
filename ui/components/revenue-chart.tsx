"use client"

import { useEffect, useRef } from "react"

export default function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data for the chart
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const revenue = [30000, 35000, 32000, 37000, 42000, 43000, 50000, 48000, 52000, 54000, 58000, 65000]
    const expenses = [25000, 27000, 26000, 29000, 30000, 32000, 35000, 34000, 36000, 38000, 40000, 42000]

    // Chart configuration
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const maxValue = Math.max(...revenue, ...expenses) * 1.1
    const barWidth = chartWidth / months.length / 3
    const barSpacing = barWidth / 2

    // Draw background
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#e5e7eb"
    ctx.stroke()

    // Draw horizontal grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.font = "10px sans-serif"
    ctx.fillStyle = "#6b7280"

    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      const value = Math.round(maxValue - (maxValue / gridLines) * i)

      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.strokeStyle = "#f3f4f6"
      ctx.stroke()

      ctx.fillText(formatCurrency(value), padding - 5, y)
    }

    // Draw bars and labels
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    months.forEach((month, i) => {
      const x = padding + (chartWidth / months.length) * i + chartWidth / months.length / 2

      // Draw month label
      ctx.fillStyle = "#6b7280"
      ctx.fillText(month, x, canvas.height - padding + 10)

      // Draw revenue bar
      const revenueHeight = (revenue[i] / maxValue) * chartHeight
      const revenueX = x - barWidth - barSpacing / 2
      const revenueY = canvas.height - padding - revenueHeight

      ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
      ctx.fillRect(revenueX, revenueY, barWidth, revenueHeight)

      // Draw expenses bar
      const expensesHeight = (expenses[i] / maxValue) * chartHeight
      const expensesX = x + barSpacing / 2
      const expensesY = canvas.height - padding - expensesHeight

      ctx.fillStyle = "rgba(239, 68, 68, 0.8)"
      ctx.fillRect(expensesX, expensesY, barWidth, expensesHeight)
    })

    // Draw legend
    const legendX = canvas.width - padding - 150
    const legendY = padding + 20

    // Revenue legend
    ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
    ctx.fillRect(legendX, legendY, 15, 15)
    ctx.fillStyle = "#374151"
    ctx.textAlign = "left"
    ctx.fillText("Revenue", legendX + 25, legendY + 7)

    // Expenses legend
    ctx.fillStyle = "rgba(239, 68, 68, 0.8)"
    ctx.fillRect(legendX, legendY + 25, 15, 15)
    ctx.fillStyle = "#374151"
    ctx.fillText("Expenses", legendX + 25, legendY + 32)

    function formatCurrency(value: number): string {
      if (value >= 1000) {
        return `$${(value / 1000).toFixed(0)}k`
      }
      return `$${value}`
    }
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

