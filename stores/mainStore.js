import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            count: 0,	
        }
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    }
})