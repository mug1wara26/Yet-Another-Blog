---
title: Modules
aside: false
---
<script setup>
import { data as modrevs } from '/data/modrevs.data'
import formatDate from "/.vitepress/theme/utils/formatDate"
</script>

<div class="center-page">

Here are all the modules I've taken in NUS so far.
These pages are meant to go through what a module covers,
and also allows me to mention fun things I did in that module.
If a module does not have a link to it, I either SU'd it or it did not have much worth talking about.

<template v-for="key in Object.keys(modrevs)">
  <h2> {{ key }} (Total MCs: {{ modrevs[key].map(x => x.frontmatter.mcs).reduce((x,y) => x+y, 0) }}) </h2>
  <ul>
    <li v-for="post of modrevs[key]">
    <div class="list-item">
      <span v-if="post.frontmatter.dontLink">{{ post.frontmatter.title }} {{ post.frontmatter.subtitle }}</span>
      <a v-else :href="post.url">{{ post.frontmatter.title }} {{ post.frontmatter.subtitle }}</a> <br> {{ post.frontmatter.mcs }} MCs
    </div>
    </li>
  </ul>
</template>

</div>

<style scoped>
.list-item {
    display: flex;
    justify-content: space-between;
}
</style>
