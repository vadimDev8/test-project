import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


export default {
    state: {
		userName: {},
        answers: []
	},
	mutations: {
        setUserName(state, payload) {
            state.userName = payload
        },
        setAnswers(state, payload) {
            state.answers = payload
        }
	},
	actions: {
        async fetchUserName({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const userName = (await firebase.database().ref(`/users/${uid}/username`).once('value')).val() || {}
                return commit('setUserName', userName)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async createAnswersList({dispatch}, answers) {
            const uid = await dispatch('getUid')
            await firebase.database().ref(`/users/${uid}/answers`).push(answers)
        },
        async fetchAnswersList({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const answers = (await firebase.database().ref(`/users/${uid}/answers`).once('value')).val() || {}
                
                return answers
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async deleteAnswersList({dispatch}) {
            try {
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/answers`).remove()
            } catch (e) {
                throw e
            }
        }
    },
    getters: {
        userName(state) {
            return state.userName
        },
        answers(state) {
            return state.answers
        }
    }
}