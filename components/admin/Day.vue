<template>
  <div class="flex flex-col items-center justify-between">
    <span>Day {{ day }}</span>
    <button
      class="w-5 h-5 my-1"
      :class="buttonClass"
      @click="selectDay"
    ></button>
  </div>
</template>
<script>
export default {
  props: {
    day: { type: Number, default: 2 },
    isHasFeedback: { type: Boolean, default: false },
    selected: { type: Number, default: 2 },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonClass() {
      if (this.isHasFeedback) return 'bg-green-400';
      if (this.isActive) {
        return 'bg-gray-600';
      }
      return 'bg-white';
    },
  },
  watch: {
    selected() {
      if (this.selected === this.day) this.isActive = true;
      else this.isActive = false;
    },
  },
  mounted() {
    if (this.day === 2) this.isActive = true;
  },
  methods: {
    selectDay() {
      this.isActive = true;
      const payload = {
        day: this.day,
        isEdit: this.isHasFeedback,
      };
      this.$emit('selectday', payload);
    },
  },
};
</script>
