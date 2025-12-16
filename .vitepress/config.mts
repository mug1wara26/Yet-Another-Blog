import footnote from "markdown-it-footnote";
import mathPlugin from "markdown-it-mathjax3";
import { defineConfig } from "vitepress";
import uiuaGrammar from "./uiua.tmLanguage.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aloysius Goo",
  description: "Yet Another Blog Site",
  base: "",
  head: [["link", { rel: "canonical", href: "https://aloysius.dev/" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog" },
      { text: "Modules", link: "/modrev" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mug1wara26" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/aloysius-goo/" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(mathPlugin);
    },
    languages: [
      {
        ...uiuaGrammar,
        name: "uiua",
      },
    ],
  },
});
