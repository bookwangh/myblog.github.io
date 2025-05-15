// 在页面加载后执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取页面中的所有元素
  const allElements = document.querySelectorAll('*');
  
  // 遍历所有元素
  allElements.forEach(element => {
    // 检查元素是否是header或与header相关
    if (element.tagName === 'HEADER' || 
        element.classList.contains('header') || 
        element.classList.contains('header-new')) {
      // 删除所有边框
      element.style.borderTop = 'none !important';
      element.style.borderBottom = 'none !important';
      element.style.border = 'none !important';
    }
  });
  
  // 特别处理页面顶部的线条
  const topBorders = document.querySelectorAll('body > *:first-child, body > *:nth-child(2)');
  topBorders.forEach(element => {
    element.style.borderTop = 'none !important';
    element.style.borderBottom = 'none !important';
    element.style.border = 'none !important';
  });
  
  console.log('边框删除脚本已执行');
});
