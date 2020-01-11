import { $axios } from '@/services/axios'

// Initial state
const state = {
    isPostsLoading: false,
    posts: {
        data: [],
        error: null
    },
    postType: 'new',
    userSubreddits: [ 'vue' ]
}

// Getters
const getters = {
    isPostsLoading: state => state.isPostsLoading,
    posts: state => state.posts,
    postType: state => state.postType,
    userSubreddits: state => state.userSubreddits
}

// Actions
const actions = {
    getSubreddits ({ state, commit }) {
        if (state.userSubreddits.length > 0) {
            commit('setIsPostsLoading', true)

            const url = `https://www.reddit.com/r/${state.userSubreddits.join ('+')}/${state.postType}.json?limit=100&count=100`

            return $axios.get(url)
                .then(response => {
                    commit('setPosts', {
                        data: response.data.data.children,
                        error: null
                    })
                })
                .catch (error => {
                    commit('setPosts', {
                        data: [],
                        error
                    })
                })
                .finally(() => {
                    commit('setIsPostsLoading', false)
                })
        } else {
            commit('setPosts', {
                data: [],
                error: null
            })
        }
    },
    setUserSubreddits({ commit }, subreditsList) {
        commit('setUserSubreddits', subreditsList)
    },
    setSubredditsPostType({ commit }, postType) {
        commit('setSubredditsPostType', postType)
    }
}

// Mutations
const mutations = {
    setPosts (state, { data, error }) {
        state.posts = { data, error }
    },
    setIsPostsLoading(state, isLoading) {
        state.isPostsLoading = isLoading
    },
    setUserSubreddits(state, subreditsList) {
        // ensure subreddits are unique
        state.userSubreddits = [ ...new Set(subreditsList) ]
    },
    setSubredditsPostType(state, postType) {
        state.postType = postType
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
