<template>
  <div>
    <h1 class="font-size">Assignment #1</h1>
    {{ user }}
  </div>
</template>
<script>
import axios from '~/api/axios.js';
export default {
  data() {
    return {
      user: '',
    };
  },
  async mounted() {
    this.user = await axios.getUser('/api/user');
  },
};
</script>
