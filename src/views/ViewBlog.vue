<template>
  <BlogContent :blog="blog"/>
</template>

<script>
import BlogContent from '@/components/modules/blog/BlogContent'
import { getBlog } from '@/data/BlogList'

export default {
  name: 'ViewBlog',
  components: {
    BlogContent
  },
  computed: {
    blog() {
      return getBlog(this.$route.params.permalink)
    }
  }
}
</script>
