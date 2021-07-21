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
        class="w-8/12 md:px-36"
      ></Assignment>
    </div>
  </div>
  <!-- {{ user }} -->
</template>
<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.user.role === 'admin') {
      redirect('/admin');
    }
  },
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

<style>
nav {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

code {
  background-color: #f2f2f2;
  padding: 1em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  white-space: pre-wrap;
}

h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
p {
  display: block;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 0;
  margin-right: 0;
}
</style>
