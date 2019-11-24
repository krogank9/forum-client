import config from '../config'

const ForumApiService = {
  // Auth
  login(user_name, password) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user_name,
        password: password,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  refresh(authToken) {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      headers: {
        'Bearer': authToken
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Boards
  getBoards() {
    return fetch(`${config.API_ENDPOINT}/boards`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Threads
  getThreadInfo(threadId) {
    return fetch(`${config.API_ENDPOINT}/threads/${threadId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThreadsInBoard(boardId) {
    return fetch(`${config.API_ENDPOINT}/threads?board_id=${boardId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postThread(authToken, name, boardId, firstPostContent) {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Bearer': authToken
      },
      body: JSON.stringify({
        name: name,
        board_id: boardId,
        first_post_content: firstPostContent
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteThread(authToken, threadId) {
    return fetch(`${config.API_ENDPOINT}/threads/${threadId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Bearer': authToken
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Posts
  getPostsInThread(threadId) {
    return fetch(`${config.API_ENDPOINT}/posts?thread_id=${threadId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postInThread(authToken, threadId, content) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Bearer': authToken
      },
      body: JSON.stringify({
        thread_id: threadId,
        content: content
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deletePost(authToken, postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Bearer': authToken
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Users
  registerUser(user_name, password) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user_name,
        password: password
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ForumApiService
