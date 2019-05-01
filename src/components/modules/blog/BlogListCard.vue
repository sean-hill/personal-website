<template>
  <div class="blog-card shadowed">
    <h1 class="title is-4">{{ blog.title}}</h1>
    <p class="subtitle">{{ blog.description}}</p>
    <router-link
      :to="{ name: 'view-blog', params: { permalink: blog.permalink } }"
      class="button is-info"
    >Read now</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogListCard',
  props: ['blog']
}
</script>

<style scoped lang="scss">
.blog-card {
  padding: 25px;
  border: 1px solid #f7f7f7;
  border-radius: 3px;
  margin-bottom: 30px;
}
</style>
