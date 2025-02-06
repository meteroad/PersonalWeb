<script setup lang="ts">
import { ref } from 'vue'
import FireworksDisplay from '../components/Fireworks.vue'

interface Article {
  id: number
  title: string
  preview: string
  date: string
}

type TabName = 'poems' | 'essays' | 'reviews'

const activeTab = ref<TabName>('poems')

const articles: Record<TabName, Article[]> = {
  poems: [
    { id: 1, title: '诗歌标题 1', preview: '诗歌预览内容...', date: '2024-01-24' },
    // 添加更多诗歌...
  ],
  essays: [
    { id: 1, title: '短文标题 1', preview: '短文预览内容...', date: '2024-01-24' },
    // 添加更多短文...
  ],
  reviews: [
    { id: 1, title: '书评标题 1', preview: '书评预览内容...', date: '2024-01-24' },
    // 添加更多书评...
  ],
}
</script>

<template>
  <div class="blog-view">
    <FireworksDisplay />
    <div class="content">
      <h1>文字与思考</h1>

      <div class="tabs">
        <button
          :class="['tab-button', { active: activeTab === 'poems' }]"
          @click="activeTab = 'poems'"
        >
          诗歌
        </button>
        <button
          :class="['tab-button', { active: activeTab === 'essays' }]"
          @click="activeTab = 'essays'"
        >
          短文
        </button>
        <button
          :class="['tab-button', { active: activeTab === 'reviews' }]"
          @click="activeTab = 'reviews'"
        >
          书评
        </button>
      </div>

      <div class="articles-container">
        <transition name="fade" mode="out-in">
          <div :key="activeTab" class="articles-list">
            <article v-for="article in articles[activeTab]" :key="article.id" class="article-card">
              <h2>{{ article.title }}</h2>
              <p class="article-preview">{{ article.preview }}</p>
              <div class="article-meta">
                <span class="article-date">{{ article.date }}</span>
                <a href="#" class="read-more">阅读全文 →</a>
              </div>
            </article>
          </div>
        </transition>
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
  margin-bottom: 2rem;
  color: #fff;
  text-align: center;
  font-family: 'Shantell Sans', cursive;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-button {
  font-family: 'Shantell Sans', cursive;
  padding: 0.8rem 2rem;
  border: none;
  background: none;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab-button:hover {
  color: #fff;
}

.tab-button.active {
  color: #fff;
  border-bottom-color: #fff;
}

.articles-container {
  position: relative;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Shantell Sans', cursive;
}

.article-preview {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.read-more {
  color: #007aff;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .blog-view {
    padding: 1rem;
  }

  .tabs {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .tab-button {
    padding: 1rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }

  .tab-button.active {
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent;
  }
}
</style>
