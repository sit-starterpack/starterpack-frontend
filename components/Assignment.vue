<template>
  <div class="w-full px-6 mt-7 text-sm md:text-base">
    <div class="border-b-2 border-gray-300">
      <div class="flex justify-center">
        <h1>Assignment #{{ day - 1 }}</h1>
      </div>
      <div
        class="
          font-bold
          flex
          items-center
          p-1
          bg-black
          rounded-full
          text-white
          w-28
          my-3
        "
      >
        <div class="rounded-full w-6 h-6 bg-white mr-3 py-2"></div>
        <div>P' {{ writer }}</div>
      </div>
    </div>
    <div class="my-4">
      <div class="px-2" v-html="comment"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: { type: String, default: 'this is comment' },
    day: { type: Number, default: 0 },
    author: { type: String, default: 'ruangrit' },
  },
  computed: {
    writer() {
      const split = this.author.split('');
      split[0] = split[0].toUpperCase();
      return split.join('');
    },
  },
};
</script>
