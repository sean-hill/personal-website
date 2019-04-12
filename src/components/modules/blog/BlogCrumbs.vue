<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="is-active">
        <a href="javascript:;" aria-current="page">{{ blog.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BlogCrumbs',
  props: ['blog']
}
</script>
