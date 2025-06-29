---
title: All Blog Posts
aside: false
---

<script setup>
import { data as blogs } from '/data/blogs.data'
import formatDate from "/.vitepress/theme/utils/formatDate"
import getSorted from "/.vitepress/theme/utils/getSorted"
const sortedBlogs = getSorted( blogs );
</script>

<ul>
  <li v-for="blog of sortedBlogs">
    <template v-if="blog.frontmatter.hidden !== true">
      <a :href="blog.url">{{ blog.frontmatter.title }}</a><br/>
      <span>{{ formatDate(blog.frontmatter.date) }}</span>
    </template>
  </li>
</ul>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
}
</style>
