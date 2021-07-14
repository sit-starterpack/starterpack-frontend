<template>
  <div class="container p-5">
    <div class="flex flex-col w-full items-center">
      <h1 class="text-2xl font-bold">Admin</h1>
      <h2 class="text-xl font-semibold my-3">{{ name }}</h2>
    </div>
    <h1 v-if="userInResponsibilty.length === 0">No user for give feedback</h1>
    <AdminFeedbackForm
      v-for="user in userInResponsibilty"
      :key="user._id"
      :name="user.name"
      :nickname="user.nickname"
      :feedbacks="user.feedbacks"
    ></AdminFeedbackForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: this.$route.query.start,
      name: this.$route.params.name,
      end: this.$route.query.end,
      userInResponsibilty: [],
    };
  },
  async created() {
    const res = await this.callApi(
      'get',
      `/api/user?start=${this.start}&end=${this.end}`
    );
    const limitUser = res.data.docs;
    this.userInResponsibilty = limitUser;
  },
};
</script>

<style></style>
