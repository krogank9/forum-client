import React from 'react'

const ForumContext = React.createContext({
    loggedInUser: null,
    "onUserLoggedIn": () => {},
    "onUserLogout": () => {},
})

export default ForumContext