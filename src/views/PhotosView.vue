<script setup lang="ts">
import { ref } from 'vue'

// 照片数据示例
const photos = ref([
  { id: 1, src: '@/assets/photos/photo1.jpg', title: '照片标题 1', description: '照片描述...' },
  { id: 2, src: '@/assets/photos/photo2.jpg', title: '照片标题 2', description: '照片描述...' },
  // 添加更多照片...
])
</script>

<template>
  <div class="photos-view">
    <div class="content">
      <h1>照片墙</h1>
      <div class="photos-description">
        <p>这里记录了我用相机捕捉的精彩瞬间。</p>
      </div>

      <div class="masonry-grid">
        <div v-for="photo in photos" :key="photo.id" class="photo-item">
          <img :src="photo.src" :alt="photo.title" />
          <div class="photo-info">
            <h3>{{ photo.title }}</h3>
            <p>{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.photos-view {
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

.photos-description {
  max-width: 800px;
  margin-bottom: 3rem;
}

.photos-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.masonry-grid {
  columns: 3;
  column-gap: 2rem;
}

.photo-item {
  break-inside: avoid;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
}

.photo-item img {
  width: 100%;
  height: auto;
  display: block;
}

.photo-info {
  padding: 1.5rem;
}

.photo-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.photo-info p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .masonry-grid {
    columns: 2;
  }
}

@media (max-width: 768px) {
  .photos-view {
    padding: 1rem;
  }

  .masonry-grid {
    columns: 1;
  }
}
</style>
