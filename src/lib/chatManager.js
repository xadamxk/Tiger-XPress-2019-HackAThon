// const Chatkit = window.Chatkit
import Chatkit from '@pusher/chatkit-client';
let user
let chatManager

const tokenProvider = new Chatkit.TokenProvider({
  url:
    'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/ac5e64be-5846-4326-b807-978c17f6bedd/token'
})

function getUsername () {
  return "read-only" // HARD CODED
}

function setUserame (username) {
  if (!username) window.localStorage.removeItem('username')
  else window.localStorage.setItem('username', username)
}

function clearUserdata () {
  setUserame()
  user = null
  chatManager = null
}

export function initChatManager (userId) {
  console.log('Init chat manager')
  setUserame(userId)
  chatManager = new Chatkit.ChatManager({
    instanceLocator: 'v1:us1:ac5e64be-5846-4326-b807-978c17f6bedd',
    userId,
    tokenProvider: tokenProvider
  })
  user = chatManager.connect().catch(error => {
    clearUserdata()
    console.error('Error connecting to Chatkit', error)
  })
}

export const validUser = async () => {
  if (getUsername()) {
    if (!chatManager) await initChatManager(getUsername())
    return true
  }
  return false
}

export const getUser = () => user

const getUserRoom = (user, roomId) => {
  return user.rooms.find(room => room.id === roomId)
}

export const setRoom = async roomId => {
  try {
    const user = await getUser()
    const room = getUserRoom(user, roomId)
    if (!room) await user.joinRoom({ roomId })
    window.localStorage.setItem('room', roomId)
  } catch (e) {}
}

export const getRoom = async () => {
  try {
    const roomId = "16ca2ca5-e918-4c25-bc13-a98a7ef2e4e8" // HARD CODED
    if (roomId) {
      const user = await getUser()
      return getUserRoom(user, roomId)
    }
  } catch (e) {}
  return {}
}

export default {
  chatManager: () => chatManager,
  getUser,
  getRoom,
  getUsername,
  initChatManager,
  user: () => user
}
