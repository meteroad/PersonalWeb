<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FireworksDisplay from '../components/Fireworks.vue'
import { loadAllPoems } from '../utils/poemLoader'
import type { Poem } from '../utils/poemLoader'

const router = useRouter()
const poems = ref<Poem[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    poems.value = await loadAllPoems()
  } catch (error) {
    console.error('加载诗歌失败:', error)
  } finally {
    loading.value = false
  }
})

const openPoemDetail = (poemId: string) => {
  router.push(`/poems/${poemId}`)
}
</script>

<template>
  <div class="poems-view">
    <FireworksDisplay />
    <div class="content">
      <div v-if="loading" class="loading">加载中...</div>
      <div v-else class="poems-grid">
        <div
          v-for="poem in poems"
          :key="poem.id"
          class="poem-card"
          @click="openPoemDetail(poem.id)"
        >
          <h2 class="poem-title">{{ poem.title }}</h2>
          <p class="poem-content">{{ poem.content }}</p>
          <div class="poem-meta">
            <span class="author">{{ poem.author }}</span>
            <span class="date">{{ poem.date }}</span>
          </div>
          <div class="read-more">阅读全文</div>
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

.loading {
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  padding: 2rem;
}

.poems-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  padding: 0.5rem;
}

.poem-card {
  aspect-ratio: 7/4;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 1.2rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
}

.poem-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.12);
}

.poem-title {
  font-family: 'Poets Electra Roman No 2', serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.6rem;
}

.poem-content {
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  margin-bottom: 0.3rem;
  max-height: 3em;
}

.poem-meta {
  position: absolute;
  bottom: 0.6rem;
  left: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Times New Roman', serif;
  font-size: 0.8rem;
  display: flex;
  gap: 0.5rem;
}

.poem-meta .author::after {
  content: '·';
  margin-left: 0.5rem;
}

.read-more {
  position: absolute;
  bottom: 0.6rem;
  right: 0.6rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  font-family: 'Shantell Sans', cursive;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
}

.poem-card:hover .read-more {
  opacity: 1;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.15);
}

@media (max-width: 1200px) {
  .poems-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .poems-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .poems-view {
    padding: 1rem;
  }

  .poems-grid {
    grid-template-columns: 1fr;
  }
}
</style>
