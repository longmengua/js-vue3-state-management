<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const route = useRoute();
const userStore = useUserStore();
const user = ref(null);

const fetchUser = async (id) => {
  await userStore.fetchUser(id);
  user.value = userStore.user;
};

// 初始加载
onMounted(() => {
  fetchUser(route.params.id);
});

// 路由参数更新时
onBeforeRouteUpdate((to, from, next) => {
  fetchUser(to.params.id);
  next();
});
</script>
