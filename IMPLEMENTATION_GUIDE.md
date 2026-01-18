# Editorial Magazine Blog Theme - Implementation Guide

## Overview

编辑杂志风格主题，为您的博客带来戏剧性的视觉冲击力和高端杂志的排版美学。

## Step 1: Import Fonts

在 `index.html` 或 `BaseHead.astro` 中添加Google Fonts：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Step 2: Import CSS Theme

```astro
---
import BaseHead from '../components/BaseHead.astro';
---
<html lang="zh-CN">
  <head>
    <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
    <link rel="stylesheet" href="/styles/editorial-magazine.css">
  </head>
  <!-- ... -->
</html>
```

## Step 3: Magazine Header Implementation

```html
<header class="magazine-header">
  <div class="header-ornament">
    <div class="ornament-line"></div>
    <div class="ornament-diamond"></div>
    <div class="ornament-line"></div>
  </div>

  <div class="header-content">
    <a href="/" class="site-logo">
      Reading<span class="logo-accent">&</span>Writing
    </a>

    <nav class="magazine-nav">
      <a href="#" class="nav-item active">Articles</a>
      <a href="#" class="nav-item">Essays</a>
      <a href="#" class="nav-item">Journal</a>
      <a href="#" class="nav-item">About</a>
    </nav>

    <div class="header-actions">
      <button class="mag-btn" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>

      <button class="mag-btn" id="theme-toggle" aria-label="Toggle theme">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        </svg>
      </button>
    </div>
  </div>
</header>
```

## Step 4: Hero Section Implementation

```html
<section class="hero-section">
  <div class="hero-content animate-slide-up">
    <div class="hero-text">
      <span class="hero-tagline">Featured Story</span>
      <h1 class="hero-title">
        The Art of <span class="highlight">Reading</span> and Writing
      </h1>
      <p class="hero-description">
        Exploring the intersection of literature, philosophy, and modern life.
        Join me on a journey through words, ideas, and the human experience.
      </p>
      <div class="hero-cta">
        <a href="#" class="btn-magazine btn-primary">Latest Articles</a>
        <a href="#" class="btn-magazine btn-secondary">About Me</a>
      </div>
    </div>

    <div class="hero-image-wrapper">
      <img src="/hero-image.jpg" alt="Hero" class="hero-image">
      <div class="hero-frame"></div>
    </div>
  </div>
</section>
```

## Step 5: Magazine Grid Layout

```html
<section class="magazine-grid">
  <!-- Featured Post (Large, spans 8 columns, 2 rows) -->
  <article class="featured-post animate-fade-scale">
    <a href="/blog/featured-post/">
      <img src="/featured-image.jpg" alt="" class="featured-image">
      <div class="featured-content">
        <span class="featured-tag">Featured</span>
        <h2 class="featured-title">The Philosophy of Minimalist Living</h2>
        <div class="featured-meta">
          <span>Jan 15, 2025</span> · <span>8 min read</span>
        </div>
      </div>
    </a>
  </article>

  <!-- Regular Posts (Each spans 4 columns) -->
  <article class="post-card animate-fade-scale">
    <a href="/blog/post-1/">
      <img src="/post-image-1.jpg" alt="" class="post-image">
      <div class="post-content">
        <span class="post-category">Philosophy</span>
        <h3 class="post-title">Finding Meaning in Simplicity</h3>
        <p class="post-excerpt">
          In a world of constant noise and distraction, the search for meaning
          often leads us back to simplicity. This exploration delves into the art
          of living with intention...
        </p>
        <div class="post-meta">
          <span class="post-author">Wang Hao</span>
          <span>·</span>
          <span>Jan 14, 2025</span>
        </div>
      </div>
    </a>
  </article>

  <article class="post-card animate-fade-scale">
    <a href="/blog/post-2/">
      <img src="/post-image-2.jpg" alt="" class="post-image">
      <div class="post-content">
        <span class="post-category">Literature</span>
        <h3 class="post-title">The Power of Reading Aloud</h3>
        <p class="post-excerpt">
          Discover how reading aloud transforms our relationship with literature,
          from ancient oral traditions to modern audiobooks...
        </p>
        <div class="post-meta">
          <span class="post-author">Wang Hao</span>
          <span>·</span>
          <span>Jan 12, 2025</span>
        </div>
      </div>
    </a>
  </article>

  <!-- More posts... -->
</section>
```

## Step 6: Typography Elements

### Drop Cap (首字母下沉)

```html
<p>
  <span class="drop-cap">T</span>he journey of a thousand miles begins with a single step.
  This ancient proverb reminds us that every great achievement starts small,
  with courage and persistence...
</p>
```

### Blockquote (引用块)

```html
<blockquote>
  The only way to do great work is to love what you do.
  <cite>— Steve Jobs</cite>
</blockquote>
```

## Step 7: Interactive Scripts

### Theme Toggle

```html
<script>
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
</script>
```

### Scroll Effect

```html
<script>
  const header = document.querySelector('.magazine-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
</script>
```

### Staggered Animation

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.post-card, .featured-post');

    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate-fade-scale');
    });
  });
</script>
```

## Step 8: Integration with Astro Blog

Replace your existing `src/pages/index.astro`:

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

const featuredPost = posts[0];
const regularPosts = posts.slice(1);
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
    <link rel="stylesheet" href="/styles/editorial-magazine.css">
  </head>
  <body>
    <!-- Magazine Header -->
    <header class="magazine-header">
      <div class="header-ornament">
        <div class="ornament-line"></div>
        <div class="ornament-diamond"></div>
        <div class="ornament-line"></div>
      </div>

      <div class="header-content">
        <a href="/" class="site-logo">
          Reading<span class="logo-accent">&</span>Writing
        </a>

        <nav class="magazine-nav">
          <a href="/blog" class="nav-item active">Articles</a>
          <a href="/videos" class="nav-item">Videos</a>
          <a href="/about" class="nav-item">About</a>
        </nav>

        <div class="header-actions">
          <button class="mag-btn" id="theme-toggle" aria-label="Toggle theme">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content animate-slide-up">
        <div class="hero-text">
          <span class="hero-tagline">Welcome</span>
          <h1 class="hero-title">
            Thoughts on <span class="highlight">Reading</span> & Writing
          </h1>
          <p class="hero-description">
            {SITE_DESCRIPTION}
          </p>
          <div class="hero-cta">
            <a href="/blog" class="btn-magazine btn-primary">Start Reading</a>
            <a href="/about" class="btn-magazine btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Magazine Grid -->
    <section class="magazine-grid">
      {featuredPost && (
        <article class="featured-post animate-fade-scale">
          <a href={`/blog/${featuredPost.id}/`}>
            <img
              src={featuredPost.data.heroImage || '/placeholder-hero.jpg'}
              alt={featuredPost.data.title}
              class="featured-image"
            />
            <div class="featured-content">
              <span class="featured-tag">Featured</span>
              <h2 class="featured-title">{featuredPost.data.title}</h2>
              <div class="featured-meta">
                <span>{featuredPost.data.pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </a>
        </article>
      )}

      {regularPosts.map((post) => (
        <article class="post-card animate-fade-scale">
          <a href={`/blog/${post.id}/`}>
            <img
              src={post.data.heroImage || '/placeholder-hero.jpg'}
              alt={post.data.title}
              class="post-image"
            />
            <div class="post-content">
              <span class="post-category">Article</span>
              <h3 class="post-title">{post.data.title}</h3>
              <p class="post-excerpt">{post.data.description}</p>
              <div class="post-meta">
                <span>{post.data.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </a>
        </article>
      ))}
    </section>

    <Footer />

    <!-- Scripts -->
    <script>
      const themeToggle = document.getElementById('theme-toggle');
      const savedTheme = localStorage.getItem('theme') || 'light';

      document.documentElement.setAttribute('data-theme', savedTheme);

      themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });

      const header = document.querySelector('.magazine-header');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
      });

      document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.post-card, .featured-post');

        cards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.1}s`;
          card.classList.add('animate-fade-scale');
        });
      });
    </script>
  </body>
</html>
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|-----------|-------|-------------------|
| Large | > 1200px | Full 12-column grid, hero side-by-side |
| Desktop | 992-1200px | Reduced spacing, smaller fonts |
| Tablet | 768-992px | 8-column grid, hero stacked |
| Mobile | 480-768px | 4-column grid, hero single column |
| Small | < 480px | Single column, full-width cards |

## Design Principles Used

1. **Asymmetric Layout**: Creates visual interest and breaks grid monotony
2. **Oversized Typography**: Dramatic titles for editorial feel
3. **High Contrast**: Pure black (#0A0A0A) on ivory (#FDFBF7)
4. **Burgundy Accents**: Editorial red for CTAs and highlights
5. **Gold Highlights**: Subtle gold for emphasis
6. **Waterfall Grid**: Different sized cards create magazine spread feel
7. **Ornamental Details**: Diamond decorations, decorative lines
8. **Staggered Animations**: Cards appear one by one with delay

## Migration Timeline

### Week 1
- [ ] Import Google Fonts
- [ ] Add CSS file
- [ ] Test basic typography
- [ ] Verify dark mode colors

### Week 2
- [ ] Replace Header component
- [ ] Build Hero section
- [ ] Create Magazine grid layout
- [ ] Test responsive breakpoints

### Week 3
- [ ] Add animations
- [ ] Implement theme toggle
- [ ] Add scroll effects
- [ ] Optimize performance

### Week 4
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Launch and gather feedback

## Tips for Success

1. **Image Quality**: Use high-quality images (at least 1600px wide for featured)
2. **Typography Hierarchy**: Maintain clear visual hierarchy with font sizes
3. **White Space**: Don't be afraid of empty space - it's part of the design
4. **Color Discipline**: Use burgundy sparingly for maximum impact
5. **Animation Timing**: Keep animations subtle and fast (100-200ms for interactions)
6. **Contrast Ratios**: Ensure WCAG AA compliance (4.5:1 for text)

## File Locations

- CSS Theme: `/Users/wanghao/myblog/public/styles/editorial-magazine.css`
- Implementation Guide: `/Users/wanghao/myblog/IMPLEMENTATION_GUIDE.md`

## Need Help?

Refer to the CSS file for class names and variable usage.
Test dark mode toggle to ensure all colors work correctly.
Check mobile view to ensure responsive design is working.
