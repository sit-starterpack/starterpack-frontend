<template>
  <div class="flex flex-col bg-gray-300 my-2 p-2 px-4">
    <div class="w-full flex justify-between items-center py-2">
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ name }}</span>
        <span class="text-sm font-medium">({{ nickname }})</span>
      </div>
      <div class="flex w-1/2 justify-evenly">
        <AdminDay
          :is-has-feedback="isHasFeedback(1)"
          :selected="selectedDay"
          @selectday="selectDay"
        ></AdminDay>

        <AdminDay
          :selected="selectedDay"
          :is-has-feedback="isHasFeedback(2)"
          :day="2"
          @selectday="selectDay"
        ></AdminDay>

        <AdminDay
          :is-has-feedback="isHasFeedback(3)"
          :selected="selectedDay"
          :day="3"
          @selectday="selectDay"
        ></AdminDay>
      </div>
    </div>
    <div class="mt-2">
      <div class="flex flex-col">
        <span class="text-md font-bold mb-1">Day: {{ selectedDay }}</span>
        <form @submit.prevent="sendFeedback">
          <textarea
            id="feedback"
            v-model="feedback"
            name="feedback"
            class="w-full outline-none h-20 p-2"
            placeholder="Your feedback"
          ></textarea>
          <span v-if="isFeedbackError" class="text-red-500"
            >Your feedback is Empty</span
          >
          <div class="flex w-full justify-end">
            <button v-if="!isEdit" class="p-2 px-4 mt-3 bg-green-400">
              Save
            </button>
            <button v-else class="p-2 px-4 mt-3 bg-green-200">Edit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'Student' },
    nickname: { type: String, default: 'Nickname' },
    feedbacks: { type: Array, default: null },
  },
  data() {
    return {
      feedback: '',
      isFeedbackError: false,
      selectedDay: 1,
      isEdit: false,
    };
  },
  created() {
    this.setFeedback();
  },
  methods: {
    sendFeedback() {
      if (this.feedback) {
        this.isFeedbackError = false;
        const payload = {
          comment: this.feedback,
          day: this.selectedDay,
          commentBy: this.$auth.user.nickname,
        };
        this.$emit('sendfeedback', payload);
      } else {
        this.isFeedbackError = true;
      }
    },
    selectDay(day) {
      this.selectedDay = day;
      this.setFeedback();
    },
    isHasFeedback(day) {
      if (this.feedbacks[day - 1]) {
        this.isEdit = true;
        return true;
      } else {
        this.isEdit = false;
        return false;
      }
    },
    setFeedback() {
      const feedback = this.feedbacks[this.selectedDay];
      if (feedback) {
        this.feedback = feedback.feedbackId.comment;
      }
    },
  },
};
</script>

<style></style>
