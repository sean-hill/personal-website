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
import AboutSection from '@/components/modules/me/AboutSection.vue'
import PortfolioSection from '@/components/modules/me/PortfolioSection.vue'
import ContactSection from '@/components/modules/me/ContactSection.vue'

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
