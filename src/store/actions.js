import Vue from 'vue'
import httpClient from './../api/httpClient'
import store from "./index"

let actions = {
    handleResponse({ commit }, json) {
        let response = json.res;
        if (response.data.status) {
            let message = response.data.success
            // Vue.prototype.$toast.success({
            //     title: "Success",
            //     message: message,
            //     delay: 0
            // });
        } else {
            let message = response.data.error ? response.data.error : response.data.errors
            if (typeof message === 'string') {
                // Vue.prototype.$toast.error({
                //     title: "Error",
                //     message: message,
                //     delay: 0
                // });
            } else {
                // for (let key in message) {
                // if (message.hasOwnProperty(key)) {
                // Vue.prototype.$toast.error({
                //     title: "Error",
                //     message: message[key][0],
                //     delay: 0
                // });
                // }
                // }
            }
        }
    },
    login({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post('login', user)
                .then(res => {
                    dispatch('handleResponse', { res })
                    if (res.data.status) {
                        const token = res.data.token
                        const user = res.data.user
                        commit('auth_success', { token, user })
                        resolve(res)
                    }
                }).catch(err => {
                    commit('auth_error')
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            delete httpClient.defaults.headers.common['Authorization']
            // Vue.prototype.$toast.success({
            //     title: "Success",
            //     message: "Logout successful",
            //     delay: 0
            // });
            resolve()
        })
    },
    createBook({ commit, dispatch }, book) {
        httpClient.post('/books', book)
            .then(res => {
                dispatch('handleResponse', { res });
                return res.data
            }).catch(err => {
                console.log(err)
            })
    },
    fetchBooks({ commit }, {current_page, per_page, callback}) {
        httpClient.get(`/books?page=${current_page}&per_page=${per_page}`)
            .then(res => {
                res.data.status ?
                    callback(res.data)
                    : commit('error')
            }).catch(err => {
                console.log(err)
            })
    },
    searchBooks({ commit }, {query, current_page, per_page, callback}) {
        httpClient.get(`/search-books?q=${query}&page=${current_page}&per_page=${per_page}`)
            .then(res => {
                res.data.status ?
                    callback(res.data)
                    : commit('error')
            }).catch(err => {
                console.log(err)
            })
    },
    fetchBookDetails({ commit }, {id, callback}) {
        httpClient.get(`/books/${id}`)
            .then(res => {
                res.data.status ?
                    callback(res.data)
                    : commit('error')
            }).catch(err => {
                console.log(err)
            })
    },
}

export default actions