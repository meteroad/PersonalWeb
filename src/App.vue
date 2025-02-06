<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/" class="nav-brand">Meteoroad</router-link>
      <div class="nav-links">
        <router-link to="/mir">MIR</router-link>
        <router-link to="/music">音乐</router-link>
        <router-link to="/photos">照片墙</router-link>
        <router-link to="/visual">视觉</router-link>
        <router-link to="/blog">文字与思考</router-link>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300;400;500&display=swap');

.app-container {
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #666;
}

/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
