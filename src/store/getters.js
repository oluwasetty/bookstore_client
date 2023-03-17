let getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
    user: state => state.user,
}

export default getters