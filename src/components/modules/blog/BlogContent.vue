<template>
  <div class="section is-top-section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <div class="content is-medium" v-html="markdownHtml"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Prism from 'prismjs'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  highlight: function(code, lang) {
    return Prism.highlight(code, Prism.languages[lang], lang)
  }
})

export default {
  name: 'BlogContent',
  props: ['blog'],
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
