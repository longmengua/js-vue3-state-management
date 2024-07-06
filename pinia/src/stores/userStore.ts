import { defineStore } from 'pinia';
import userController from '../controllers/userController';
import User from '../models/user';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser(id: string) {
      const user = await userController.fetchUser(id);
      this.user = user;
    },
  },
});
