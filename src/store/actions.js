import httpClient from './../api/httpClient'

let actions = {
    login({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            httpClient.post('login', user)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        const token = res.data.token
                        const user = res.data.user
                        commit('auth', { token, user })
                        commit('notification', { "status": "success", "message": "Login Successful" })
                    } else {
                        commit('notification', { "status": "error", "message": "An error occurred" })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": "An error occurred" })
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        commit('logout')
        delete httpClient.defaults.headers.common['Authorization']
    },
    createBook({ commit }, { book, callback }) {
        return new Promise((resolve, reject) => {
            httpClient.post('/books', book)
                .then(res => {
                    resolve(res)
                    if (res.data.status) {
                        commit('notification', { "status": "success", "message": "Added Successfully" })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": "An error occurred" })
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
                        commit('notification', { "status": "success", "message": "Updated Successfully" })
                        callback()
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": "An error occurred" })
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
                    commit('notification', { "status": "error", "message": "An error occurred" })
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
                    commit('notification', { "status": "error", "message": "An error occurred" })
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
                    commit('notification', { "status": "error", "message": "An error occurred" })
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
                        commit('notification', { "status": "success", "message": "Deleted Successfully" })
                        callback(id)
                    } else {
                        commit('notification', { "status": "error", "message": res.data.message })
                    }
                }).catch(err => {
                    commit('notification', { "status": "error", "message": "An error occurred" })
                    reject(err)
                })
        })
    },
}

export default actions