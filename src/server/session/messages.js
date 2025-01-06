import { set, get } from './index.js'

const messagesKey = 'messages'

function setMessages(req, threadId, messages) {
  set(req, messagesKey, threadId, messages)
}

function getMessages(req, threadId) {
  const value = get(req, messagesKey, threadId)
  return value
}

export { setMessages, getMessages }
