<template>
  <div>
    <h1 class="font-size">Assignment #1</h1>
    <!-- {{ user }} -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // user: '',
    };
  },
  async created() {
    const res = await this.callApi('get', '/api/user/' + this.$auth.user._id);
    if (res.status === 200) {
      console.log(res.data);
    }
  },
};
</script>
