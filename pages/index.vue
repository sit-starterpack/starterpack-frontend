<template>
  <div class="flex flex-col">
    <nav class="w-full h-20 border-b-4 border-white absolute">
      <div class="ml-5 mt-6 font-bold">feedback-starter</div>
    </nav>
    <div class="container">
      <verify-page />
      <!-- <feedback-page /> -->
    </div>
  </div>
</template>

<script>
import VerifyPage from '~/pages/VerifyPage.vue';
// import FeedbackPage from '~/pages/FeedbackPage.vue';
export default {
  components: {
    VerifyPage,
    // FeedbackPage,
  },

  data() {
    return {
      user: '',
    };
  },
  async mounted() {
    // this.user = this.getUser('api/user');
    this.user = await this.$axios.$get('/api/user');
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
nav {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
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
