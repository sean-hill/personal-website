<template>
  <BlogContent :blog="blog"/>
</template>

<script>
import BlogContent from '@/components/modules/blog/BlogContent'
import { getBlog } from '@/data/BlogList'
import mixpanel from 'mixpanel-browser'

export default {
  name: 'ViewBlog',
  components: {
    BlogContent
  },
  computed: {
    blog() {
      return getBlog(this.$route.params.permalink)
    }
  },
  mounted() {
    this.$nextTick(() =>
      mixpanel.track('Viewed Blog Entry', {
        entry: this.blog.title
      })
    )
  }
}
</script>
