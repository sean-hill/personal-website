<template>
  <div id="portfolio" class="section">
    <div class="container">
      <h1 class="title is-2 is-spaced has-text-centered">Portfolio</h1>
      <br>
      <div class="columns">
        <div v-for="project in projects" :key="project.title" class="column is-one-third">
          <PortfolioCard :project="project"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/modules/me/PortfolioCard'

export default {
  name: 'PortfolioSection',
  components: {
    PortfolioCard
  },
  data: () => ({
    projects: [
      {
        title: 'Biller Direct',
        description:
          'Biller Direct is a new, card-enabled bill pay solution designed to dramatically improve the user experience and economic model of bill pay.',
        link: 'https://biller-direct.q2open.io',
        image: require('@/assets/biller-direct.png'),
        background: '#00abcc',
        button: 'View demo'
      },
      {
        title: 'CardSwap',
        description:
          'CardSwap is the first switch kit for subscription and eCommerce merchants, allowing users to put your card top-of-wallet for their favorite services—all in one place.',
        link: 'https://cardswap.q2open.io',
        image: require('@/assets/cardswap.png'),
        background: 'rgb(0, 122, 199)',
        button: 'View demo'
      },
      {
        title: 'BikerBuddy',
        description:
          'BikerBuddy lets people seek out other riders in their area who have offered up their place to stay for a low rate.',
        link: 'https://itunes.apple.com/us/app/bikerbuddy/id1274887782?mt=8',
        image: require('@/assets/bikerbuddy.png'),
        background: '#e06a32',
        button: 'View app'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
</style>
