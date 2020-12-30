import axios from 'axios'
import router from 'vue-router'

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    error: null,
}

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error,
}

const actions = {
    async login({
        commit
    }, user) {
        commit('auth_req')
        try {
            let res = await axios.post('http://localhost:8080/api/v1/auth/login', user)
            if(res) {
                const token = res.data.data.token
                console.log(token)
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res
        } catch(err) {
            commit('auth_error', err)
        }
    },

    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/register');
        return
    },
}

const mutations = {
    auth_req(state) {
        state.error = null;
    },
    auth_success(state, token, user) {
        state.error = null
        state.token = token
        state.user = user
    },
    auth_error(state, err) {
        state.error = err.response.data.message
    },
    logout(state) {
        state.error = null
        state.token = ''
        state.user = ''
    },
}

export default {
    state,
    actions,
    mutations,
    getters
};