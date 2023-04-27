import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: useStorage("user", {})
    }),
    getters: {
        getUser: (state) => {
            return state.user;
        }
    },
    actions: {
        attemptLogIn(user) {
            if(user.username == "admin"){
                this.user = user;
                return { success: true, message: "Login successful" }
            } else {
                return { success: false, message: "Invalid username or password"}
            }
        },
        logOut(){
            this.user = {};
        }
    }

});