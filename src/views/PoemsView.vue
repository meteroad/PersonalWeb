<script setup lang="ts">
import FireworksDisplay from '../components/Fireworks.vue'

interface Poem {
  id: number
  title: string
  content: string
  author: string
  date: string
}

const poems: Poem[] = [
  {
    id: 1,
    title: '春日',
    content: '细雨湿衣看不见，闲花落地听无声。\n人间四月芳菲尽，山寺桃花始盛开。',
    author: '李白',
    date: '2024-01',
  },
  {
    id: 2,
    title: '夜思',
    content: '夜深星光烁，风静月华寒。\n独坐窗前望，思绪满江山。',
    author: '李清照',
    date: '2024-02',
  },
  {
    id: 3,
    title: '秋夕',
    content: '银河秋夜转，玉露清晨飞。\n岁月无声度，光阴似箭归。',
    author: '杜甫',
    date: '2024-03',
  },
  // 添加更多诗歌...
]
</script>

<template>
  <div class="poems-view">
    <FireworksDisplay />
    <div class="content">
      <div class="poems-grid">
        <div v-for="poem in poems" :key="poem.id" class="poem-card">
          <h2 class="poem-title">{{ poem.title }}</h2>
          <p class="poem-content">{{ poem.content }}</p>
          <div class="poem-meta">
            <span class="author">{{ poem.author }}</span>
            <span class="date">{{ poem.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');

.poems-view {
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
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.poems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.poem-card {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.poem-card:hover {
  transform: translateY(-5px);
}

.poem-title {
  font-family: 'Poets Electra Roman No 2', serif;
  font-size: 26.4px;
  color: #fff;
  margin-bottom: 1.5rem;
}

.poem-content {
  font-family: 'Times New Roman', serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.poem-meta {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .poems-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .poems-view {
    padding: 1rem;
  }

  .poems-grid {
    grid-template-columns: 1fr;
  }
}
</style>
