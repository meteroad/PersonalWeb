<script setup lang="ts">
import { useRouter } from 'vue-router'
import FireworksDisplay from '../components/Fireworks.vue'

const router = useRouter()

const sections = [
  {
    title: 'Poems',
    path: '/poems',
    description: '诗歌创作',
  },
  {
    title: 'Essays',
    path: '/essays',
    description: '随笔与短文',
  },
  {
    title: 'Reviews',
    path: '/reviews',
    description: '书评与思考',
  },
]
</script>

<template>
  <div class="blog-view">
    <FireworksDisplay />
    <div class="content">
      <h1>文字与思考</h1>

      <div class="sections-grid">
        <div
          v-for="section in sections"
          :key="section.path"
          class="section-card"
          @click="router.push(section.path)"
        >
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-view {
  min-height: 100vh;
  padding: 2rem;
  margin-top: 80px;
  background-color: rgb(10, 20, 40);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;
  font-family: 'Shantell Sans', cursive;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.section-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.section-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.section-card h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Shantell Sans', cursive;
}

.section-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog-view {
    padding: 1rem;
  }

  .sections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
