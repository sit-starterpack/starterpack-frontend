<template>
  <div class="flex flex-col">
    <div v-if="!isHave" class="flex justify-center">
      <div class="w-2/3 lg:w-2/3 mt-12 md:mt-32 text-center">
        <span class="font-bold md:text-2xl xl:text-xl">
          ตอนนี้น้องยังไม่มี Feedback นะค้าบ รอก่อนน้า</span
        >
        <img
          class="mt-10 md:w-1/2 xl:w-1/3"
          src="~/assets/sorry.png"
          alt="sorry"
        />
      </div>
    </div>
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
        class="w-8/12 md:px-36 lg:w-2/3"
      ></Assignment>
    </div>
  </div>
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
    }
  },
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
img {
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
