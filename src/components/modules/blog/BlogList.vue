<template>
  <div class="blog-list">
    <br>
    <BlogListCard v-for="blog in blogs" :key="blog.title" :blog="blog"/>
  </div>
</template>

<script>
import { getBlogList } from '@/data/BlogList'
import BlogListCard from '@/components/modules/blog/BlogListCard.vue'

export default {
  name: 'BlogList',
  components: {
    BlogListCard
  },
  data: () => ({
    blogs: getBlogList()
  })
}
</script>

<style scoped lang="scss">
</style>
