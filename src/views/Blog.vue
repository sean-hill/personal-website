<template>
  <div class="section is-top-section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <BlogHeader/>
          <BlogList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/components/modules/blog/BlogHeader.vue'
import BlogList from '@/components/modules/blog/BlogList.vue'
import mixpanel from 'mixpanel-browser'

export default {
  name: 'blog',
  components: {
    BlogHeader,
    BlogList
  },
  mounted() {
    mixpanel.track('Viewed Blog Page')
  }
}
</script>
