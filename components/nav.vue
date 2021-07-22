<template>
  <nav
    class="
      absolute
      h-10vh
      z-50
      w-full
      border-b-4 border-white
      filter
      flex
      justify-center
      drop-shadow-md
      text-md
      md:text-xl md:px-10
      xl:text-base
    "
  >
    <div class="container flex justify-between items-center px-3">
      <div class="cursor-default w-1/2 lg:w-1/5 xl:text-xl font-bold">
        StarterPack
      </div>
      <div
        v-if="$auth.loggedIn"
        class="flex justify-end items-center w-1/2 md:w-1/3 lg:w-1/4"
      >
        <span class="font-bold text-md mr-4 md:mr-10">{{ studentId }}</span>
        <div class="cursor-pointer" @click="logout">LOGOUT</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    studentId() {
      return this.$auth.user.std_id;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/');
    },
  },
};
</script>
