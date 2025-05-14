// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// 当使用自定义域名时，将site设置为您的域名，并将base设置为'/'（根目录）
	// site: 'https://bookwangh.github.io',
	// base: '/myblog.github.io/',  // 使用自定义域名时不需要子路径
	site: 'https://wanghaobook1984.dpdns.org',
	base: '/',

	integrations: [mdx(), sitemap()],
	output: 'static',
});
