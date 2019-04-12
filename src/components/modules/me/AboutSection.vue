<template>
  <section class="section hero is-info is-medium" :style="sectionStyle">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-2 is-spaced">Hi, I'm Sean</h1>
        <h2
          class="subtitle"
        >Lead engineer at Q2, a secure, cloud-based digital banking solutions company headquartered in Austin, Texas.</h2>
        <button
          v-scroll-to="{ el: '#portfolio', offset: -80 }"
          class="button is-white is-large is-hidden-mobile"
        >View Portfolio</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  computed: {
    sectionStyle() {
      return {
        backgroundImage: `url('${require('@/assets/hero-background.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.subtitle {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
