import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/modules/me/PortfolioCard.vue'
import Buefy from 'buefy'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('PortfolioCard.vue', () => {
  it('renders a portfolio card', async () => {
    const project = {
      title: 'Test Project',
      description: 'Sean is the best dev ever.',
      link: 'https://seanhill.info',
      image: 'https://test.link',
      background: '#000000',
      button: 'View demo'
    }

    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        project
      },
      localVue
    })

    const image = wrapper.find('.card-image img')
    expect(image.attributes('src')).toEqual(project.image)
    expect(image.attributes('alt')).toEqual(project.title)

    const title = wrapper.find('.title')
    expect(title.text()).toEqual(project.title)

    const description = wrapper.find('.content')
    expect(description.text()).toEqual(project.description)

    const link = wrapper.find('.button')
    expect(link.text()).toEqual(project.button)
    expect(link.attributes('href')).toEqual(project.link)

    expect(wrapper.vm.cardImageStyle).toEqual({
      background: project.background
    })
  })
})
