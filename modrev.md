---
title: Modules
aside: false
---

<script setup>
import { data as modrevs } from '/data/modrevs.data'
import formatDate from "/.vitepress/theme/utils/formatDate"
</script>

<div class="center-page">

Here are all the modules I've taken in NUS so far. These pages are meant to go
through what a module covers, and also allows me to mention fun things I did in
that module. If a module does not have a link attached to it, I either SU'd it
or it did not have much worth talking about.

Total MCs:
{{ Object.values(modrevs).map(x => x.map(y => y.frontmatter.mcs).reduce((x, y) => x + y)).reduce((x, y) => x + y) }}/160

<template v-for="key in Object.keys(modrevs)">
  <h2> {{ key }} (Total MCs: {{ modrevs[key].map(x => x.frontmatter.mcs).reduce((x,y) => x+y, 0) }}) </h2>
  <span v-for="post of modrevs[key]">
    <div class="list-item">
      <span class="item-title" v-if="post.frontmatter.dontLink">
        {{ post.frontmatter.title }} {{ post.frontmatter.subtitle }}
      </span>
      <a class="item-title" v-else :href="post.url">
        {{ post.frontmatter.title }} {{ post.frontmatter.subtitle }}
      </a>
      <span class="item-meta">
        {{ post.frontmatter.ta ? "(TA)" : post.frontmatter.mcs + " MCs" }}
      </span>
    </div>
  </span>
</template>

</div>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.item-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* or remove to allow 2-line wrap */
}

.item-meta {
  flex-shrink: 0;
  margin-left: 8px;
  white-space: nowrap;
}

</style>
