<template>
  <nuxt-link to="/admin">
    <CardStyle>
      <div class="py-5">
        <p>
          {{ name }}
        </p>
        <p class="ml-5">
          {{ userNumber[index] }}
        </p>
      </div>
    </CardStyle>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'admin' },
    userNumber: { type: Object, default: null },
    index: { type: Number, default: 0 },
  },
  created() {
    this.decreaseToTalUser();
  },
  methods: {
    decreaseToTalUser() {
      this.$emit('decreaseToTalUser');
    },
  },
};
</script>
