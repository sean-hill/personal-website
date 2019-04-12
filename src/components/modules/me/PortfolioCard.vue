<template>
  <div class="card shadowed">
    <div class="card-image">
      <figure class="image is-4by3" :style="cardImageStyle">
        <img :src="project.image" :alt="project.title">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ project.title }}</p>
      <div class="content">{{ project.description }}</div>
      <a :href="project.link" target="_blank" class="button is-light">{{ project.button }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: ['project'],
  computed: {
    cardImageStyle() {
      return {
        background: this.project.background
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-image {
  img {
    padding: 15px;
    width: auto !important ;
    margin: auto !important ;
  }
}
</style>
