<template>
  <div>
    <Navbar/>
    <AboutSection/>
    <PortfolioSection/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AboutSection from '@/components/AboutSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    AboutSection,
    PortfolioSection
  }
}
</script>
