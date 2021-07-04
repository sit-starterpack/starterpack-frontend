<template>
  <div class="flex justify-center">
    <Feedback />
  </div>
</template>

<script>
import Feedback from '~/components/Feedback.vue';

export default {
  components: {
    Feedback,
  },
  middleware: 'auth',
};
</script>
