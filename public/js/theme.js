// 立即执行的函数，在页面加载前应用主题
(function() {
  // 检查存储的主题
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    // 直接设置背景和文本颜色，确保即使CSS未加载也能看到效果
    document.documentElement.style.backgroundColor = '#1A1A1A';
    document.documentElement.style.color = '#FFFFFF';
    // 页面加载后应用暗色模式样式
    document.addEventListener('DOMContentLoaded', function() {
      updateHeaderStyles('dark');
    });
  } else {
    // 页面加载后应用亮色模式样式
    document.addEventListener('DOMContentLoaded', function() {
      updateHeaderStyles('light');
    });
  }
})();

// 暴露一个全局函数用于切换主题
window.toggleTheme = function() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark-mode');
  
  // 直接设置背景和文本颜色，确保即时效果
  if (isDark) {
    html.style.backgroundColor = '#1A1A1A';
    html.style.color = '#FFFFFF';
    localStorage.setItem('theme', 'dark');
    updateHeaderStyles('dark');
  } else {
    html.style.backgroundColor = '#FFFFFF';
    html.style.color = '#000000';
    localStorage.setItem('theme', 'light');
    updateHeaderStyles('light');
  }
  
  // 强制重新应用样式
  document.body.style.display = 'none';
  setTimeout(() => {
    document.body.style.display = '';
  }, 5); // 短暂闪烁以强制重新渲染
};

// 更新导航栏内联样式以适应暗色模式
function updateHeaderStyles(theme) {
  const header = document.querySelector('.header-new');
  const navItems = document.querySelectorAll('.nav-item');
  const iconButtons = document.querySelectorAll('.icon-button');
  const siteTitle = document.querySelector('.site-title');
  const headerDivider = document.querySelector('.header-new > div:nth-child(2)');
  
  if (theme === 'dark') {
    // 暗色模式样式
    if (header) {
      header.style.backgroundColor = '#1a1a1a';
    }
    
    if (headerDivider) {
      headerDivider.style.backgroundColor = '#333';
    }
    
    if (siteTitle) {
      siteTitle.style.color = '#e0e0e0';
    }
    
    navItems.forEach(item => {
      item.style.color = '#e0e0e0';
    });
    
    iconButtons.forEach(btn => {
      btn.style.color = '#e0e0e0';
    });
  } else {
    // 亮色模式样式
    if (header) {
      header.style.backgroundColor = '#fff';
    }
    
    if (headerDivider) {
      headerDivider.style.backgroundColor = '#e5e5e5';
    }
    
    if (siteTitle) {
      siteTitle.style.color = '#333';
    }
    
    navItems.forEach(item => {
      item.style.color = '#333';
    });
    
    iconButtons.forEach(btn => {
      btn.style.color = '#333';
    });
  }
}
