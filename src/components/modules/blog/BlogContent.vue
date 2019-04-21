<template>
  <div class="section is-top-section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <BlogCrumbs :blog="blog"/>
          <FadeTransition>
            <div v-if="markdownHtml" class="content is-medium" v-html="markdownHtml"></div>
          </FadeTransition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Prism from 'prismjs'
import MarkdownIt from 'markdown-it'
import BlogCrumbs from '@/components/modules/blog/BlogCrumbs'
import FadeTransition from '@/transitions/FadeTransition'

const md = new MarkdownIt({
  highlight: function(code, lang) {
    return Prism.highlight(code, Prism.languages[lang], lang)
  }
})

export default {
  name: 'BlogContent',
  props: ['blog'],
  components: {
    BlogCrumbs,
    FadeTransition
  },
  data: () => ({
    markdown: undefined
  }),
  computed: {
    markdownHtml() {
      if (this.markdown) {
        return md.render(this.markdown)
      }

      return ''
    }
  },
  async mounted() {
    const response = await axios.get(`/blogs/${this.blog.permalink}.md`)
    this.markdown = response.data
  }
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 30px;
}
</style>
