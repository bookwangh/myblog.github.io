// 搜索功能实现
document.addEventListener('DOMContentLoaded', function() {
  // 获取搜索元素
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput || !searchButton || !searchResults) {
    console.error('搜索元素未找到');
    return;
  }
  
  // 获取搜索数据
  async function fetchSearchData() {
    try {
      console.log('开始获取搜索数据...');
      const response = await fetch('/search-data.json');
      console.log('搜索数据响应状态:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('成功获取搜索数据:', data);
      return data;
    } catch (error) {
      console.error('获取搜索数据失败:', error);
      searchResults.innerHTML = '<p>搜索功能暂时不可用</p>';
      return [];
    }
  }
  
  // 执行搜索
  async function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '<p>请输入搜索关键词</p>';
      return;
    }
    
    searchResults.innerHTML = '<p>搜索中...</p>';
    
    try {
      const posts = await fetchSearchData();
      console.log('搜索数据:', posts);
      
      const results = posts.filter(post => {
        return post.title.toLowerCase().includes(query) || 
               post.content.toLowerCase().includes(query);
      });
      
      displayResults(results, query);
    } catch (error) {
      console.error('搜索失败:', error);
      searchResults.innerHTML = '<p>搜索过程中发生错误</p>';
    }
  }
  
  // 显示搜索结果
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p>没有找到匹配的结果</p>';
      return;
    }
    
    let html = `<div class="search-summary"><p>找到 ${results.length} 个结果</p></div>`;
    
    results.forEach(post => {
      html += `
        <div class="search-result-item">
          <h2 class="result-title"><a href="${post.url}">${post.title}</a></h2>
          <div class="result-date">${post.date}</div>
          <div class="result-excerpt">${getExcerpt(post.content, query)}</div>
        </div>
      `;
    });
    
    searchResults.innerHTML = html;
  }
  
  // 获取摘要，突出显示关键词
  function getExcerpt(content, query) {
    const plainText = content.replace(/<[^>]+>/g, '');
    const queryIndex = plainText.toLowerCase().indexOf(query.toLowerCase());
    
    if (queryIndex === -1) return plainText.substring(0, 150) + '...';
    
    const startIndex = Math.max(0, queryIndex - 50);
    const endIndex = Math.min(plainText.length, queryIndex + query.length + 50);
    let excerpt = plainText.substring(startIndex, endIndex);
    
    if (startIndex > 0) excerpt = '...' + excerpt;
    if (endIndex < plainText.length) excerpt = excerpt + '...';
    
    // 高亮关键词
    const regex = new RegExp(query, 'gi');
    excerpt = excerpt.replace(regex, match => `<span class="highlight">${match}</span>`);
    
    return excerpt;
  }
  
  // 事件监听
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // 如果URL中有查询参数，自动执行搜索
  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get('q');
  if (queryParam) {
    searchInput.value = queryParam;
    performSearch();
  }
});
