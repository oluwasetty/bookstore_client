let mutations = {
    auth(state, { token, user }) {
        state.token = token
        state.user = user
    },
    notification(state, {status, message}) {
        state.notification = {status, message}
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = {}
    }
}
export default mutations