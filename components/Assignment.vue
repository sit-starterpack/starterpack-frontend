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
<style scoped>
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
