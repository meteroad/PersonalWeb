<script setup lang="ts">
import FireworksDisplay from '../components/Fireworks.vue'

interface Review {
  id: number
  title: string
  bookTitle: string
  content: string
  author: string
  date: string
  rating: number
}

const reviews: Review[] = [
  {
    id: 1,
    title: '在数字时代寻找诗意',
    bookTitle: '《人工时代的诗意》',
    content:
      '这是一本探讨科技与人文交融的深刻著作。作者以独特的视角审视了人工智能时代中人类的精神世界，提出了许多发人深省的观点...',
    author: '流星',
    date: '2024-01',
    rating: 4.5,
  },
  {
    id: 2,
    title: '音乐与哲学的对话',
    bookTitle: '《声音的哲学》',
    content:
      '本书从哲学的角度探讨了音乐的本质。作者通过对不同文化中音乐概念的分析，展现了声音艺术与人类思维的深层联系...',
    author: '流星',
    date: '2024-02',
    rating: 5,
  },
  {
    id: 3,
    title: '创新思维的突破',
    bookTitle: '《创新的本质》',
    content:
      '这是一本关于创新思维的精彩著作。书中不仅探讨了创新的方法论，更深入分析了创新背后的心理机制和社会因素...',
    author: '流星',
    date: '2024-03',
    rating: 4,
  },
]

function getRatingStars(rating: number) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '')
}
</script>

<template>
  <div class="reviews-view">
    <FireworksDisplay />
    <div class="content">
      <div class="reviews-grid">
        <div v-for="review in reviews" :key="review.id" class="review-card">
          <div class="review-header">
            <h2 class="review-title">{{ review.title }}</h2>
            <div class="rating">{{ getRatingStars(review.rating) }}</div>
          </div>
          <h3 class="book-title">{{ review.bookTitle }}</h3>
          <p class="review-content">{{ review.content }}</p>
          <div class="review-meta">
            <span class="author">{{ review.author }}</span>
            <span class="date">{{ review.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');

.reviews-view {
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

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.review-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.review-title {
  font-family: 'Poets Electra Roman No 2', serif;
  font-size: 26.4px;
  color: #fff;
  flex: 1;
  margin-right: 1rem;
}

.rating {
  color: #ffd700;
  font-size: 1.2rem;
  white-space: nowrap;
}

.book-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.review-content {
  font-family: 'Times New Roman', serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.review-meta {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .reviews-view {
    padding: 1rem;
  }
}
</style>
