<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.$store.dispatch('fetchUser', this.$route.params.id);
  },
};
</script>
