<template>
  <div class="flex justify-center flex-col">
    <!-- <nav class="w-full h-20 border-b-4 border-white">
      <div class="ml-5 mt-6 font-bold">feedback-starter</div>
    </nav> -->
    <Feedback />
  </div>
</template>

<script>
import Feedback from '~/components/Feedback.vue';

export default {
  components: {
    Feedback,
  },
  middleware({ store, redirect }) {
    if (store.$auth.user.role === 'admin') {
      redirect('/admin');
    }
  },
};
</script>
<style>
nav {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
