<template>
  <!-- <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> -->

  <div class="flex flex-col">
    <div v-if="!isHave">NO DATA</div>
    <div
      v-for="feedback in feedbacks"
      v-else
      :key="feedback.feedbackId._id"
      class="flex justify-center"
    >
      <Assignment
        :comment="feedback.feedbackId.comment"
        :author="feedback.feedbackId.commentBy"
        :day="feedback.feedbackId.day"
        class="w-8/12"
      ></Assignment>
    </div>
  </div>
  <!-- {{ user }} -->
</template>
<script>
export default {
  data() {
    return {
      user: '',
      feedbacks: null,
      isHave: false,
    };
  },

  async created() {
    const res = await this.callApi('get', '/api/user/' + this.$auth.user._id);
    if (res.status === 200) {
      this.user = res.data;
      this.feedbacks = res.data.feedbacks;
      this.$store.dispatch('addId', res.data.std_id);
      if (this.feedbacks) {
        if (this.feedbacks.length > 0) {
          this.isHave = true;
        }
      }
      // this.feedbacks = res.data.feedbacks[0].feedbackId.feedbacks;
    }
  },
  methods: {},
};
</script>
