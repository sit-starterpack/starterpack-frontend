<template>
  <div class="flex flex-col bg-gray-300 my-2 p-2 px-4">
    <div class="w-full flex justify-between items-center py-2">
      <div class="flex flex-col">
        <span class="text-md font-bold">Student ID:</span>
        <span class="text-sm font-semibold">{{ studentId }}</span>
      </div>
      <div class="flex w-1/2 justify-evenly">
        <AdminDay
          :day="2"
          :is-has-feedback="findFeedbackOn(2) ? true : false"
          :selected="selectedDay"
          @selectday="selectDay"
        ></AdminDay>

        <AdminDay
          :selected="selectedDay"
          :is-has-feedback="findFeedbackOn(3) ? true : false"
          :day="3"
          @selectday="selectDay"
        ></AdminDay>

        <AdminDay
          :is-has-feedback="findFeedbackOn(4) ? true : false"
          :selected="selectedDay"
          :day="4"
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
            class="w-full outline-none h-32 p-2"
            placeholder="Your feedback"
            :class="textAreaClass"
            :readonly="isReadOnly"
          ></textarea>
          <span v-if="isFeedbackError" class="text-red-500"
            >Your feedback is Empty</span
          >
          <div class="flex w-full justify-end">
            <button
              v-if="!isEdit"
              type="submit"
              class="p-2 px-4 mt-3 bg-green-400"
            >
              Send
            </button>
          </div>
        </form>
        <button
          v-if="isEdit"
          class="p-2 px-4 mt-3 bg-green-200"
          :class="{ hidden: isEditMode }"
          @click="editData"
        >
          Edit
        </button>
        <button
          v-if="isEdit"
          class="p-2 px-4 mt-3 bg-red-300"
          :class="{ hidden: isEditMode }"
          @click="deleteData"
        >
          Delete
        </button>
        <div v-if="isEditMode" class="flex w-full justify-end">
          <button class="p-2 px-4 mt-3 bg-green-400" @click="updateFeedback">
            Update
          </button>
          <button
            class="p-2 px-4 mt-3 bg-red-400 ml-3"
            @click="isEditMode = false"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import snarkdown from 'snarkdown';
export default {
  props: {
    stdId: { type: String, default: '64130500000' },
    feedbacks: { type: Array, default: null },
    userId: { type: String, default: '' },
  },
  data() {
    return {
      feedback: '',
      isFeedbackError: false,
      selectedDay: 2,
      isEdit: false,
      isEditMode: false,
      currentFeedback: null,
    };
  },
  computed: {
    textAreaClass() {
      if (this.isEdit) {
        if (this.isEditMode) return '';
        return 'cursor-not-allowed bg-gray-200';
      }
      return '';
    },
    isReadOnly() {
      if (this.isEdit) {
        if (this.isEditMode) return false;
        return true;
      }
      return false;
    },
    studentId() {
      return '64130500' + this.stdId;
    },
  },
  created() {
    this.setCurrentFeedback();
    this.setFeedbackField();
    if (this.currentFeedback) this.isEdit = true;
  },
  methods: {
    deleteData() {
      const isConfirm = window.confirm('Do you want to delete?');
      if (isConfirm) {
        this.$emit('deletefeedback', {
          userId: this.userId,
          feedbackId: this.currentFeedback.feedbackId._id,
        });
        this.isEdit = false;
        this.feedback = '';
      }
    },
    sendFeedback() {
      if (this.feedback && this.userId) {
        this.isFeedbackError = false;
        const payload = {
          comment: snarkdown(this.feedback),
          day: this.selectedDay,
          commentBy: this.$auth.user.nickname,
          userId: this.userId,
        };
        this.$emit('sendfeedback', payload);
        this.isEdit = true;
      } else {
        this.isFeedbackError = true;
      }
    },
    selectDay({ day, isEdit }) {
      this.selectedDay = day;
      this.isEdit = isEdit;
      this.setCurrentFeedback();
      this.setFeedbackField();
    },
    setFeedbackField() {
      const feedback = this.currentFeedback;
      if (feedback) {
        this.feedback = feedback.feedbackId.comment;
      } else {
        this.feedback = '';
      }
    },
    editData() {
      this.isEditMode = true;
    },
    updateFeedback() {
      if (!this.feedback) this.isFeedbackError = true;
      else {
        const feedbackId = this.currentFeedback.feedbackId._id;
        const payload = {
          comment: snarkdown(this.feedback),
          day: this.selectedDay,
          commentBy: this.$auth.user.nickname,
          userId: this.userId,
          feedbackId,
        };
        this.$emit('updatefeedback', payload);
        this.isEditMode = false;
      }
    },
    setCurrentFeedback() {
      this.currentFeedback = this.findFeedbackOn(this.selectedDay);
    },
    findFeedbackOn(day) {
      return this.feedbacks.find((feedback) => feedback.feedbackId.day === day);
    },
  },
};
</script>

<style></style>
