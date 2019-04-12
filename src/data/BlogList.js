const blogs = {
  'clean-code': {
    title: 'JavaScript Clean Coding Best Practices',
    description:
      'When it comes to development, there is good programming and then there is great programming. Good programming functions...'
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
