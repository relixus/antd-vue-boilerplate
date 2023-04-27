// Utilities
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toast: {
        show: false,
        message: ''
    }
  }),
})
