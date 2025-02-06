<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/" class="nav-brand">Meteoroad</router-link>
        <div class="nav-links">
          <router-link to="/introduction">Introduction</router-link>
          <router-link to="/music">Music</router-link>
          <router-link to="/blog">Other creations</router-link>
        </div>
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

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f5f5f5;
}

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
  align-items: center;
  background: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-brand {
  font-family: 'Shantell Sans', cursive;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-family: 'Shantell Sans', cursive;
  text-decoration: none;
  color: #666;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007aff;
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
