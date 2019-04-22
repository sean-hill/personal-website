import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogContent from '@/components/modules/blog/BlogContent.vue'
import Buefy from 'buefy'
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: '# Title' })
}))

const localVue = createLocalVue()
localVue.use(Buefy)

describe('BlogContent.vue', () => {
  it('renders blog content', async () => {
    const blog = {
      permalink: 'test'
    }

    const wrapper = shallowMount(BlogContent, {
      propsData: {
        blog
      },
      localVue
    })

    await wrapper.vm.$nextTick()

    const content = wrapper.find('.content h1')
    expect(content.text()).toEqual('Title')
  })
})
