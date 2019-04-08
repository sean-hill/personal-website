<template>
  <div>
    <Navbar/>
    <AboutSection/>
    <PortfolioSection/>
    <ContactSection/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AboutSection from '@/components/AboutSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    AboutSection,
    PortfolioSection,
    ContactSection
  }
}
</script>
