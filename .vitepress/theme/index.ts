// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PageLayout from './layouts/PageLayout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: PageLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
