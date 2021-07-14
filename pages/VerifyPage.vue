<template>
  <div>
    <nuxt-link to="/admin">link</nuxt-link>

    <Verify />
  </div>
</template>

<script>
import Verify from '~/components/Verify.vue';

export default {
  components: {
    Verify,
  },
};
</script>
