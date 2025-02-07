<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import p5 from 'p5'

interface Point {
  x: number
  y: number
  thickness: number
  alpha: number
  angle: number
}

let sketch: p5

const points: Point[] = []
const maxPoints = 400
const margin = 50
let currentAngle = 0
let targetX = 0
let targetY = 0

function initSketch(p: p5) {
  sketch = p

  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.parent('hand-drawn-container')
    p.stroke(255)
    p.noFill()
    p.background(0)

    // 初始点位在右边1/3区域
    targetX = (p.width * 2) / 3 + margin
    targetY = margin
    points.push({
      x: targetX,
      y: targetY,
      thickness: p.random(1.5, 2.5),
      alpha: p.random(180, 220),
      angle: 0,
    })
  }

  p.draw = () => {
    p.background(0, 15)

    // 计算新的目标点
    if (p.frameCount % 2 === 0) {
      const noiseScale = 0.03
      const noise = p.noise(targetX * noiseScale, targetY * noiseScale, p.frameCount * 0.02)
      currentAngle += p.map(noise, 0, 1, -0.3, 0.3)

      // 确保线条沿着边缘移动
      const speed = p.random(0.8, 2.0)
      targetX += p.cos(currentAngle) * speed
      targetY += p.sin(currentAngle) * speed

      // 限制在右边1/3区域内移动
      const leftBoundary = (p.width * 2) / 3
      if (targetX < leftBoundary || targetX > p.width - margin) {
        currentAngle = p.PI - currentAngle
        targetX = p.constrain(targetX, leftBoundary, p.width - margin)
      }
      if (targetY < margin || targetY > p.height - margin) {
        currentAngle = -currentAngle
        targetY = p.constrain(targetY, margin, p.height - margin)
      }

      // 添加新点
      points.push({
        x: targetX,
        y: targetY,
        thickness: p.random(2, 2.5),
        alpha: p.random(200, 220),
        angle: currentAngle,
      })

      // 保持固定长度
      if (points.length > maxPoints) {
        points.shift()
      }
    }

    // 绘制线条
    p.push()
    for (let i = 1; i < points.length; i++) {
      const point = points[i]
      const prevPoint = points[i - 1]

      // 添加随机中断
      if (p.random(1) > 0.05) {
        p.stroke(255, point.alpha)
        p.strokeWeight(point.thickness)

        // 添加微小的随机偏移
        const offsetX = p.random(-0.5, 0.5)
        const offsetY = p.random(-0.5, 0.5)
        p.line(prevPoint.x + offsetX, prevPoint.y + offsetY, point.x + offsetX, point.y + offsetY)
      }
    }
    p.pop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}

onMounted(() => {
  new p5(initSketch)
})

onUnmounted(() => {
  if (sketch) {
    sketch.remove()
  }
})
</script>

<template>
  <div id="hand-drawn-container" class="hand-drawn-container"></div>
</template>

<style scoped>
.hand-drawn-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: black;
}
</style>
