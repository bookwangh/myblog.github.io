// 导航项点击处理
document.addEventListener('DOMContentLoaded', function() {
  // 获取导航项元素
  const articlesNav = document.getElementById('nav-articles');
  const videosNav = document.getElementById('nav-videos');
  const aboutNav = document.getElementById('nav-about');
  
  // 获取内容区域元素
  const articlesSection = document.getElementById('articles-section');
  const videosSection = document.getElementById('videos-section');
  const aboutSection = document.getElementById('about-section');
  
  // 初始状态：显示文章区域，隐藏其他区域
  if (articlesSection) articlesSection.style.display = 'block';
  if (videosSection) videosSection.style.display = 'none';
  if (aboutSection) aboutSection.style.display = 'none';
  
  // 添加文章导航项点击事件
  if (articlesNav) {
    articlesNav.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 更新导航项状态
      articlesNav.classList.add('active');
      if (videosNav) videosNav.classList.remove('active');
      if (aboutNav) aboutNav.classList.remove('active');
      
      // 显示文章区域，隐藏其他区域
      if (articlesSection) articlesSection.style.display = 'block';
      if (videosSection) videosSection.style.display = 'none';
      if (aboutSection) aboutSection.style.display = 'none';
    });
  }
  
  // 添加视频导航项点击事件
  if (videosNav) {
    videosNav.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 更新导航项状态
      if (articlesNav) articlesNav.classList.remove('active');
      videosNav.classList.add('active');
      if (aboutNav) aboutNav.classList.remove('active');
      
      // 显示视频区域，隐藏其他区域
      if (articlesSection) articlesSection.style.display = 'none';
      if (videosSection) videosSection.style.display = 'block';
      if (aboutSection) aboutSection.style.display = 'none';
    });
  }
  
  // 添加关于导航项点击事件
  if (aboutNav) {
    aboutNav.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 更新导航项状态
      if (articlesNav) articlesNav.classList.remove('active');
      if (videosNav) videosNav.classList.remove('active');
      aboutNav.classList.add('active');
      
      // 显示关于区域，隐藏其他区域
      if (articlesSection) articlesSection.style.display = 'none';
      if (videosSection) videosSection.style.display = 'none';
      if (aboutSection) aboutSection.style.display = 'block';
    });
  }
  
  // 默认激活文章导航项
  if (articlesNav) articlesNav.classList.add('active');
});
