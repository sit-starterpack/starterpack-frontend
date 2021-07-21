<template>
  <div class="flex justify-center h-90vh overflow-hidden">
    <div class="container flex justify-center items-center text-center">
      <verify />
    </div>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.user) redirect('/feedback');
  },

  data() {
    return {
      user: '',
    };
  },
  async mounted() {
    this.user = await this.$axios.$get('/api/user');
  },
};
</script>

<style></style>
