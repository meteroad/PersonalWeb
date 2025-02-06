<script setup lang="ts">
import { ref } from 'vue'

const videos = ref([
  {
    id: 1,
    title: '视频作品标题 1',
    description: '视频作品描述...',
    thumbnail: '@/assets/videos/thumb1.jpg',
    url: 'https://www.youtube.com/watch?v=xxx',
  },
  // 添加更多视频...
])
</script>

<template>
  <div class="visual-view">
    <div class="content">
      <h1>视觉作品</h1>
      <div class="visual-description">
        <p>这里展示了我的视觉创作作品，包括短片、动画等。</p>
      </div>

      <div class="video-grid">
        <div v-for="video in videos" :key="video.id" class="video-card">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" :alt="video.title" />
            <a :href="video.url" target="_blank" class="play-button">
              <span class="play-icon">▶</span>
            </a>
          </div>
          <div class="video-info">
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visual-view {
  min-height: 100vh;
  padding: 2rem;
  margin-top: 80px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.visual-description {
  max-width: 800px;
  margin-bottom: 3rem;
}

.visual-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.video-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.play-icon {
  font-size: 24px;
  margin-left: 4px;
}

.video-info {
  padding: 1.5rem;
}

.video-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.video-info p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .visual-view {
    padding: 1rem;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
