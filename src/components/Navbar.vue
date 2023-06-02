<template>
  <nav
    class="navbar is-white is-spaced is-fixed-top shadowed"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img src="@/assets/brand2.png">
        </a>
        <a
          @click="toggleNav"
          role="button"
          class="navbar-burger burger"
          :class="navbarClass"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="navbarClass">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/blog" class="button is-info">Blog</router-link>
          </div>
          <div class="navbar-item">
            <a class="button is-white" href="https://www.linkedin.com/in/sean-hill">
              <b-icon pack="fab" icon="linkedin"></b-icon>
              <span class="is-hidden-desktop">Linkedin</span>
            </a>
          </div>
          <div class="navbar-item">
            <a class="button is-white" href="https://github.com/sean-hill">
              <b-icon pack="fab" icon="github"></b-icon>
              <span class="is-hidden-desktop">Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    burgerActive: false
  }),
  computed: {
    navbarClass() {
      return { 'is-active': this.burgerActive }
    }
  },
  methods: {
    toggleNav() {
      this.burgerActive = !this.burgerActive
    }
  }
}
</script>

<style scoped lang="scss">
</style>
