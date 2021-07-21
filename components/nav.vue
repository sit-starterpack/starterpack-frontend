<template>
  <div>
    <nav
      class="
        w-full
        h-20
        border-b-4 border-white
        flex
        justify-between
        filter
        drop-shadow-md
      "
    >
      <div class="cursor-default ml-5 mt-6 font-bold">feedback-starter</div>
      <div
        v-if="$auth.loggedIn"
        class="cursor-pointer mr-5 mt-6"
        @click="logout()"
      >
        <span v-if="$auth.user" class="font-bold text-md">{{
          $auth.user.std_id
        }}</span>
        LOGOUT
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/');
    },
  },
};
</script>
