export const homeController = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Ask a question...',
      heading: 'Ask a question...'
    })
  }
}
