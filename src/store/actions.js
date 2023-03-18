import httpClient from './../api/httpClient'

let actions = {
    login({ commit, dispatch }, {user, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.post('login', user)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        const token = res.data.data.authorisation.token
                        const user = res.data.data.user
                        commit('auth', { token, user })
                        commit('notification', { "status": "success", "message": res.data.message })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    logout({ commit }, {callback}) {
        return new Promise((resolve, reject) => {
            httpClient.post('/logout')
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        commit('logout')
                        delete httpClient.defaults.headers.common['Authorization']
                        commit('notification', { "status": "success", "message": res.data.message })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    createBook({ commit }, { book, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.post('/books', book)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        commit('notification', { "status": "success", "message": res.data.message })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    updateBook({ commit }, { id, book, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.put(`/books/${id}`, book)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        commit('notification', { "status": "success", "message": res.data.message })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    fetchBooks({ commit }, { current_page, per_page, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.get(`/books?page=${current_page}&per_page=${per_page}`)
                .then(res => {
                    resolve(res)
                    res.data.status ?
                        callback(res.data)
                        : commit('notification', { "status": "error", "message": res.data.message })
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    searchBooks({ commit }, { query, current_page, per_page, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.get(`/search-books?q=${query}&page=${current_page}&per_page=${per_page}`)
                .then(res => {
                    resolve(res)
                    res.data.status ?
                        callback(res.data)
                        : commit('notification', { "status": "error", "message": res.data.message })
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    fetchBookDetails({ commit }, { id, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.get(`/books/${id}`)
                .then(res => {
                    resolve(res)
                    res.data.status ?
                        callback(res.data)
                        : commit('notification', { "status": "error", "message": res.data.message })
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
    deleteBook({ commit }, { id, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.delete(`/books/${id}`)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        commit('notification', { "status": "success", "message": res.data.message })
                        callback(id)
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": err ?? err.response.data.message ?? err.message ?? "An error occurred" })
                    reject(err)
                })
        })
    },
}

export default actions