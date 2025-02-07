<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const links = ref([
  {
    title: 'Introduction',
    path: '/introduction',
  },
  {
    title: 'MIR',
    path: '/mir',
  },
  {
    title: 'Some words',
    path: '/blog',
  },
])
</script>

<template>
  <div class="home">
    <div class="content">
      <h1 class="main-title">About</h1>

      <div class="links-container">
        <div
          v-for="link in links"
          :key="link.path"
          class="link-item"
          @click="router.push(link.path)"
        >
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
  padding-top: 80px;
  display: flex;
  align-items: center;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  text-align: center;
  z-index: 1;
}

.main-title {
  font-family: 'Shantell Sans', cursive;
  font-size: 20px;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 500;
}

.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.link-item {
  font-family: 'Shantell Sans', cursive;
  font-size: 14px;
  color: #666363;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.link-item:hover {
  color: #007aff;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }

  .main-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}
</style>
