<template>
  <header class="vp-doc">
    <h1 v-if="page.title">
      {{ page.title }}
    </h1>
    <h3 v-if="page.relativePath.startsWith('modrevs')">
      {{ frontmatter.subtitle }}

      (<a target="_blank" :href="`https://nusmods.com/courses/${page.title}`">NUSMods</a>)
    </h3>

    <i v-if="frontmatter.date"> <i></i>
      Last Update: {{ formatDate(frontmatter.date) }}
    </i>
  </header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import formatDate from '../utils/formatDate';
const { page, frontmatter } = useData();
</script>


<style scoped>
header {
  margin: 2rem 0;
}

header h3 {
  margin-top: 0.25rem;
}
</style>
