const blogs = {
  'clean-code': {
    title: 'JavaScript Clean Coding Best Practices',
    description:
      'When it comes to development, there is good programming and then there is great programming. Good programming functions...'
  },
  'functional-programming': {
    title: 'What is Functional Programming?',
    description:
      'Functional programming has become a really hot topic in the JavaScript world...'
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
