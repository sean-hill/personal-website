<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li class="is-active">
          <a href="javascript:;" aria-current="page">Blog</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader'
}
</script>

<style scoped lang="scss">
</style>
