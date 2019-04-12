const blogs = {
  'clean-code': {
    title: 'JavaScript Clean Coding Best Practices',
    description:
      'Writing clean code is what you must know and do in order to call yourself a professional developer...'
  }
}

export function getBlog(permalink) {
  return {
    permalink,
    ...blogs[permalink]
  }
}

export function getBlogList() {
  return Object.keys(blogs).map(permalink => ({
    permalink,
    ...getBlog(permalink)
  }))
}
