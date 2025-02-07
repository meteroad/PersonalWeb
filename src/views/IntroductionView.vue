<template>
  <div class="introduction-view">
    <div class="content">
      <div class="profile-section">
        <div class="profile-image">
          <img src="@/assets/profile-placeholder.jpg" alt="个人照片" />
        </div>
        <div class="profile-info">
          <h1>我</h1>
          <div class="info-content">
            <p class="bio">
              这里是您的个人简介，可以描述您的专业背景、兴趣爱好、创作理念等。
              通过音乐、视觉艺术、文字等多种形式，记录和分享生活中的感动与思考。
            </p>

            <div class="interests">
              <h2>兴趣领域</h2>
              <ul>
                <li>音乐信息检索</li>
                <li>音乐创作</li>
                <li>视觉艺术</li>
                <li>文字创作</li>
              </ul>
            </div>

            <div class="contact">
              <h2>联系方式</h2>
              <div class="contact-links">
                <a href="#" target="_blank">Email</a>
                <a href="#" target="_blank">GitHub</a>
                <a href="#" target="_blank">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.introduction-view {
  min-height: 100vh;
  padding: 2rem;
  margin-top: 80px;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

.profile-section {
  display: flex;
  gap: 4rem;
  align-items: start;
}

.profile-image {
  flex: 0 0 300px;
  position: sticky;
  top: 100px;
}

.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.profile-info {
  flex: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

h2 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #444;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
}

.interests ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.interests li {
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #666;
  font-size: 1rem;
}

.contact-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.contact-links a {
  color: #007aff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-links a:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .introduction-view {
    padding: 1rem;
  }

  .profile-section {
    flex-direction: column;
    gap: 2rem;
  }

  .profile-image {
    flex: none;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
    position: static;
  }

  .interests ul {
    flex-direction: column;
    gap: 0.5rem;
  }

  .interests li {
    text-align: center;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
