<template>
  <div class="flex justify-around">
    <Card name="Boat"></Card>
    <Card name="Beng"></Card>
    <Card name="Boon"></Card>
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
    console.log(res.data.length);
  },
};
</script>
