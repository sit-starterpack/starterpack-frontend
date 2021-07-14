<template>
  <div class="flex justify-center">
    <!-- <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> -->
    <div class="flex flex-col">
      <div class="flex justify-center"><h1>Assignment #1</h1></div>
      <div><span>PBoat</span></div>
      <div class="flex justify-center bg-marked">
        <div class="w-1/2" v-html="markdown"></div>
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
      comment: '',
    };
  },
  computed: {
    markdown() {
      return marked(this.comment);
    },
  },
  async created() {
    const res = await this.callApi('get', '/api/user/' + this.$auth.user._id);
    if (res.status === 200) {
      this.user = res.data;
      this.comment = res.data.feedbacks[0].feedbackId.comment;
      // console.log(res.data);
    }
  },
};
</script>
