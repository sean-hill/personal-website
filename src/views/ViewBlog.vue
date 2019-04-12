<template>
  <div>
    <Navbar/>
    <BlogContent :blog="blog"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import BlogContent from '@/components/modules/blog/BlogContent'
import { getBlog } from '@/data/BlogList'

export default {
  name: 'ViewBlog',
  components: {
    Navbar,
    BlogContent
  },
  computed: {
    blog() {
      return getBlog(this.$route.params.permalink)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
