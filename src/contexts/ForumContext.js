import React from 'react'

const ForumContext = React.createContext({
    loggedInUser: null,
    "userLoggedIn": () => {},
})

export default ForumContext