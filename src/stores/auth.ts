import { UserInfo } from './../../node_modules/@firebase/auth-types/index.d';
import { defineStore } from 'pinia';


interface AuthStore {
  user: UserInfo | null
}


export const useAuthStore = defineStore('authStore', {
  state: (): AuthStore => ({
    user: {} as UserInfo
  }),

  getters: {
    doubleCount(state: AuthStore) {
      return state.user;
    }
  },

  actions: {
    saveUserDetails(details: UserInfo | null) {
      this.user = details;
    }
  }
});
