<template>
  <div class="flex justify-center">
    <!-- <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> -->
    <div class="flex flex-col">
      <div
        v-for="feedback in feedbacks"
        :key="feedback.feedbackId._id"
        class="flex justify-center"
      >
        <Assignment
          :comment="markdown(feedback.feedbackId.comment)"
          :author="feedback.feedbackId.commentBy"
          :day="feedback.feedbackId.day"
          class="w-8/12 flex flex-col"
        ></Assignment>
      </div>
      <!-- {{ user }} -->
    </div>
  </div>
</template>
<script>
import marked from 'marked';

export default {
  data() {
    return {
      user: '',
      feedbacks: null,
    };
  },

  async created() {
    const res = await this.callApi('get', '/api/user/' + this.$auth.user._id);
    if (res.status === 200) {
      this.user = res.data;
      this.feedbacks = res.data.feedbacks;
      // this.feedbacks = res.data.feedbacks[0].feedbackId.feedbacks;
      console.log(this.feedbacks[0].feedbackId);
    }
  },
  methods: {
    markdown(comment) {
      console.log(comment);
      return marked(comment);
    },
  },
};
</script>

<style>
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
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
code {
  background-color: #f2f2f2;
  padding: 1em;
  display: block;
  white-space: pre-wrap;
}
</style>
