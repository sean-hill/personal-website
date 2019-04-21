<template>
  <div>
    <AboutSection/>
    <PortfolioSection/>
    <ContactSection/>
  </div>
</template>

<script>
import AboutSection from '@/components/modules/me/AboutSection.vue'
import PortfolioSection from '@/components/modules/me/PortfolioSection.vue'
import ContactSection from '@/components/modules/me/ContactSection.vue'
import mixpanel from 'mixpanel-browser'

export default {
  name: 'home',
  components: {
    AboutSection,
    PortfolioSection,
    ContactSection
  },
  mounted() {
    mixpanel.track('Viewed Home Page')
  }
}
</script>
