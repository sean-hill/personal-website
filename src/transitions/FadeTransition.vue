<template>
  <transition name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeTransition'
}
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: all 0.2s ease-in;
}
.fade-leave-active {
  transition: all 0.2s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>