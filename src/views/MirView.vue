<template>
  <div class="mir-view">
    <div class="content">
      <h1>音乐信息检索 (MIR)</h1>
      <div class="mir-description">
        <p>这里是我在音乐信息检索领域的研究和项目展示。点击下方链接可以跳转到具体项目页面。</p>
      </div>

      <div class="project-grid">
        <a href="#" class="project-card" target="_blank">
          <div class="project-content">
            <h3>项目名称</h3>
            <p>项目简短描述，介绍主要功能和技术特点。</p>
            <span class="link-text">访问项目 →</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mir-view {
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

.mir-description {
  max-width: 800px;
  margin-bottom: 3rem;
}

.mir-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.project-content {
  padding: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.project-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.link-text {
  color: #007aff;
  font-weight: 500;
}

@media (max-width: 768px) {
  .mir-view {
    padding: 1rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
