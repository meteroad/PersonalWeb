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
  size: number

  constructor(x: number, y: number, colors: number[][]) {
    this.pos = sketch.createVector(x, y)
    this.vel = p5.Vector.random2D().mult(sketch.random(1, 3))
    this.acc = sketch.createVector(0, 0.05) // 减小重力
    this.lifespan = 255
    this.colors = colors
    this.colorIndex = 0
    this.size = sketch.random(2, 4)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.lifespan -= 1.5 // 降低消失速度

    // 颜色渐变效果
    if (this.lifespan % 50 === 0) {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length
    }
  }

  display() {
    const color = this.colors[this.colorIndex]
    sketch.stroke(color[0], color[1], color[2], this.lifespan)
    sketch.strokeWeight(this.size)
    sketch.point(this.pos.x, this.pos.y)
  }

  isDead() {
    return this.lifespan < 0
  }
}

class Firework {
  particles: Particle[]
  colors: number[][]

  constructor(x: number, y: number) {
    this.particles = []
    // 为每个烟花创建3-4种颜色的组合
    this.colors = [
      [sketch.random(150, 255), sketch.random(150, 255), sketch.random(150, 255)],
      [sketch.random(150, 255), sketch.random(150, 255), sketch.random(150, 255)],
      [sketch.random(150, 255), sketch.random(150, 255), sketch.random(150, 255)],
    ]

    // 增加粒子数量，创建更密集的效果
    const particleCount = sketch.random(150, 200)
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(x, y, this.colors))
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
    sketch.blendMode(sketch.ADD) // 添加混合模式使颜色更绚丽
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
    p.background(10, 20, 40, 15) // 降低透明度，创造拖尾效果

    // 降低烟花生成频率
    if (p.random(1) < 0.03) {
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
