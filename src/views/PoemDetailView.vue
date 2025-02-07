<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FireworksDisplay from '../components/Fireworks.vue'
import { loadPoem } from '../utils/poemLoader'
import type { Poem } from '../utils/poemLoader'

const route = useRoute()
const router = useRouter()
const poem = ref<Poem | null>(null)
const loading = ref(true)

onMounted(async () => {
  const id = route.params.id as string
  try {
    const poemPath = `/src/content/poems/${id}.md`
    poem.value = await loadPoem(poemPath)
  } catch (error) {
    console.error('加载诗歌失败:', error)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="poem-detail-view">
    <FireworksDisplay />
    <div class="content">
      <button class="back-button" @click="goBack">← 返回</button>
      <div v-if="loading" class="loading">加载中...</div>
      <div v-else-if="poem" class="poem-container">
        <h1 class="poem-title">{{ poem.title }}</h1>
        <p class="poem-content">{{ poem.content }}</p>
        <div class="poem-meta">
          <span class="author">{{ poem.author }}</span>
          <span class="date">{{ poem.date }}</span>
        </div>
      </div>
      <div v-else class="error">未找到诗歌</div>
    </div>
  </div>
</template>

<style scoped>
.poem-detail-view {
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

.back-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Shantell Sans', cursive;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: #fff;
}

.loading,
.error {
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  padding: 2rem;
}

.poem-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 8px;
  animation: fadeIn 0.5s ease;
}

.poem-title {
  font-family: 'Poets Electra Roman No 2', serif;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.poem-content {
  font-family: 'Times New Roman', serif;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 2;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 2rem;
}

.poem-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .poem-detail-view {
    padding: 1rem;
  }

  .poem-container {
    padding: 2rem 1.5rem;
  }

  .poem-title {
    font-size: 1.8rem;
  }

  .poem-content {
    font-size: 1.2rem;
  }
}
</style>
