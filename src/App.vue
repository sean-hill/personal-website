<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

$family-primary: 'Open Sans';

@import '~bulma';
@import '~buefy/src/scss/buefy';

.shadowed {
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03) !important;
}

.is-top-section {
  @include mobile {
    padding-top: 2.25rem;
  }

  @include tablet {
    padding-top: 2.25rem;
  }

  @include from($desktop) {
    padding-top: 4.25rem;
  }
}
</style>
