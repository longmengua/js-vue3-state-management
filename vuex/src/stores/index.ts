import { createStore } from 'vuex';
import userController from '../controllers/userController';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state: any, user: any) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }: any, id: any): Promise<any> {
      const user = await userController.fetchUser(id);
      commit('setUser', user);
    },
  },
});
