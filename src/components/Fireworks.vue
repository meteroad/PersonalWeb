<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import p5 from 'p5'

defineOptions({
  name: 'FireworksDisplay',
})

let sketch: p5

class Particle {
  pos: p5.Vector
  vel: p5.Vector
  acc: p5.Vector
  lifespan: number
  colors: number[][]
  colorIndex: number
  initialSize: number
  maxSpeed: number
  initialLifespan: number

  constructor(x: number, y: number, colors: number[][], angle?: number) {
    this.pos = sketch.createVector(x, y)
    if (angle !== undefined) {
      // 初始速度基于角度，模拟更自然的爆炸效果
      const speed = sketch.random(2, 4)
      this.vel = p5.Vector.fromAngle(angle).mult(speed)
    } else {
      this.vel = p5.Vector.random2D().mult(sketch.random(0.5, 2))
    }

    this.maxSpeed = this.vel.mag() // 记录初始速度大小
    this.acc = sketch.createVector(0, 0.08) // 调整重力加速度
    this.initialLifespan = 255
    this.lifespan = this.initialLifespan
    this.colors = colors
    this.colorIndex = 0
    this.initialSize = sketch.random(0.8, 1.5) // 更细的粒子
  }

  update() {
    // 应用速度限制，模拟空气阻力
    if (this.vel.mag() > this.maxSpeed) {
      this.vel.setMag(this.maxSpeed)
    }

    this.vel.add(this.acc)
    this.pos.add(this.vel)

    // 非线性衰减，使粒子在开始时保持较长时间的亮度
    this.lifespan = Math.max(0, this.lifespan - (1 - this.lifespan / this.initialLifespan) * 4)

    // 颜色渐变效果
    if (this.lifespan % 30 === 0) {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length
    }
  }

  display() {
    const color = this.colors[this.colorIndex]
    const size = this.initialSize * (0.3 + 0.7 * (this.lifespan / this.initialLifespan))
    sketch.strokeWeight(size)

    // 调整透明度，使其更加平滑
    const alpha = (this.lifespan / this.initialLifespan) * 255
    sketch.stroke(color[0], color[1], color[2], alpha)
    sketch.point(this.pos.x, this.pos.y)
  }

  isDead() {
    return this.lifespan <= 0
  }
}

class Firework {
  particles: Particle[]
  colors: number[][]
  pos: p5.Vector

  constructor(x: number, y: number) {
    this.particles = []
    this.pos = sketch.createVector(x, y)

    // 创建暖色调的中心颜色
    const centerColors = [
      [255, sketch.random(100, 150), 0], // 橙色
      [255, sketch.random(50, 100), 0], // 红橙色
      [255, sketch.random(150, 200), 0], // 黄色
    ]

    // 外围颜色
    const outerColors = [
      [sketch.random(150, 255), sketch.random(150, 255), sketch.random(150, 255)],
      [sketch.random(150, 255), sketch.random(150, 255), sketch.random(150, 255)],
    ]

    this.colors = [...centerColors, ...outerColors]

    // 创建粒子，使用角度分布实现更自然的爆炸效果
    const particleCount = sketch.random(180, 240)
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * sketch.TWO_PI
      this.particles.push(new Particle(x, y, this.colors, angle))
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update()
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1)
      }
    }
  }

  display() {
    sketch.blendMode(sketch.ADD)
    for (const particle of this.particles) {
      particle.display()
    }
    sketch.blendMode(sketch.BLEND)
  }

  isDead() {
    return this.particles.length === 0
  }
}

const fireworks: Firework[] = []

function initSketch(p: p5) {
  sketch = p

  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.parent('fireworks-container')
    p.background(10, 20, 40)
    p.colorMode(p.RGB)
  }

  p.draw = () => {
    p.background(10, 20, 40, 20) // 降低透明度，创造更长的拖尾效果

    // 降低烟花生成频率
    if (p.random(1) < 0.02) {
      const x = p.width / 2 + p.random(-300, 300)
      const y = p.height / 2 + p.random(-150, 150)
      fireworks.push(new Firework(x, y))
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update()
      fireworks[i].display()
      if (fireworks[i].isDead()) {
        fireworks.splice(i, 1)
      }
    }
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
  <div id="fireworks-container" class="fireworks-container"></div>
</template>

<style scoped>
.fireworks-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
