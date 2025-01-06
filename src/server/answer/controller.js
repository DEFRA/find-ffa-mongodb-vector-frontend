import { proxyFetch } from '../common/helpers/proxy.js'
import { config } from '../../config/config.js'
import { getMessages, setMessages } from '../session/messages.js'
import { log } from 'console'

const answerGetController = {
  handler(_request, h) {
    const { threadId } = _request.query
    log('threadId', threadId)
    const history = getMessages(_request, threadId)
    log('history', history)
    return h.view('answer/index', {
      pageTitle: 'Answer',
      heading: 'Answer',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'About'
        }
      ]
    })
  }
}

const answerPostController = {
  async handler(_request, h) {
    const searchEndpoint = `${config.get('backendApiEndpoint')}/chat`
    const result = await proxyFetch(searchEndpoint, {
      method: 'POST',
      body: JSON.stringify({ message: 'what is SFI?' })
    })
    const data = await result?.json()
    log(data)
    const threadId = data.response.sessionId
    setMessages(_request, threadId, data.response)

    return h.redirect(`/answer?threadId=${threadId}#test`)
  }
}

export { answerGetController, answerPostController }
