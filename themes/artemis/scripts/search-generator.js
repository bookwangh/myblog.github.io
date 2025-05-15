const fs = require('fs');
const path = require('path');

// 生成搜索数据
hexo.extend.generator.register('search_data', function(locals) {
  const config = this.config;
  const root = config.root || '/';
  
  const posts = locals.posts.sort('-date').filter(post => post.published);
  const searchData = posts.map(post => {
    return {
      title: post.title,
      content: post.content.replace(/<[^>]+>/g, '').replace(/\n/g, ' ').substring(0, 1000),
      url: root + post.path, // 使用基于站点根目录的相对路径
      date: post.date.format('YYYY-MM-DD')
    };
  });

  return {
    path: 'search-data.json',
    data: JSON.stringify(searchData)
  };
});
