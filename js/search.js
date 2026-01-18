// 搜索功能交互逻辑 - 仅替换导航栏
document.addEventListener('DOMContentLoaded', function() {
  const searchToggle = document.getElementById('searchToggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const header = document.querySelector('.header');
  
  // 点击搜索图标显示搜索框
  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      if (searchOverlay && header) {
        // 定位搜索框到导航栏位置
        const headerRect = header.getBoundingClientRect();
        searchOverlay.style.top = headerRect.top + 'px';
        searchOverlay.style.height = headerRect.height + 'px';
        
        // 显示搜索框
        searchOverlay.classList.add('active');
        
        // 自动聚焦到搜索输入框
        if (searchInput) {
          setTimeout(() => {
            searchInput.focus();
          }, 100);
        }
      }
    });
  }
  
  // 点击关闭按钮隐藏搜索框
  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', function() {
      if (searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });
  }
  
  // 按ESC键隐藏搜索框
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
    }
  });
  
  // 处理搜索提交
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // 这里可以实现搜索逻辑，例如跳转到搜索结果页面
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        console.log('搜索查询:', query);
        // 临时提示
        alert(`搜索功能正在开发中，您搜索的内容是: ${query}`);
      }
    });
  }
});
