<template>
  <div>
    <Navbar/>
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
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BlogHeader from '@/components/modules/blog/BlogHeader.vue'
import BlogList from '@/components/modules/blog/BlogList.vue'

export default {
  name: 'blog',
  components: {
    Navbar,
    BlogHeader,
    BlogList
  }
}
</script>
