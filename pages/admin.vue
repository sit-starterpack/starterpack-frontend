<template>
  <div>
    <h1 class="flex justify-center">Who are you?</h1>
    <div class="flex justify-around mt-10">
      <Card name="Boat"></Card>
      <Card name="Beng"></Card>
      <Card name="Boon"></Card>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue';
export default {
  components: {
    Card,
  },
  data() {
    return {
      totalUser: 0,
    };
  },
  async created() {
    const res = await this.callApi('get', '/api/user');
    this.totalUser = res.data.length;
    // console.log(this.$auth.user);
  },
};
</script>
