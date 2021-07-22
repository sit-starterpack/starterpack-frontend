<template>
  <nuxt-link :to="linkPath">
    <CardStyle>
      <div class="py-5">
        <p>
          {{ name }}
        </p>
        <p class="ml-5">
          {{ adminOption[index].amountUser }}
        </p>
      </div>
    </CardStyle>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'admin' },
    adminOption: { type: Object, default: null },
    index: { type: Number, default: 0 },
  },
  data() {
    return {
      linkPath: '',
    };
  },
  created() {
    this.decreaseToTalUser();
    const name = this.name;
    const start = this.adminOption[this.index].start;
    const end = this.adminOption[this.index].end;
    this.linkPath = `/admin/${name}?start=${start}&end=${end}`;
  },
  methods: {
    decreaseToTalUser() {
      this.$emit('decreaseToTalUser');
    },
  },
};
</script>
