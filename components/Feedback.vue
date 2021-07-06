<template>
  <div class="flex justify-center">
    <div class="flex flex-col">
      <div class="flex justify-center"><h1>Assignment #1</h1></div>
      <div><span>PBoat</span></div>
      <div class="flex justify-center">
        <p class="w-1/2">
          <!-- {{ user.feedbacks[0].feedbackId.comment }} -->
          {{ comment }}
        </p>
      </div>
      <!-- {{ user }} -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      comment: '',
    };
  },
  async created() {
    const res = await this.callApi('get', '/api/user/' + this.$auth.user._id);
    if (res.status === 200) {
      this.user = res.data;
      this.comment = res.data.feedbacks[0].feedbackId.comment;
      console.log(this.user);
      console.log(this.user.feedbacks[0].feedbackId.comment);
    }
  },
};
</script>
