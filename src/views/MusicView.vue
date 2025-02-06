<template>
  <div class="music-view">
    <h1>音乐创作</h1>

    <div class="music-sections">
      <!-- 乐队部分 -->
      <section class="music-section">
        <h2>乐队作品</h2>
        <div class="music-grid">
          <!-- 这里可以放置乐队作品列表 -->
          <div class="music-item">
            <img src="@/assets/band-placeholder.jpg" alt="乐队照片" />
            <h3>乐队名称</h3>
            <p>乐队简介和作品描述</p>
          </div>
        </div>
      </section>

      <!-- 个人创作部分 -->
      <section class="music-section">
        <h2>个人创作</h2>
        <div class="music-grid">
          <!-- 这里可以放置个人作品列表 -->
          <div class="music-item">
            <img src="@/assets/music-placeholder.jpg" alt="作品封面" />
            <h3>作品标题</h3>
            <p>作品描述</p>
          </div>
        </div>
      </section>

      <!-- 乐评部分 -->
      <section class="music-section">
        <h2>乐评文章</h2>
        <div class="article-list">
          <!-- 这里可以放置乐评文章列表 -->
          <article class="article-item">
            <h3>乐评标题</h3>
            <p class="article-preview">乐评预览内容...</p>
            <span class="article-date">发布日期: 2024-01-24</span>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.music-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 80px auto 0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.music-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.music-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #444;
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.music-item {
  background: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.music-item:hover {
  transform: translateY(-5px);
}

.music-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.music-item h3 {
  padding: 1rem;
  margin: 0;
  font-size: 1.2rem;
}

.music-item p {
  padding: 0 1rem 1rem;
  color: #666;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-item {
  padding: 1.5rem;
  background: #f8f8f8;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.article-item:hover {
  transform: translateX(10px);
}

.article-item h3 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
}

.article-preview {
  color: #666;
  margin-bottom: 1rem;
}

.article-date {
  color: #999;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .music-view {
    padding: 1rem;
  }

  .music-grid {
    grid-template-columns: 1fr;
  }
}
</style>
