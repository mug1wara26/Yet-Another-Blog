import { createContentLoader } from 'vitepress'
export default createContentLoader('modrevs/**', {
  transform(raw) {
    const ret = {}
    raw.forEach(val => {
      const dir = val.url.split("/")[2]
      if (!(dir in ret)) ret[dir] = []

      ret[dir].push(val);
    })

    for (const [key, value] of Object.entries(ret)) {
      value.sort((a, b) => a.frontmatter.dontLink
        ? b.frontmatter.dontLink ? a.frontmatter.title.localeCompare(b.frontmatter.title) : 1
        : b.frontmatter.dontLink ? -1 : a.frontmatter.title.localeCompare(b.frontmatter.title));
    }

    return ret;
  }
})
