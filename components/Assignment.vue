<template>
  <div>
    <div class="flex justify-center">
      <h1>Assignment #{{ day }}</h1>
    </div>
    <div>
      <span><b class="mr-2">Comment by:</b>P'{{ author }}</span>
    </div>
    <div>
      <div v-html="comment"></div>
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
};
</script>
