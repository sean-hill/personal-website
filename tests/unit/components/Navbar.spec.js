import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(VueRouter)

describe('Navbar.vue', () => {
  it('renders links to social pages', () => {
    const wrapper = shallowMount(Navbar, { localVue })
    const text = wrapper.text()
    expect(text).toMatch(/Twitter/)
    expect(text).toMatch(/Linkedin/)
    expect(text).toMatch(/Github/)
  })
})
