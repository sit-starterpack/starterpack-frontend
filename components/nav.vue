<template>
  <div>
    <nav class="w-full h-20 border-b-4 border-white flex justify-between">
      <div class="ml-5 mt-6 font-bold">feedback-starter</div>
      <div
        v-if="$auth.loggedIn"
        class="cursor-pointer mr-5 mt-6"
        @click="logout()"
      >
        LOGOUT
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/');
    },
  },
};
</script>
