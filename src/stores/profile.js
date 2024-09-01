import {defineStore} from "pinia";

const data = {
    state() {
        return {
            info: null,
            token: null,
            isRemember: null,
            language: null,
            isShowPlaying: null,
            timezone: null,
            isAnonymous: null,
            connections: null
        }
    },
    getters: {
        id (state) {
            return state.info?.id?.toString();
        },
    },
}

export default defineStore(
    'profile',
    data
)
