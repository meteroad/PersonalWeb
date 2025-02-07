<script setup lang="ts">
import FireworksDisplay from '../components/Fireworks.vue'

interface Essay {
  id: number
  title: string
  content: string
  author: string
  date: string
  tags: string[]
}

const essays: Essay[] = [
  {
    id: 1,
    title: '关于创作',
    content:
      '创作是一种探索自我的过程。在文字的海洋中，我们寻找自己的声音，倾听内心的回响。每一次落笔，都是与自我对话的开始...',
    author: '流星',
    date: '2024-01',
    tags: ['创作', '思考'],
  },
  {
    id: 2,
    title: '城市印象',
    content:
      '在钢筋水泥的森林里，依然能找到属于自然的角落。清晨的阳光穿过高楼的缝隙，为这座城市镀上一层金色的温暖...',
    author: '流星',
    date: '2024-02',
    tags: ['城市', '观察'],
  },
  {
    id: 3,
    title: '音乐笔记',
    content:
      '音符是跳动的精灵，在五线谱上翩翩起舞。每一个音符都承载着情感，传递着无法用言语表达的心绪...',
    author: '流星',
    date: '2024-03',
    tags: ['音乐', '感悟'],
  },
]
</script>

<template>
  <div class="essays-view">
    <FireworksDisplay />
    <div class="content">
      <div class="essays-grid">
        <div v-for="essay in essays" :key="essay.id" class="essay-card">
          <h2 class="essay-title">{{ essay.title }}</h2>
          <p class="essay-content">{{ essay.content }}</p>
          <div class="essay-tags">
            <span v-for="tag in essay.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="essay-meta">
            <span class="author">{{ essay.author }}</span>
            <span class="date">{{ essay.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');

.essays-view {
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

.essays-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.essay-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.essay-card:hover {
  transform: translateY(-5px);
}

.essay-title {
  font-family: 'Poets Electra Roman No 2', serif;
  font-size: 26.4px;
  color: #fff;
  margin-bottom: 1.5rem;
}

.essay-content {
  font-family: 'Times New Roman', serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.essay-tags {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.essay-meta {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .essays-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .essays-view {
    padding: 1rem;
  }
}
</style>
