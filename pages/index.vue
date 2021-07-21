<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="container">
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
